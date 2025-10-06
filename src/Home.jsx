import React from 'react'
import WordLetterCounter from '../src/component/word_letter_counter/WordLetterCounter'

const Home = () => {
  return (
    <section className='bg-gray-100 flex flex-col items-center justify-center overflow-hidden h-screen w-[100%] px-4 md:px-24'>
        <div className='flex flex-col text-center mb-10'>
            <h1 className='text-4xl font-bold mb-2 leading-tight tracking-tight'>Word and Letter Counter</h1>
            <p className='text-md text-gray-500 font-normal leading-normal'>Analyze your text instantly with real-time word count, and character count tool.</p>
        </div>
        <WordLetterCounter/>
    </section>
  )
}

export default Home