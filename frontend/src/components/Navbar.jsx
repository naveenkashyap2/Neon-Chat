// import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore";
// import { LogOut, MessageSquare, Settings, User } from "lucide-react";

// const Navbar = () => {
//   const { logout, authUser } = useAuthStore();

//   return (
//     <header
//       className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
//     backdrop-blur-lg bg-base-100/80"
//     >
//       <div className="container mx-auto px-4 h-16">
//         <div className="flex items-center justify-between h-full">
//           <div className="flex items-center gap-8">
//             <Link
//               to="/"
//               className="flex items-center gap-2.5 hover:opacity-80 transition-all"
//             >
//               <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <MessageSquare className="w-5 h-5 text-primary" />
//               </div>
//               <h1 className="text-lg font-bold">Chatty</h1>
//             </Link>
//           </div>

//           <div className="flex items-center gap-2">
//             <Link
//               to={"/settings"}
//               className={`
//               btn btn-sm gap-2 transition-colors
              
//               `}
//             >
//               <Settings className="w-4 h-4" />
//               <span className="hidden sm:inline">Settings</span>
//             </Link>

//             {authUser && (
//               <>
//                 <Link to={"/profile"} className={`btn btn-sm gap-2`}>
//                   <User className="size-5" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button className="flex gap-2 items-center" onClick={logout}>
//                   <LogOut className="size-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navbar;









































import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="fixed w-full top-0 z-40 flex-shrink-0"
      style={{
        background: "rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(139,92,246,0.25)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center
              transition-all duration-300 group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
              boxShadow: "0 0 14px rgba(124,58,237,0.5)",
            }}
          >
            <MessageSquare size={15} color="#fff" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm text-slate-100 tracking-wide">
              NeonChat
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-bold tracking-wider"
              style={{
                background: "linear-gradient(90deg,#7c3aed,#ec4899)",
                color: "#fff",
                fontSize: "9px",
              }}
            >
              2026
            </span>
          </div>
        </Link>

        {/* ── Nav Actions ── */}
        <div className="flex items-center gap-2">
          <Link
            to="/settings"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg
              text-xs text-slate-400 transition-all duration-200
              hover:text-purple-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(139,92,246,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(124,58,237,0.2)";
              e.currentTarget.style.borderColor = "#7c3aed";
              e.currentTarget.style.boxShadow = "0 0 10px rgba(124,58,237,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.2)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Settings size={13} />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                  text-xs text-slate-400 transition-all duration-200
                  hover:text-purple-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(139,92,246,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(124,58,237,0.2)";
                  e.currentTarget.style.borderColor = "#7c3aed";
                  e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(124,58,237,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.2)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <User size={13} />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              {/* Avatar + Logout */}
              <div className="flex items-center gap-2 pl-1">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center
                    text-xs font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#ec4899)",
                    boxShadow: "0 0 10px rgba(124,58,237,0.4)",
                  }}
                >
                  {authUser.fullName?.[0]?.toUpperCase() || "U"}
                </div>

                <button
                  onClick={logout}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                    text-xs text-slate-400 transition-all duration-200
                    hover:text-red-400"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(239,68,68,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(239,68,68,0.12)";
                    e.currentTarget.style.borderColor = "rgba(239,68,68,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(239,68,68,0.15)";
                  }}
                >
                  <LogOut size={13} />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
