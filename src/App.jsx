import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";
import { data } from "./data/data";
import { useState } from "react";

import "./App.css";

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, heigth, weight) => {
    e.preventDefault();
    const heightFloat = +heigth.replace(",", ".");
    const weightFloat = +weight.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);
    setImc(imcResult);

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max)
      {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
      if(!info){return}
    })
  };

    const resetCalc = (e) => {
      e.preventDefault()
      setImc("")
      setInfo("")
      setInfo("")
    }

  return (
    <>
      <div className="container">
        {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />}
      </div>
    </>
  );
}

export default App;
