import React from 'react'
import { useState } from 'react';
import Input from '../components/Input';
import People from '../components/People';


export default function People() {

    const [isloading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
  
    const [showtoast, setShowToast] = useState(false);
  
    const showToast = () => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 10000);
    }
  
    const handleClick = () => {
      console.log('Button Clicked');
      setProgress(0);
      setIsLoading(true);
      let progressInterval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(progressInterval);
            setIsLoading(false);
            showToast();
            return 100;
          } else {
            return oldProgress + 1;
          }
        });
      }, 10); // Increase progress by 1 every 1000 milliseconds (1 second)
    };
    
  return (
    <div>
         {showtoast ?
        <div role="alert" className="alert alert-success fixed top-0 left-0 w-full flex justify-center">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Your purchase has been confirmed!</span>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowToast(false)} className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        : null}

      <div className="flex flex-col justify-center items-center flex-grow">
        <button className="btn btn-primary" onClick={handleClick}>
          {isloading ? <span className="loading loading-spinner"></span> : "Login"}
        </button>
        <People />
        <Input />
      </div>
    </div>
  )
}
