export default function Footer() {
  return (
    <footer className="bg-white text-black py-16 px-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 lg:gap-32">
        
        {/* Left side: Newsletter */}
        <div className="flex-1 max-w-lg">
          <div className="flex items-center gap-2 mb-6">
            <div className="text-primary font-bold text-3xl leading-none flex tracking-tighter">
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0 C18.627 0 24 5.373 24 12 L24 28 C24 28 15 28 12 28 C5.373 28 0 22.627 0 16 L0 12 C0 5.373 5.373 0 12 0 Z" fill="#c9ff00" />
                <circle cx="12" cy="12" r="6" fill="#000" />
              </svg>
              <span className="text-[#1a1a1a] text-2xl ml-2 font-extrabold tracking-tight">ByteSpace</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-6 max-w-sm">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 max-w-[280px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-500"
              />
            </div>
            <button className="bg-[#c9ff00] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#b0df00] transition-colors text-sm">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-400 text-[11px] leading-tight max-w-[380px]">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
        
        {/* Right side: Links Grid */}
        <div className="flex-[1.5] grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-600 hover:text-black text-sm">Featured Courses</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">Featured Categories</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">Business</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">IT</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">Design</a>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-600 hover:text-black text-sm">Development</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">Marketing</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">Photography</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">Finance</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">Sport</a>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-600 hover:text-black text-sm">Become a Creator</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">Affiliate Program</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">Contact</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">Help</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">About</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2023 ByteSpace. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms of Service</a>
          <a href="#" className="hover:text-black">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}
