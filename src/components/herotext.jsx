import Typewriter from 'typewriter-effect';
import {useState, useEffect } from 'react';
import { defineElement } from "lord-icon-element";
import lottie from "lottie-web";

defineElement(lottie.loadAnimation);
export default function HeroText (){
const [message, setMessage] = useState("")
  


  useEffect(()=>{
  const messages = [
    "Welcome to Recipe Wiz!  Tell us what's in your kitchen, and we'll help you create something delicious.",
    "Hey Chef! 👨‍🍳 Got random ingredients? We'll turn them into something amazing!",
    "Ready to Cook?  Share what's in your pantry, and we'll find the perfect recipe!",
  ];

 const randomMessage = messages[Math.floor(Math.random() * messages.length)];
 setMessage(randomMessage)
  },[])
 if(!message)return null

    return(
<> <div className="max-w-2xl mx-auto py-12 px-4 text-2xl">
      <Typewriter
        options={{
          strings: [message],
          autoStart: true,
          delay: 50,
          cursor: '|',
          deleteSpeed: Infinity, // Don't delete after typing
        }}
      />
    </div>
    

    </>
    )
}