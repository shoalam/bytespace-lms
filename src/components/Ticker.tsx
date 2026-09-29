export default function Ticker() {
  return (
    <div className="w-full bg-[#f6f7f9] py-8 flex overflow-hidden border-t border-gray-100">
      <div className="flex animate-ticker shrink-0 items-center gap-24 px-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-2 text-[#6b7280]">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="currentColor" opacity="0.8" />
              <path d="M10 16L16 10L22 16L16 22L10 16Z" fill="white" />
            </svg>
            <span className="font-bold text-lg tracking-tight">Logoipsum</span>
          </div>
        ))}
      </div>
      <div className="flex animate-ticker shrink-0 items-center gap-24 px-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-2 text-[#6b7280]">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="currentColor" opacity="0.8" />
              <path d="M10 16L16 10L22 16L16 22L10 16Z" fill="white" />
            </svg>
            <span className="font-bold text-lg tracking-tight">Logoipsum</span>
          </div>
        ))}
      </div>
    </div>
  );
}
