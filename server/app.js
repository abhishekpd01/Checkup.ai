// jshint esversion: 6

const config = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const app  = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render(__dirname + "/views/index.ejs");
});

app.get("/quiz", function(req, res) {
    res.render("userInfo");
});

app.post("/quiz", async function(req, res) {

    // const answerArray = []; 
    
    
    const generationConfig = {temperature: 0.0};
    
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"}, generationConfig);
      
    const prompt =  req.body+"I am suffering from the above symptoms what possible disease can be diagnosed in context of India and suggest some possible actions that could take place, return the response as JSON object having keys diagnosis_possibilities, recommended_actions, medical_advice, disclaimer.";

    console.log(prompt);
   
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text(); 
        
        // Extract JSON content from the text
        const match = text.match(/\{[^{}]*\}/);
        
        if (match) {
            const cleanedText = match[0];
            
            // Debugging: Check the cleaned text
            console.log("Cleaned text:", cleanedText); 
        
            try {
                const jsonResponse = JSON.parse(cleanedText); // Use the cleaned text for parsing

                res.status(200).json({
                    DiagnosisPossibilities: jsonResponse.diagnosis_possibilities,
                    RecommendedAction: jsonResponse.recommended_actions,
                    MedicalAdvice: jsonResponse.medical_advice
                });
                // res.render("quiz", {
                //     Disclaimer: jsonResponse.disclaimer,
                //     DiagnosisPossibilities: jsonResponse.diagnosis_possibilities,
                //     RecommendedAction: jsonResponse.recommended_actions,
                //     MedicalAdvice: jsonResponse.medical_advice
                // });
            } catch (error) {
                console.error("Error parsing JSON:", error);
                console.log("Response text:", cleanedText);
                res.status(400).json({
                    "Response text:": cleanedText
                });
                // Handle the error appropriately
            }
        } else {
            console.error("No JSON content found in the text:", text);
            // Handle the absence of JSON content appropriately
        }
    } catch (error) {
        console.error("Error generating content:", error);
        // Handle the error appropriately
    }
});




app.listen(4000, () => {
    console.log("The Server is up and running on port 4000.");
})

//   I am suffering from the above symptoms, what possible disease can be diagnosed in context of India and suggest some possible actions that could take place, return the response as JSON object having keys diagnosis_possibilities, recommended_actions, medical_advice, disclaimer.
