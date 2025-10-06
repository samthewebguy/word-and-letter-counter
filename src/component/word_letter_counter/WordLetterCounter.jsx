import React from 'react'
import { useState } from 'react';

const WordLetterCounter = () => {
    const [text, setText] = useState("");
    
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    
    const letterCount = text.length;

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

  return (
    <>
      <div className='flex max-w-[100%] md:max-w-[800px] w-[100%]'>
          <textarea name="text" id="text" placeholder='Type or paste your text here...' onChange={handleTextChange} className='w-full p-4 rounded-md border-2 w-100% h-[200px] md:h-[400px] outline-green-400'></textarea>
      </div>
      <div className='flex flex-row mt-6 gap-4 items-center'>
        <div className='flex flex-col items-center justify-center bg-white py-6 px-8 rounded-lg gap-2'>
          <h3 className='text-md font-medium leading-tight text-gray-500'>Word Count</h3>
          <p className='font-bold'>{wordCount}</p>
        </div>
        <div className='flex flex-col items-center justify-center bg-white py-6 px-8 rounded-lg gap-2'>
          <h3 className='text-md font-medium leading-tight text-gray-500'>Letter Count</h3>
          <p className='font-bold'>{letterCount}</p>
        </div>
      </div>
    </>
  )
}

export default WordLetterCounter