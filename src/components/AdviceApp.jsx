import React, { useEffect, useState } from "react";
import "./Advice.css";

const AdviceApp = () => {
  const [advice, setAdvice] = useState("Pls click button to get advice");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    console.log(res);
    const data = await res.json();
    console.log(data);
    setAdvice(data.slip.advice);
    setCount( count + 1);
  }

  useEffect(function(){
    getAdvice();
  }, []);

  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have read <b>{count}</b> pieces of advice
      </p>
    </div>
  );
};

export default AdviceApp;
