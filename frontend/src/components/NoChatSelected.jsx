// import { MessageSquare } from "lucide-react";

// const NoChatSelected = () => {
//   return (
//     <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
//       <div className="max-w-md text-center space-y-6">
//         {/* Icon Display */}
//         <div className="flex justify-center gap-4 mb-4">
//           <div className="relative">
//             <div
//               className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
//              justify-center animate-bounce"
//             >
//               <MessageSquare className="w-8 h-8 text-primary " />
//             </div>
//           </div>
//         </div>

//         {/* Welcome Text */}
//         <h2 className="text-2xl font-bold">Welcome to Chatty!</h2>
//         <p className="text-base-content/60">
//           Select a conversation from the sidebar to start chatting
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NoChatSelected;

import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div
      className="w-full flex flex-1 flex-col items-center justify-center p-8 sm:p-16 relative overflow-hidden"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      {/* Subtle inner glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-sm text-center">
        {/* Animated Icon with orbits */}
        <div
          className="relative flex items-center justify-center mb-8"
          style={{ height: 120 }}
        >
          {/* Orbit rings */}
          <div
            className="absolute w-28 h-28 rounded-full"
            style={{
              border: "1px dashed rgba(139,92,246,0.2)",
              animation: "orbit 8s linear infinite",
            }}
          >
            <span
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500"
              style={{ boxShadow: "0 0 8px #7c3aed" }}
            />
          </div>
          <div
            className="absolute w-40 h-40 rounded-full"
            style={{
              border: "1px dashed rgba(6,182,212,0.15)",
              animation: "orbit 14s linear infinite reverse",
            }}
          >
            <span
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400"
              style={{ boxShadow: "0 0 6px #06b6d4" }}
            />
          </div>

          {/* Center icon */}
          <div
            className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
                opacity: 0.25,
                filter: "blur(10px)",
                transform: "scale(1.2)",
              }}
            />
            {/* Card */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg,rgba(124,58,237,0.25),rgba(6,182,212,0.2))",
                border: "1px solid rgba(139,92,246,0.4)",
                backdropFilter: "blur(10px)",
              }}
            />
            <MessageSquare
              size={32}
              className="relative z-10"
              style={{ color: "#a78bfa" }}
            />
          </div>
        </div>

        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{
            background: "linear-gradient(90deg,#a78bfa,#67e8f9,#f472b6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to NeonChat
        </h2>

        <p
          className="text-sm mb-6"
          style={{ color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}
        >
          Select a conversation from the sidebar to
          <br />
          start messaging in real-time
        </p>

        {/* Feature chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            "⚡ Real-time",
            "🔒 Encrypted",
            "📎 File Share",
            "🌐 MERN Stack",
          ].map((chip) => (
            <span
              key={chip}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-8px)}
        }
        @keyframes orbit {
          0%{transform:rotate(0deg)}
          100%{transform:rotate(360deg)}
        }
      `}</style>
    </div>
  );
};

export default NoChatSelected;