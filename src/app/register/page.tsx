import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Register() {
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
        
        <h1 className="text-2xl font-bold text-white mb-6">Sign up and come in</h1>
        <p className="text-white/80 text-sm max-w-sm mb-16 font-satoshi leading-relaxed">
          The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
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
          <div className="text-blue-600 text-[13px] font-medium mb-3 font-satoshi">Create an Account</div>
          <h2 className="text-4xl font-bold text-black mb-10 leading-tight">Welcome to<br/>ByteSpace</h2>
          
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-black">Full Name</label>
              <input type="text" placeholder="Jamie Davis" className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400 text-black font-medium" />
            </div>
            
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
                Continue
              </button>
            </div>
          </form>
          
          <div className="text-center mt-16 text-[13px] text-gray-500">
            Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
