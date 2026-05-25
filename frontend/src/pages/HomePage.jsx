// import { useChatStore } from "../store/useChatStore";

// import Sidebar from "../components/Sidebar";
// import NoChatSelected from "../components/NoChatSelected";
// import ChatContainer from "../components/ChatContainer";

// const HomePage = () => {
//   const { selectedUser } = useChatStore();

//   return (
//     <div className="h-screen bg-base-200">
//       <div className="flex items-center justify-center pt-20 px-4">
//         <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
//           <div className="flex h-full rounded-lg overflow-hidden">
//             <Sidebar />

//             {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HomePage;






// HomePage.jsx - Premium MERN Chat UI
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen w-full overflow-hidden relative"
      style={{
        background: "linear-gradient(135deg, #0a0015 0%, #0d0030 30%, #00101a 60%, #0a0015 100%)"
      }}
    >
      {/* ── Animated Background Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="orb orb-purple" />
        <div className="orb orb-cyan" />
        <div className="orb orb-pink" />
      </div>

      {/* ── Grid noise overlay ── */}
      <div className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      {/* ── Main Layout ── */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top bar */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 py-2
          border-b border-purple-500/20 backdrop-blur-xl"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
                boxShadow: "0 0 12px rgba(124,58,237,0.5)"
              }}
            >⚡</div>
            <span className="font-bold text-white text-sm tracking-wide hidden sm:block">
              NeonChat
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold text-white"
              style={{ background: "linear-gradient(90deg,#7c3aed,#ec4899)" }}
            >LIVE</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
              style={{ boxShadow: "0 0 6px #10b981" }}
            />
            <div className="w-8 h-8 rounded-full flex items-center justify-center
              text-xs font-semibold text-white"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#ec4899)",
                boxShadow: "0 0 10px rgba(124,58,237,0.4)"
              }}
            >AK</div>
          </div>
        </div>

        {/* Chat Panel */}
        <div className="flex-1 flex p-2 sm:p-3 md:p-4 gap-0 min-h-0">
          <div className="flex w-full max-w-7xl mx-auto rounded-2xl overflow-hidden
            border border-purple-500/20 backdrop-blur-xl"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>

      {/* ── Orb & animation styles ── */}
      <style>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.3;
          pointer-events: none;
        }
        .orb-purple {
          width: 400px; height: 400px;
          background: #7c3aed;
          top: -100px; left: -80px;
          animation: driftA 9s ease-in-out infinite;
        }
        .orb-cyan {
          width: 300px; height: 300px;
          background: #06b6d4;
          top: 0; right: -60px;
          animation: driftB 11s ease-in-out infinite;
        }
        .orb-pink {
          width: 250px; height: 250px;
          background: #ec4899;
          bottom: 0; left: 40%;
          animation: driftC 13s ease-in-out infinite;
        }
        @keyframes driftA {
          0%,100%{transform:translate(0,0)}
          50%{transform:translate(25px,20px)}
        }
        @keyframes driftB {
          0%,100%{transform:translate(0,0)}
          50%{transform:translate(-20px,25px)}
        }
        @keyframes driftC {
          0%,100%{transform:translate(0,0)}
          50%{transform:translate(15px,-25px)}
        }
      `}</style>
    </div>
  );
};

export default HomePage;


