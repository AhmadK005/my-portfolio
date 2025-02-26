"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";  
import { League_Spartan } from "next/font/google";
import ScrollToTop from "../components/ScrollToTop"; // ✅ Import Scroll Reset Component

const leagueSpartan = League_Spartan({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div className={`relative min-h-screen overflow-hidden ${leagueSpartan.className}`}>
      
      {/* Background Layout */}
      <div className="absolute inset-0 grid grid-cols-5 -z-10">
        <div className="col-span-2 bg-no-repeat bg-left h-screen"
          style={{ 
            backgroundImage: "url('/fish.gif')",
            backgroundSize: "cover",
            backgroundPosition: "left center"
          }}
        ></div>
        <div className="col-span-3 bg-[#051F20]"></div>
      </div>

      {/* Scroll Reset Component */}
      <ScrollToTop />

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-16 bg-[#1a1a1a] bg-opacity-80 backdrop-blur-md flex justify-between items-center px-10 z-50">
        <a href="mailto:ahmadkarimi9219@gmail.com" className="text-white text-xl md:text-2xl hover:text-red-400 transition">Contact</a>

        <div className="hidden md:flex space-x-6 text-white text-2xl">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-red-400 transition">Home</button>
          <button onClick={() => window.scrollTo({ top: document.getElementById("languages").offsetTop, behavior: "smooth" })} className="hover:text-red-400 transition">Programming Languages</button>
          <button onClick={() => window.scrollTo({ top: document.getElementById("projects").offsetTop, behavior: "smooth" })} className="hover:text-red-400 transition">Coding Projects</button>
          <button onClick={() => window.scrollTo({ top: document.getElementById("experience").offsetTop, behavior: "smooth" })} className="hover:text-red-400 transition">Experience & Resume</button>
        </div>

        <div className="flex space-x-3">
          <a href="https://github.com/AhmadK005" target="_blank"><Image src="/Githubicon.png" alt="GitHub" width={40} height={40} className="hover:opacity-50 transition" /></a>
          <a href="https://www.linkedin.com/in/ahmadkarimi47/" target="_blank"><Image src="/Linkedinicon.png" alt="LinkedIn" width={40} height={40} className="hover:opacity-50 transition" /></a>
          <a href="https://www.instagram.com/ahmadk_43/" target="_blank"><Image src="/Instagramicon.png" alt="Instagram" width={40} height={40} className="hover:opacity-50 transition" /></a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-end justify-center min-h-screen flex-grow w-full text-center px-10 pt-16">
        <motion.h1 
          className="text-white font-bold text-5xl md:text-7xl lg:text-8xl -mt-20 mr-[225px]"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5 }}
        >
          Ahmad Karimi
        </motion.h1>

        <motion.p 
          className="text-gray-300 text-lg md:text-2xl mt-4 mr-[400px]"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1.5 }}
        >
          Welcome to my Portfolio
        </motion.p>

        <motion.p 
          className="text-gray-300 text-left text-lg md:text-2xl mt-20 ml-80 max-w-3xl mr-[170px]"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1.5 }}
        >
          👋 Hi, I'm Ahmad Karimi! <br /><br />
          I'm a Computer Engineering student with a passion for coding,  
          <br /> hardware, and software development. I love building tech solutions that  
          <br /> bridge hardware and software while also exploring finance and  
          <br /> investment strategies.
        </motion.p>

        <motion.button 
          onClick={() => window.scrollTo({ top: document.getElementById("languages").offsetTop, behavior: "smooth" })} 
          className="bg-[#EEF5DB] text-black text-2xl font-semibold py-3 px-6 mt-6 rounded-lg shadow-md hover:text-red-400 transition mr-[450px]"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1, duration: 1.5 }}
        >
          Explore
        </motion.button>
      </div>

      {/* Programming Languages Section */}
      <div id="languages" className="min-h-screen bg-[#0B2B26] flex flex-col pt-20 items-center justify-start">
        <h1 className="text-white text-5xl md:text-5xl mb-12">Programming Languages</h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
          {["java", "python", "javascript", "c", "cicon", "html1", "matlab", "linux", "nodejs", "spring", "sql", "verilog"]
            .map((lang) => (
              <Image key={lang} src={`/${lang}.png`} alt={lang} width={250} height={250} className="hover:opacity-50 transition" />
          ))}
        </div>
      </div>

       {/* Projects Section */}
<div id="projects" className="h-screen bg-[#163832] flex flex-col pt-20 items-center justify-start">
  <h1 className="text-white text-5xl md:text-5xl mb-12">Coding Projects</h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { title: "JS 8 Ball Pool", image: "/8ball.jpg" },
      { title: "Automated Plant Waterer", image: "/plant.jpg" },
      { title: "CPU in Verilog", image: "/CPU.jpg" },
      { title: "Personal Portfolio in JS", image: "/website.png" },
      { title: "Coming Soon", image: "/soon.gif" },
      { title: "Coming Soon", image: "/soon.gif" },
    ].map((project, index) => (
      <motion.a key={index} href="https://github.com/AhmadK005" target="_blank"
        className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden w-[400px] h-[200px] md:w-[500px] md:h-[300px]">
        
        {/* Project Image */}
        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="group-hover:opacity-50 transition" />
        
        {/* Hover Effect: Show Title */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
          <span className="text-white text-2xl md:text-3xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
            {project.title}
          </span>
        </div>

      </motion.a>
    ))}
  </div>
</div>


      {/* Experience & Resume Section */}
{/* Experience & Resume Section */}
<div id="experience" className="flex-grow bg-[#629183] flex flex-col pt-20 items-center justify-start">
  {/* Title remains centered */}
  <h1 className="text-white text-5xl md:text-5xl mb-12 text-center">
    Experience & Resume
  </h1>

  {/* Wrapper for positioning */}
  <div className="w-full flex justify-start px-40 -mt-10 mb-20"> 
   
    {/* Move the resume preview to the left */}
    <a href="/resume2025.pdf" target="_blank" rel="noopener noreferrer" className="relative group">
      
      {/* Resume Preview */}
      <Image src="/resume.jpg" alt="Resume Preview" width={550} height={450} className="rounded-lg shadow-lg transition" />
      
      {/* Hover Effect: FULL overlay */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-lg">
        <span className="text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
          View Full Resume
        </span>
      </div>

    </a>
  </div>
</div>

</div>

  );
}
