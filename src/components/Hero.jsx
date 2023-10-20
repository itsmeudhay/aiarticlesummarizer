
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={ logo } alt='sumz_logo' className='w-24 drop-shadow-lg object-contain animate-pulse' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/itsmeudhay/aiarticlesummarizer", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text green_gradient'>
      AI Article Summarizer <br className='max-md:hidden' />
        <span className='teal_gradient '> Revolutionizing Content Digestion</span>
      </h1>
      <h2 className='desc'>
      AI Article Summarizer is a cutting-edge platform that leverages 
      artificial intelligence to condense lengthy articles into concise summaries. 
      It’s designed to save time, enhance comprehension, and streamline content consumption. 
      Whether you’re a student, professional, or an avid reader, our AI-powered website 
      is your go-to tool for quick and efficient information absorption. 
      Experience the future of reading with AI Article Summarizer!
      </h2>
    </header>
  );
};

export default Hero;