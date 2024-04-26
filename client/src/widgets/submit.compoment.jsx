import React from 'react'
import submitStyle from "./submit.module.css"
import axios from "axios"
import { useDispatch } from "react-redux"
import { result } from "./../features/resultSlice"
import { useNavigate } from "react-router-dom";

const Submit = ({data}) => {
    const navigate = useNavigate();
    const usedispatch = useDispatch()
    // console.log("hello data!", data)
    const handleSubmit = () => {
        axios.post('http://localhost:4000/quiz', {
            data: data
        })
        .then(function (response) {
            usedispatch(result(response))
            console.log(response);
            navigate("/result");

          })
          .catch(function (error) {
            console.log(error);
          });

    }
  return (
    <div className={submitStyle.submitDiv}>
        <div className={submitStyle.submitButton} onClick={() => handleSubmit()}>
            <h2>Submit Your Symptoms</h2>
        </div>
        <div className={submitStyle.tryAgain}>
            <h2>Try Again Symptoms Quiz</h2>
        </div>
    </div>
  )
}

export default Submit