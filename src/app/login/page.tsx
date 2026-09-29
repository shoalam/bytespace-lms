import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="fixed inset-0 z-50 bg-[#003bf7] grid-bg flex flex-col lg:flex-row overflow-y-auto">
      {/* Left Side: Graphic & Info */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-16 xl:p-24 relative">
        {/* Logo */}
        <div className="mb-16">
          <svg width="32" height="38" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0 C18.627 0 24 5.373 24 12 L24 28 C24 28 15 28 12 28 C5.373 28 0 22.627 0 16 L0 12 C0 5.373 5.373 0 12 0 Z" fill="#c9ff00" />
            <circle cx="12" cy="12" r="6" fill="#003bf7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-6">Sign in with ease</h1>
        <p className="text-white/80 text-sm max-w-sm mb-16 font-satoshi leading-relaxed">
          Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
        </p>
        
        {/* Illustration Area */}
        <div className="relative w-full max-w-sm mt-4 ml-4">
          
          {/* Floating shapes */}
          {/* Lime green torus */}
          <div className="absolute -top-6 -left-10 text-primary z-20 rotate-[-15deg]">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="14" />
            </svg>
          </div>
          {/* Lime green pyramid/cone placeholder */}
          <div className="absolute -bottom-16 -left-10 text-primary z-20 drop-shadow-xl rotate-[15deg]">
            <svg width="90" height="90" viewBox="0 0 80 80" fill="none">
              <path d="M40 0L80 80H0L40 0Z" fill="currentColor" />
              <path d="M40 0L80 80H40L40 0Z" fill="black" fillOpacity="0.15" />
            </svg>
          </div>
          {/* White scribble */}
          <div className="absolute -bottom-6 -right-12 text-white z-20 rotate-[-15deg] drop-shadow-lg">
            <svg width="80" height="100" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 20 Q 50 15 15 40 T 50 60" />
            </svg>
          </div>

          {/* Background Card */}
          <div className="absolute top-12 -left-8 w-full h-[320px] bg-white rounded-3xl p-4 shadow-2xl z-0 scale-[0.95] rotate-[-2deg]">
            <div className="w-full h-full bg-gray-100 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-gray-400 font-bold bg-white px-3 py-1 rounded-full text-xs mb-4">17 Lessons</span>
            </div>
          </div>
          
          {/* Main Course Card */}
          <div className="relative w-full bg-white rounded-[2rem] p-4 shadow-2xl z-10 mt-6">
            <div className="w-full h-40 bg-[#0b0e14] rounded-2xl mb-4 relative overflow-hidden flex flex-col p-3">
               <div className="flex justify-between items-start text-white text-[8px] font-bold">
                 <span>DASHBOARD</span>
                 <span>LIVE</span>
               </div>
               <div className="flex-1 mt-2 relative">
                 <div className="absolute bottom-0 w-full h-[60%] border-b border-l border-gray-700"></div>
                 {/* Pseudo chart bars */}
                 <div className="absolute bottom-0 left-4 w-2 h-[30%] bg-blue-500 rounded-t-sm"></div>
                 <div className="absolute bottom-0 left-8 w-2 h-[60%] bg-blue-500 rounded-t-sm"></div>
                 <div className="absolute bottom-0 left-12 w-2 h-[40%] bg-blue-500 rounded-t-sm"></div>
                 <div className="absolute bottom-0 left-16 w-2 h-[80%] bg-primary rounded-t-sm shadow-[0_0_10px_#c9ff00]"></div>
                 <div className="absolute bottom-0 left-20 w-2 h-[50%] bg-blue-500 rounded-t-sm"></div>
               </div>
               <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                 <div className="bg-white/20 backdrop-blur-md rounded-full px-2 py-1 text-[8px] text-white">17 Lessons</div>
                 <div className="bg-white/20 backdrop-blur-md rounded-full px-2 py-1 text-[8px] text-white">2 hours 16 mins</div>
               </div>
            </div>
            
            <div className="px-2 pb-2">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-black text-[17px] tracking-tight">the Power of Big Data</h3>
                <div className="flex items-center text-sm font-bold text-black gap-1">
                  4.5 <Star size={14} fill="#c9ff00" color="#c9ff00" />
                </div>
              </div>
              <div className="text-[10px] text-gray-500 mb-4">by <span className="text-blue-500">purepearl studio</span></div>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gray-100 rounded-full px-3 py-1 text-[10px] font-medium text-gray-600 flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22H2V2h2v20zM22 7H6v15h16V7zM16 10v9H8v-9h8z"/></svg>
                  Beginner
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 border border-white -ml-0 overflow-hidden"><Image src="/hero.jpg" alt="" width={20} height={20} className="object-cover" /></div>
                  <div className="w-5 h-5 rounded-full bg-gray-300 border border-white -ml-1 overflow-hidden"><Image src="/hero.jpg" alt="" width={20} height={20} className="object-cover opacity-80" /></div>
                  <div className="w-5 h-5 rounded-full bg-gray-400 border border-white -ml-1 overflow-hidden"><Image src="/hero.jpg" alt="" width={20} height={20} className="object-cover opacity-60" /></div>
                  <div className="w-5 h-5 rounded-full bg-black border border-white -ml-1 flex items-center justify-center text-[7px] text-white font-bold z-10">2K+</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-baseline gap-1">
                  <span className="text-blue-600 font-bold text-xl">$25</span>
                  <span className="text-gray-400 text-[9px] font-medium">/lifetime</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Happy Students card */}
          <div className="absolute -bottom-6 right-0 bg-primary rounded-2xl p-4 shadow-xl z-30 w-[180px]">
            <h3 className="text-black font-semibold text-[13px] mb-0.5">Happy Students</h3>
            <div className="text-black text-[10px] font-medium mb-3 flex items-center gap-0.5">
              4.5 (240) <Star size={10} fill="#003bf7" color="#003bf7" />
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-gray-200 border border-primary -ml-0 z-40 overflow-hidden"><Image src="/hero.jpg" alt="" width={24} height={24} className="object-cover" /></div>
              <div className="w-6 h-6 rounded-full bg-gray-300 border border-primary -ml-2 z-30 overflow-hidden"><Image src="/hero.jpg" alt="" width={24} height={24} className="object-cover opacity-80" /></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 border border-primary -ml-2 z-20 overflow-hidden"><Image src="/hero.jpg" alt="" width={24} height={24} className="object-cover opacity-60" /></div>
              <div className="w-6 h-6 rounded-full bg-gray-500 border border-primary -ml-2 z-10 overflow-hidden"><Image src="/hero.jpg" alt="" width={24} height={24} className="object-cover opacity-40" /></div>
              <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-primary -ml-2 flex items-center justify-center text-[8px] text-white font-bold z-0 relative">2K+</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 xl:p-16">
        <div className="bg-white rounded-[2rem] p-10 sm:p-14 w-full max-w-[480px] shadow-2xl">
          <div className="text-blue-600 text-[13px] font-medium mb-3 font-satoshi">Sign In</div>
          <h2 className="text-4xl font-bold text-black mb-10 leading-tight">Welcome Back</h2>
          
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-black">Email</label>
              <input type="email" placeholder="designer@example.com" className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400 text-black font-medium" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-black">Password</label>
              <input type="password" placeholder="••••••••" className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400 text-black font-medium" />
            </div>
            
            <div className="flex justify-end mt-4 mb-2">
              <button type="button" className="bg-primary text-black font-semibold px-8 py-3 rounded-full hover:bg-[#b0df00] transition-colors text-sm">
                Sign In
              </button>
            </div>
          </form>
          
          {/* Or Divider */}
          <div className="relative flex py-6 items-center">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs italic">or</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>
          
          {/* Social Logins */}
          <div className="flex justify-center gap-4 mb-10">
            <button type="button" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </button>
            <button type="button" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            </button>
          </div>
          
          <div className="text-center text-[13px] text-gray-500">
            New user? <Link href="/register" className="text-blue-600 hover:underline">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
