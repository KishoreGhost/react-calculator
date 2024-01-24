import React, { useState } from "react";
import Button from "./Button.jsx";

const Screen = () => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputClick = (value) => {
    setInputValue((prev) => prev + value);
  };

  const handleDeleteClick = () => {
    setInputValue(inputValue.slice(0, -1))
  }

  const clearInput = () => {
    setInputValue("")
  }

  const calculate = () => {
    try{
        setResult(eval(inputValue))
    }
    catch(err){
        setResult("404 ERROR")
    }
  }

  return (
    <>
      <div className="parent">
        <div className="inputs">
          <input className="input" type="text" placeholder="0" value={inputValue} readOnly />
          <input className="input" type="text" placeholder="1" value={result} readOnly />
        </div>

        <div>
          <div className="buttons">
            <Button value={"AC"} handleInputClick = {clearInput} />
            <Button value={"'"}  handleInputClick = {handleInputClick}/>
            <Button value={"'"}  handleInputClick = {handleInputClick}/>
            <Button value={"Del"} handleInputClick = {handleDeleteClick}/>

            <Button value={"7"}  handleInputClick = {handleInputClick}/>

            <Button value={"8"}  handleInputClick = {handleInputClick}/>
            <Button value={"9"}  handleInputClick = {handleInputClick}/>
            <Button value={"*"}  handleInputClick = {handleInputClick}/>
            <Button value={"4"}  handleInputClick = {handleInputClick}/>
            <Button value={"5"}  handleInputClick = {handleInputClick}/>

            <Button value={"6"}  handleInputClick = {handleInputClick}/>
            <Button value={"-"}  handleInputClick = {handleInputClick}/>
            <Button value={"1"}  handleInputClick = {handleInputClick}/>
            <Button value={"2"}  handleInputClick = {handleInputClick}/>

            <Button value={"3"}  handleInputClick = {handleInputClick}/>
            <Button value={"+"}  handleInputClick = {handleInputClick}/>
            <Button value={"'"} handleInputClick = {handleDeleteClick}/>

            <Button value={"0"}  handleInputClick = {handleInputClick}/>
            <Button value={"."}  handleInputClick = {handleInputClick}/>
            <Button value={"="}  handleInputClick = {calculate}/>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;
