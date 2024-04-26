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

app.get("/userInfo", function(req, res) {
    res.render("userInfo");
});

app.post("/userInfo", async function(req, res) {
    // const q1 = req.body.q1;
    // const q2 = req.body.q2;
    // const q3 = req.body.q3;
    // const q4 = req.body.q4;
    // const q12 = req.body.q12;

    const answerArray = []; 

    for (let i = 1; i <= numberOfQuestions; i++) {
        const question = req.body['q' + i];
        answerArray.push(question);
    }
    
    const generationConfig = {temperature: 0.0};
    
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"}, generationConfig);
      
    const prompt = "I am suffering from the following symptoms:"+q1+", "+q2+", "+q3+", "+q4+", "+q12+", what possible disease can be diagnosed in context of India and suggest some possible actions that could take place, return the response as JSON object having keys diagnosis_possibilities, recommended_actions, medical_advice, disclaimer.";

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
        
                res.render("result", {
                    Disclaimer: jsonResponse.disclaimer,
                    DiagnosisPossibilities: jsonResponse.diagnosis_possibilities,
                    RecommendedAction: jsonResponse.recommended_actions,
                    MedicalAdvice: jsonResponse.medical_advice
                });
            } catch (error) {
                console.error("Error parsing JSON:", error);
                console.log("Response text:", cleanedText);
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

app.get("/result", function(req, res) {
    res.render(__dirname + "/views/result.ejs");
});

app.post("/result", async function(req, res) {
    // const generationConfig = {temperature: 0.0};
    
    // // For text-only input, use the gemini-pro model
    // const model = genAI.getGenerativeModel({ model: "gemini-pro"}, generationConfig);
      
    // const prompt = "I am suffering from the following symptoms:Breathing Problem, Cough & Cold, fever, Body pain, Runny Nose, Shivering, Sneezing, Loose Motion, Nausea, Head Ache, Sleep Disturbance, Sore Throat, what possible disease can be diagnosed in context of India and suggest some possible actions that could take place, return the response as JSON object having keys diagnosis_possibilities, recommended_actions, medical_advice, disclaimer.";
   
    // try {
    //     const result = await model.generateContent(prompt);
    //     const response = await result.response;
    //     const text = await response.text(); 
        
    //     // Extract JSON content from the text
    //     const match = text.match(/\{[^{}]*\}/);
        
    //     if (match) {
    //         const cleanedText = match[0];
            
    //         // Debugging: Check the cleaned text
    //         console.log("Cleaned text:", cleanedText); 
        
    //         try {
    //             const jsonResponse = JSON.parse(cleanedText); // Use the cleaned text for parsing
        
    //             res.render("result", {
    //                 Disclaimer: jsonResponse.disclaimer,
    //                 DiagnosisPossibilities: jsonResponse.diagnosis_possibilities,
    //                 RecommendedAction: jsonResponse.recommended_actions,
    //                 MedicalAdvice: jsonResponse.medical_advice
    //             });
    //         } catch (error) {
    //             console.error("Error parsing JSON:", error);
    //             console.log("Response text:", cleanedText);
    //             // Handle the error appropriately
    //         }
    //     } else {
    //         console.error("No JSON content found in the text:", text);
    //         // Handle the absence of JSON content appropriately
    //     }
    // } catch (error) {
    //     console.error("Error generating content:", error);
    //     // Handle the error appropriately
    // }    
});


app.listen(3000, () => {
    console.log("The Server is up and running on port 3000.");
})

//   I am suffering from the above symptoms, what possible disease can be diagnosed in context of India and suggest some possible actions that could take place, return the response as JSON object having keys diagnosis_possibilities, recommended_actions, medical_advice, disclaimer.
