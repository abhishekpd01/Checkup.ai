import React, { useState } from 'react'
import quizStyle from "./quiz.module.css"
import backgroundImg from "./../images/quizBG.png"
import doctorImg from "./../images/doctor.png"
import Nav from './../widgets/nav.compoment'
import quiz from "./questions"
const Quiz = () => {
    const [Taken, setTaken] = useState(1)
    const [Answers, setAnswers] = useState([])
      
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