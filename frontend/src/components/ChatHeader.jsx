// import { X } from "lucide-react";
// import { useAuthStore } from "../store/useAuthStore";
// import { useChatStore } from "../store/useChatStore";

// const ChatHeader = () => {
//   const { selectedUser, setSelectedUser } = useChatStore();
//   const { onlineUsers } = useAuthStore();

//   return (
//     <div className="p-2.5 border-b border-base-300">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <div className="avatar">
//             <div className="size-10 rounded-full relative">
//               <img
//                 src={selectedUser.profilePic || "/avatar.png"}
//                 alt={selectedUser.fullName}
//               />
//             </div>
//           </div>

//           {/* User info */}
//           <div>
//             <h3 className="font-medium">{selectedUser.fullName}</h3>
//             <p className="text-sm text-base-content/70">
//               {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
//             </p>
//           </div>
//         </div>

//         {/* Close button */}
//         <button onClick={() => setSelectedUser(null)}>
//           <X />
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ChatHeader;

import { X, Phone, Video, Search } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div
      className="flex items-center justify-between px-4 py-2.5 flex-shrink-0"
      style={{
        borderBottom: "1px solid rgba(139,92,246,0.2)",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Left — Avatar + Info */}
      <div className="flex items-center gap-3">
        {/* Animated avatar ring */}
        <div className="relative flex-shrink-0">
          <div
            className="absolute inset-0 rounded-full opacity-60"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#06b6d4,#ec4899)",
              filter: "blur(3px)",
              transform: "scale(1.15)",
              animation: isOnline ? "spin 4s linear infinite" : "none",
            }}
          />
          <img
            src={selectedUser.profilePic || "/avatar.png"}
            alt={selectedUser.fullName}
            className="relative z-10 w-10 h-10 rounded-full object-cover"
            style={{ border: "2px solid rgba(124,58,237,0.4)" }}
          />
          {isOnline && (
            <span
              className="absolute bottom-0 right-0 z-20 w-2.5 h-2.5 rounded-full bg-emerald-400"
              style={{
                border: "1.5px solid #0a0015",
                boxShadow: "0 0 6px #10b981",
              }}
            />
          )}
        </div>

        <div>
          <h3 className="font-bold text-sm text-slate-100">
            {selectedUser.fullName}
          </h3>
          <p
            className="text-xs mt-0.5"
            style={{ color: isOnline ? "#34d399" : "rgba(255,255,255,0.35)" }}
          >
            {isOnline ? "● Online now" : "○ Offline"}
          </p>
        </div>
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-2">
        {[
          { icon: <Phone size={13} />, label: "Call" },
          { icon: <Video size={13} />, label: "Video" },
          { icon: <Search size={13} />, label: "Search" },
        ].map(({ icon, label }) => (
          <button
            key={label}
            title={label}
            className="w-8 h-8 rounded-lg flex items-center justify-center
              transition-all duration-200 text-slate-400 hover:text-purple-300"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(139,92,246,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(124,58,237,0.2)";
              e.currentTarget.style.borderColor = "#7c3aed";
              e.currentTarget.style.boxShadow =
                "0 0 10px rgba(124,58,237,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.2)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {icon}
          </button>
        ))}

        {/* Close */}
        <button
          onClick={() => setSelectedUser(null)}
          title="Close"
          className="w-8 h-8 rounded-lg flex items-center justify-center
            transition-all duration-200 text-slate-400 hover:text-red-400"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(239,68,68,0.15)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239,68,68,0.15)";
            e.currentTarget.style.borderColor = "rgba(239,68,68,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            e.currentTarget.style.borderColor = "rgba(239,68,68,0.15)";
          }}
        >
          <X size={13} />
        </button>
      </div>

      <style>{`
        @keyframes spin {
          0%{transform:scale(1.15) rotate(0deg)}
          100%{transform:scale(1.15) rotate(360deg)}
        }
      `}</style>
    </div>
  );
};

export default ChatHeader;