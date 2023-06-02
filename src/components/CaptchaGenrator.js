import React, { useEffect, useMemo, useState } from 'react';
import "./CaptchaGenerator.css";

function CaptchaGenrator() {
  const[captchaByUser,setCaptchaByUser] = useState('');
  const [generatedCaptcha,setGeneratedCaptcha] = useState('');
  


  const [captchaRes,setCaptchaRes] = useState(undefined);

  const [error,setError] = useState(false);
  
  function generateRandomColors() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
  
    const textColor = luminance > 0.5 ? 'black' : 'white';
  
    const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    const fontStyles = ['normal', 'italic', 'oblique'];
    const randomFontStyle = fontStyles[Math.floor(Math.random() * fontStyles.length)];
  
    return { backgroundColor, textColor,randomFontStyle };
  }
  

//   const { backgroundColor, textColor } = generateRandomColors();
const { backgroundColor, textColor,randomFontStyle } = useMemo(() => generateRandomColors(), [generatedCaptcha]);
  const divStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    fontStyle: randomFontStyle
  }

  const errorStyle = {
    backgroundColor:"red",
    color:"white"
  }

  const successStyle = {
    backgroundColor:"green",
    color:"white"
  }
  
  const generateRandomCaptcha = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            captcha += characters.charAt(randomIndex);
        }

        setGeneratedCaptcha(captcha);
  }


  const checkCaptchaMatch = () => {

    if(captchaByUser.length == 0){
        setCaptchaRes("please enter the captcha");
        setError(true);
    }else{
        if(captchaByUser === generatedCaptcha){
            setError(false);
            setCaptchaRes("captch matched");

        }
        else{
            setCaptchaRes("try again");
            setError(true);

        }
    }
   
  }

  const handleCaptchaChange = (e) =>{
    setCaptchaByUser(e.target.value);
  }

  useEffect(()=>{
    generateRandomCaptcha(6);
  },[])

  return (
    <div className='captcha_generator_container'>
        <h1>CAPTCHA GENERATOR</h1>
        <div className='captchaValue' style={divStyle}>
            <p><strike>{generatedCaptcha}</strike></p>
        </div>
        <div className='captchaUserValue'>
            <input type='text' value={captchaByUser} onChange={handleCaptchaChange} placeholder='please enter the captch' />
        </div>
        <div className='captchaSubmit'>
            <button onClick={checkCaptchaMatch}>Submit</button>
            <button onClick={()=>{
                generateRandomCaptcha(6);
                setCaptchaByUser('');
                setCaptchaRes(undefined);
            }}>New Captcha</button>

        </div>
       {captchaRes ? (
         <div className='result' style={error ? errorStyle : successStyle}>
            <p>{captchaRes}</p>
         </div>
       ):null}
    </div>
  )
}

export default CaptchaGenrator