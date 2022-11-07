import React, { useEffect, useRef, useState } from 'react'

function WordGame(startingtime=10) {

const [isTimeRunning,setIsTimerunning]=useState(false);
const [text,setText]=useState("");
const [wordCount,setWordcount]=useState(0);
const [timeRemaining,setTimeremaining]=useState(startingtime);
const textBoxRef=useRef(null);

function startClock(){
    
    console.log("Clicked");
    setIsTimerunning(true);
    setWordcount(0);
    setText("");
    setTimeremaining(startingtime);
    textBoxRef.current.disabled=false;
    textBoxRef.current.focus();

}

function handleChange(event){
    setText(event.target.value);
}

function calculatewordCount(text){
    const wordArr=text.trim().split(" ");
    console.log(wordArr);
    return wordArr.filter(word=>word!=='').length
}

function endgame(){
    setIsTimerunning(false);
    setWordcount(calculatewordCount(text));
    setTimeremaining(0);
}

function decremeantTime(){
    setTimeremaining(time=>time-1);
}


useEffect(()=>{
    if(isTimeRunning && timeRemaining!==0){
        setTimeout(decremeantTime,1000)
    }else if(timeRemaining===0){
        endgame();
    }

},[isTimeRunning,timeRemaining])

  return {isTimeRunning,text,handleChange,startClock,wordCount,timeRemaining,textBoxRef}
}

export default WordGame