import React, { useState } from 'react'
import quizStyle from "./quiz.module.css"
import backgroundImg from "./../images/quizBG.png"
import doctorImg from "./../images/doctor.png"
import Nav from './../widgets/nav.compoment'
const Quiz = () => {
    const [Taken, setTaken] = useState(1)
    const [Answers, setAnswers] = useState([])
    const data = {
        "diagnosis_possibilities": [
          "COVID-19 (coronavirus)",
          "Influenza (flu)",
          "Dengue fever",
          "Malaria",
          "Typhoid fever",
          "Chikungunya",
          "Viral upper respiratory infection"
        ],
        "recommended_actions": [
          "Seek urgent medical attention, especially if you have difficulty breathing.",
          "Isolate yourself from others to prevent the potential spread of infection, especially if COVID-19 is suspected.",
          "Stay hydrated by drinking plenty of fluids, such as water, electrolyte solutions, or herbal teas.",
          "Rest and avoid strenuous activities to help your body recover.",
          "Take over-the-counter medications such as acetaminophen or ibuprofen to reduce fever and alleviate body aches, if advised by a healthcare professional.",
          "Use saline nasal sprays or decongestants for congestion relief, if applicable.",
          "Practice good hygiene by washing hands frequently and covering your mouth and nose when coughing or sneezing.",
          "Follow any prescribed medications or treatment plan provided by your doctor.",
          "Monitor your symptoms closely and seek medical help if they worsen or persist."
        ],
        "medical_advice": "Given the combination of symptoms, it's crucial to seek medical attention urgently, particularly considering the ongoing COVID-19 pandemic and the possibility of other serious infectious diseases prevalent in India. Follow the recommended actions and consult a healthcare professional for proper diagnosis and treatment.",
        "disclaimer": "This information is provided for informational purposes only and should not be considered a substitute for professional medical advice. Always consult with a healthcare provider regarding any medical concerns or symptoms."
      }
      const quiz = {
        "1": {
          question: "Are you suffering from Fever?",
          A: "Yes",
          B: "No"
        },
        "2": {
          question: "Do you have Body Pain?",
          A: "Yes",
          B: "No"
        },
        "3": {
          question: "Are you suffering from Sore Throat?",
          A: "Yes",
          B: "No"
        },
        "4": {
          question: "Do you have any Previous Blood Pressure problems?",
          A: "Yes",
          B: "No"
        },
        "5": {
          question: "Do you suffering from diabaties",
          A: "Yes",
          B: "No"
        },
        "6": {
          question: "Do you have Cough or Cold?",
          A: "Yes",
          B: "No"
        },
        "7": {
          question: "Do you Feel Shivering?",
          A: "Yes",
          B: "No"
        },
        "8": {
          question: "Do you have Loose Motion?",
          A: "Yes",
          B: "No"
        },
        "9": {
          question: "Do feel Nausea?",
          A: "Yes",
          B: "No"
        },
        "10": {
          question: "Do you have Head Ache?",
          A: "Yes",
          B: "No"
        },
        "11": {
          question: "Are you having Breathing Problems?",
          A: "Yes",
          B: "No"
        },
        "12": {
          question: "Do you have Anxiety?",
          A: "Yes",
          B: "No"
        },
      }
      const handleSelection = (data) => {
        setAnswers([...Answers, data]);
        setTaken(Taken+1)
        console.log(Taken)
        console.log(Answers)
      } 
  return (
  <div>
    <Nav/>
    <img src={backgroundImg} className={quizStyle.BG} alt="backgroud Image for Quiz" />
    <img src={doctorImg} className={quizStyle.doctorImg} alt="Doctor Image for Quiz" />
    <div className={quizStyle.quizDiv}>
      <div className={quizStyle.questionDiv}>
        <h2>{quiz[Taken].question}</h2>
      </div>
        <div className={quizStyle.optionsDiv} onClick={() => handleSelection({"question": quiz[Taken].question, "answer": quiz[Taken].A})}>
          <input type='radio' name='ans' style={{display: "none"}}></input>
          <h2>{quiz[Taken].A}</h2>
        </div>
        <div className={quizStyle.optionsDiv} onClick={() => handleSelection({"question": quiz[Taken].question, "answer": quiz[Taken].B})}>
          <input type='radio' name='ans' style={{display: "none"}}></input>
          <h2>{quiz[Taken].B}</h2>
        </div>
    </div>
  </div>
  )
}

export default Quiz