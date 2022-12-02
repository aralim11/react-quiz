import Summery from "../Summery";
import Analysis from "../Analysis";
// import useAnswers from "../../hooks/useAnswers";
import { useLocation } from "react-router-dom";

function Result() {
    // const { snapshot } = useAnswers("5Xy-t8k_M4A");

    const { state } = useLocation();

    console.log(state);
  
    return(
        <>
            <Summery />
            <Analysis />
        </>
    )
}

export default Result;