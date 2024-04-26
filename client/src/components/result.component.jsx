import React from 'react'
import resultStyle from "./result.module.css"
import Nav from "./../widgets/nav.compoment"
import ResultImg from "./../images/result.png"
import { FaVirusCovid } from "react-icons/fa6";
import { GrDocumentTest } from "react-icons/gr";
import { IoWarning } from "react-icons/io5";

const Result = () => {

  return (
    <>
    <Nav/>
        <div className={resultStyle.resultDiv}>
            <div className={resultStyle.DiseasesDiv}>
                <div className={resultStyle.DiseasesDiv_Title}>
                    <h2>Possible Diagnose</h2>
                </div>
                <FaVirusCovid size={"10em"} style={{opacity: "25%", position: "absolute", left: "35%"}}/>
            </div>
            <div className={resultStyle.testsDiv}>
                <h2>Diagnostic Test</h2>
                <GrDocumentTest size={"10em"} style={{opacity: "25%", position: "absolute", left: "35%"}}/>
            </div>
            <div className={resultStyle.actionsDiv}>
                <h2>Recommended Actions</h2>
                <span></span>
                <br/>
                <br/>
                <span><IoWarning /><b>Disclaimer: "This information is provided for informational purposes only and should not be considered a substitute for professional medical advice. Always consult with a healthcare provider regarding any medical concerns or symptoms."</b></span>
            </div>
        </div>
    </>
  )
}

export default Result