import React from "react";

type LoaderProps = {
  message?: string;
  className?: string;
  progress?: number; // Future use for dynamic progress
};

const Loader: React.FC<LoaderProps> = ({
  message = "Processing your job...",
  className = "",
  progress = 10,
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
    >
      <style>{`
        @keyframes move-jobs {
          0% { transform: translateX(-120%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(120%); opacity: 0; }
        }
        @keyframes fly {
          0% { transform: translateX(-40px) translateY(0); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translateX(0) translateY(-6px); }
          80% { opacity: 1; }
          100% { transform: translateX(40px) translateY(0); opacity: 0; }
        }
      `}</style>

      {/* Queue conveyor animation */}
      <div className="relative w-56 h-16 overflow-hidden flex items-center justify-center">
        {/* Jobs (small squares) */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 rounded-md bg-gradient-to-r from-pink-500 to-blue-400 shadow-lg"
            style={{
              animation: `move-jobs 2.4s linear infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}

        {/* Pilot/plane icon */}
        <svg
          className="absolute"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7cc8ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            animation: "fly 2.4s ease-in-out infinite",
          }}
        >
          <path d="M2.5 19l19-7-19-7 5 7-5 7z" />
          <path d="M12 12h9" />
        </svg>
      </div>

      {/* Message + progress bar */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm md:text-base text-gray-300 font-medium">
          {message}
        </p>

        <div
          className="w-48 h-1 rounded-full bg-zinc-800 overflow-hidden"
          aria-hidden
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #ff7ab6, #7cc8ff)",
              boxShadow: "0 4px 18px rgba(124,58,237,0.12)",
              transition: "width 450ms ease",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
