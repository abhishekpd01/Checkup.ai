import React, {useState} from 'react'
import submitStyle from "./submit.module.css"
import axios from "axios"
import { useDispatch } from "react-redux"
import { result } from "./../features/resultSlice"
import { useNavigate } from "react-router-dom";
import LoadingGIF from "./../images/loading.gif"

const Submit = ({data}) => {
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const usedispatch = useDispatch()
    // console.log("hello data!", data)
    const handleSubmit = () => {
      setLoading(true)
        axios.post('http://localhost:4000/quiz', {
            data: data
        })
        .then(function (response) {
            usedispatch(result(response))
            console.log(response);
            navigate("/result");
            setLoading(false)

          })
          .catch(function (error) {
            console.log(error);
            setLoading(false)
          });

    }
  return (
    <div className={submitStyle.submitDiv}>
        <div className={submitStyle.submitButton} onClick={() => handleSubmit()}>
            <h2>Submit Your Symptoms</h2>
        </div>
            {
              (Loading) ? <img src={LoadingGIF} height={100} alt="loading Icon" /> : ""
            }
        <div className={submitStyle.tryAgain}>
            <h2>Try Again Symptoms Quiz</h2>
        </div>
    </div>
  )
}

export default Submit