import Image from "next/image";
import { Search, Star } from "lucide-react";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <div className="relative overflow-hidden flex flex-col w-full">
      {/* 3D Floating Shapes placeholders */}
      <div className="absolute top-32 left-10 text-primary opacity-90 rotate-[-15deg]">
        <svg width="120" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20 Q 80 50 20 80 T 20 140" stroke="currentColor" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-40 text-white opacity-90 rotate-[15deg]">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="25" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-20 text-white opacity-90 rotate-[-25deg]">
        <svg width="100" height="130" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20 Q 80 45 20 70 T 20 120" stroke="currentColor" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute top-40 right-10 text-primary opacity-90 rotate-[20deg]">
        <svg width="100" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="110" rx="30" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-[40%] right-32 text-white opacity-90 rotate-[-10deg]">
        <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 10 L70 80 L10 80 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-[45%] left-32 text-white opacity-90 rotate-[30deg]">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 15 Q 45 35 15 55 T 15 80" stroke="currentColor" strokeWidth="15" strokeLinecap="round" />
        </svg>
      </div>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-start pt-16 relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
          Get Access to Hundreds<br />Courses Available
        </h1>
        <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg font-satoshi">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex items-center bg-white rounded-full p-2 w-full max-w-xl shadow-lg relative z-20">
          <div className="pl-4 text-gray-400">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Course, topic, creator" 
            className="flex-1 bg-transparent border-none outline-none px-4 text-black placeholder:text-gray-400"
          />
          <button className="bg-primary text-black font-semibold px-8 py-3 rounded-full hover:bg-[#b0df00] transition-colors">
            Search
          </button>
        </div>

        {/* Hero Illustration Area */}
        <div className="relative mt-20 w-full max-w-4xl h-[500px] mx-auto flex justify-center items-end">
          {/* Large Circle Background */}
          <div className="absolute bottom-0 w-[600px] h-[600px] bg-primary rounded-full translate-y-1/3 -z-10 shadow-2xl overflow-hidden flex items-center justify-center">
             <div className="w-[450px] h-[450px] bg-black/10 rounded-full blur-2xl"></div>
          </div>
          
          {/* Main Person Image */}
          <div className="relative z-10 w-[450px] h-[450px] rounded-full overflow-hidden border-8 border-primary shadow-2xl bg-[#a6ff00] mb-8">
            <Image 
              src="/hero.jpg" 
              alt="Student"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Floating Cards */}
          {/* UI/UX Design Card */}
          <div className="absolute left-10 top-32 bg-white rounded-2xl p-4 shadow-xl z-20 text-left flex flex-col gap-1 w-[180px] animate-bounce" style={{animationDuration: '3s'}}>
            <h3 className="text-black font-bold text-sm">UI/UX Design</h3>
            <p className="text-gray-500 text-[10px]">200 Courses • 1000+ Students</p>
          </div>

          {/* Learning Progress Card */}
          <div className="absolute right-10 top-40 bg-white rounded-2xl p-5 shadow-xl z-20 text-left w-[200px] flex flex-col gap-3 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
            <h3 className="text-black font-medium text-xs">Learning Progress</h3>
            <div className="text-black font-bold text-3xl">55%</div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-[55%] h-full bg-primary"></div>
            </div>
          </div>

          {/* Happy Students Card */}
          <div className="absolute left-4 bottom-24 bg-white rounded-2xl p-4 shadow-xl z-20 text-left w-[220px] flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <h3 className="text-black font-bold text-sm">Happy Students</h3>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-gray-500 font-medium">
              4.8 (240) <Star size={12} fill="#FACC15" color="#FACC15" />
            </div>
            <div className="flex items-center mt-1">
              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white -ml-0 overflow-hidden relative">
                <Image src="/hero.jpg" alt="Avatar" fill className="object-cover"/>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white -ml-3 overflow-hidden relative">
                <Image src="/hero.jpg" alt="Avatar" fill className="object-cover opacity-80"/>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white -ml-3 overflow-hidden relative">
                <Image src="/hero.jpg" alt="Avatar" fill className="object-cover opacity-60"/>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white -ml-3 overflow-hidden relative">
                <Image src="/hero.jpg" alt="Avatar" fill className="object-cover opacity-40"/>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary border-2 border-white -ml-3 flex items-center justify-center text-[10px] font-bold text-black relative z-10">
                2K+
              </div>
            </div>
          </div>
        </div>
      </main>

      <Ticker />
    </div>
  );
}
