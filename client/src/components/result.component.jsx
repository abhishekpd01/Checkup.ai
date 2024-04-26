import React, {useEffect} from 'react'
import resultStyle from "./result.module.css"
import Nav from "./../widgets/nav.compoment"
import { FaVirusCovid } from "react-icons/fa6";
import { GrDocumentTest } from "react-icons/gr";
import { IoWarning } from "react-icons/io5";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const Result = () => {
    const navigate = useNavigate();
    
    const data = useSelector((state) => state.result.data)
    console.log(data)
    
    useEffect(() => {
        console.log("checking");
        if (!data || data.DiagnosisPossibilities.length === 0) {
          navigate("/quiz");
        }
      }, [data]); // Add 'data' to the dependency array
      
  return (
    <>
    <Nav/>
        <div className={resultStyle.resultDiv}>
            <div className={resultStyle.DiseasesDiv}>
                <div className={resultStyle.DiseasesDiv_Title}>
                    <h2>Possible Diagnose</h2>
                </div>
                <FaVirusCovid size={"10em"} style={{opacity: "25%", position: "absolute", left: "35%"}}/>
                {
                    data.DiagnosisPossibilities.map((disease) => {
                        return (
                            <div className={resultStyle.DiseasesDiv_Disease}>
                                <span style={{fontSize: "25px"}}>{disease}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className={resultStyle.testsDiv}>
                <h2>Diagnostic Test</h2>
                <GrDocumentTest size={"10em"} style={{opacity: "25%", position: "absolute", left: "35%"}}/>
                {
                    data.diagnostic_tests.map((disease) => {
                        return (
                            <div className={resultStyle.DiseasesDiv_Disease}>
                                <span style={{fontSize: "25px"}}>{disease}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className={resultStyle.actionsDiv}>
                <h2>Recommended Actions</h2>
                {
                    data.RecommendedAction.map((disease) => {
                        return (
                            <div className={resultStyle.DiseasesDiv_Disease}>
                                <span style={{fontSize: "25px"}}>{disease}</span>
                            </div>
                        )
                    })
                }
                <span>{data.MedicalAdvice}</span>
                <br/>
                <span><IoWarning /><b>Disclaimer: "This information is provided for informational purposes only and should not be considered a substitute for professional medical advice. Always consult with a healthcare provider regarding any medical concerns or symptoms."</b></span>
            </div>
        </div>
    </>
  )
}

export default Result