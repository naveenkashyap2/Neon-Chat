// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${
//                 i % 2 === 0 ? "animate-pulse" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;

const AuthImagePattern = ({ title, subtitle }) => {
  const cells = [
    {
      icon: "💬",
      gradient:
        "linear-gradient(135deg,rgba(124,58,237,.3),rgba(109,40,217,.2))",
      border: "rgba(139,92,246,.4)",
      pulse: true,
      delay: "0s",
    },
    {
      icon: null,
      gradient: "rgba(255,255,255,.04)",
      border: "rgba(139,92,246,.12)",
      pulse: false,
    },
    {
      icon: "🔒",
      gradient:
        "linear-gradient(135deg,rgba(6,182,212,.25),rgba(59,130,246,.15))",
      border: "rgba(6,182,212,.35)",
      pulse: true,
      delay: ".4s",
    },
    {
      icon: null,
      gradient: "rgba(255,255,255,.04)",
      border: "rgba(139,92,246,.12)",
      pulse: false,
    },
    {
      icon: "⚡",
      gradient:
        "linear-gradient(135deg,rgba(236,72,153,.25),rgba(139,92,246,.2))",
      border: "rgba(236,72,153,.35)",
      pulse: true,
      delay: ".8s",
    },
    {
      icon: null,
      gradient: "rgba(255,255,255,.04)",
      border: "rgba(139,92,246,.12)",
      pulse: false,
    },
    {
      icon: "🌐",
      gradient:
        "linear-gradient(135deg,rgba(16,185,129,.2),rgba(6,182,212,.15))",
      border: "rgba(16,185,129,.3)",
      pulse: true,
      delay: ".2s",
    },
    {
      icon: null,
      gradient: "rgba(255,255,255,.04)",
      border: "rgba(139,92,246,.12)",
      pulse: false,
    },
    {
      icon: "🚀",
      gradient:
        "linear-gradient(135deg,rgba(245,158,11,.2),rgba(239,68,68,.15))",
      border: "rgba(245,158,11,.3)",
      pulse: true,
      delay: "1s",
    },
  ];

  return (
    <div
      className="hidden lg:flex items-center justify-center p-12 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,rgba(124,58,237,0.06) 0%,rgba(6,182,212,0.04) 50%,rgba(236,72,153,0.05) 100%)",
        borderLeft: "1px solid rgba(139,92,246,0.15)",
      }}
    >
      {/* Background orbs */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "#7c3aed",
          filter: "blur(80px)",
          opacity: 0.12,
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: "#06b6d4",
          filter: "blur(60px)",
          opacity: 0.1,
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative z-10 max-w-sm text-center">
        {/* Animated grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {cells.map((cell, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl flex items-center justify-center"
              style={{
                background: cell.gradient,
                border: `1px solid ${cell.border}`,
                fontSize: "22px",
                animation: cell.pulse
                  ? `authPulse 2.5s ease-in-out infinite ${cell.delay}`
                  : "none",
              }}
            >
              {cell.icon ? (
                <span>{cell.icon}</span>
              ) : (
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgba(139,92,246,0.25)",
                  }}
                >
                  ◈
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Title */}
        <h2
          className="text-2xl font-extrabold mb-3"
          style={{
            background: "linear-gradient(90deg,#a78bfa,#67e8f9,#f472b6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.38)" }}
        >
          {subtitle}
        </p>

        {/* Bottom badge row */}
        <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
          {["MERN Stack", "Socket.io", "JWT Auth", "Real-time"].map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "rgba(255,255,255,0.4)",
                fontSize: "10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes authPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default AuthImagePattern;