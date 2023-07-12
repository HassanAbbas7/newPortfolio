import React, { useState, useEffect } from 'react';
import './FadeTextAnimation.css';

const Index = () => {


    const [klass, setKlass] = useState('');
    const texts = ['Remember when You first printed "Hello World" ?', 'It was not just your first program...', 'It created more possibilities than the stars in the universe!']
    const [text, setText] = useState('...');

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }


    const custom = ()=>{
        setKlass('fade-in-out')
    }
    useEffect(()=>{
        var x = 0
        const showText = async ()=> {
            setKlass('invi')
            await sleep(1000)
            setText(texts[x % 3])
            x++
            custom()
        }
        setInterval(() => {
            showText()
        }, 8000);
    }, [])
    

  return (
    <>
    <div className="fade-text-container">
        <h2 className={klass}>{text}</h2>
      
    </div>
    </>
  );
};

export default Index;
