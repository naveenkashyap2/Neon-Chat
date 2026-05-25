// import { THEMES } from "../constants";
// import { useThemeStore } from "../store/useThemeStore";
// import { Send } from "lucide-react";

// const PREVIEW_MESSAGES = [
//   { id: 1, content: "Hey! How's it going?", isSent: false },
//   {
//     id: 2,
//     content: "I'm doing great! Just working on some new features.",
//     isSent: true,
//   },
// ];

// const SettingsPage = () => {
//   const { theme, setTheme } = useThemeStore();

//   return (
//     <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
//       <div className="space-y-6">
//         <div className="flex flex-col gap-1">
//           <h2 className="text-lg font-semibold">Theme</h2>
//           <p className="text-sm text-base-content/70">
//             Choose a theme for your chat interface
//           </p>
//         </div>

//         <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
//           {THEMES.map((t) => (
//             <button
//               key={t}
//               className={`
//                 group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
//                 ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
//               `}
//               onClick={() => setTheme(t)}
//             >
//               <div
//                 className="relative h-8 w-full rounded-md overflow-hidden"
//                 data-theme={t}
//               >
//                 <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
//                   <div className="rounded bg-primary"></div>
//                   <div className="rounded bg-secondary"></div>
//                   <div className="rounded bg-accent"></div>
//                   <div className="rounded bg-neutral"></div>
//                 </div>
//               </div>
//               <span className="text-[11px] font-medium truncate w-full text-center">
//                 {t.charAt(0).toUpperCase() + t.slice(1)}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Preview Section */}
//         <h3 className="text-lg font-semibold mb-3">Preview</h3>
//         <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
//           <div className="p-4 bg-base-200">
//             <div className="max-w-lg mx-auto">
//               {/* Mock Chat UI */}
//               <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
//                 {/* Chat Header */}
//                 <div className="px-4 py-3 border-b border-base-300 bg-base-100">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
//                       J
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-sm">John Doe</h3>
//                       <p className="text-xs text-base-content/70">Online</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Chat Messages */}
//                 <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
//                   {PREVIEW_MESSAGES.map((message) => (
//                     <div
//                       key={message.id}
//                       className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
//                     >
//                       <div
//                         className={`
//                           max-w-[80%] rounded-xl p-3 shadow-sm
//                           ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}
//                         `}
//                       >
//                         <p className="text-sm">{message.content}</p>
//                         <p
//                           className={`
//                             text-[10px] mt-1.5
//                             ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
//                           `}
//                         >
//                           12:00 PM
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Chat Input */}
//                 <div className="p-4 border-t border-base-300 bg-base-100">
//                   <div className="flex gap-2">
//                     <input
//                       type="text"
//                       className="input input-bordered flex-1 text-sm h-10"
//                       placeholder="Type a message..."
//                       value="This is a preview"
//                       readOnly
//                     />
//                     <button className="btn btn-primary h-10 min-h-0">
//                       <Send size={18} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SettingsPage;
































import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { useNavigate } from "react-router-dom";
import { Send, ArrowLeft, Palette } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background:
          "linear-gradient(135deg,#0a0015 0%,#0d0030 40%,#00101a 100%)",
      }}
    >
      {/* ── Background Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[
          {
            color: "#7c3aed",
            size: 350,
            top: "-100px",
            left: "-80px",
            delay: "0s",
          },
          {
            color: "#06b6d4",
            size: 260,
            top: "80px",
            right: "-60px",
            delay: "2s",
          },
          {
            color: "#ec4899",
            size: 200,
            bottom: "0",
            left: "40%",
            delay: "4s",
          },
        ].map((o, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: o.size,
              height: o.size,
              background: o.color,
              filter: "blur(70px)",
              opacity: 0.2,
              top: o.top,
              left: o.left,
              right: o.right,
              bottom: o.bottom,
              animation: `orbDrift 10s ease-in-out infinite ${o.delay}`,
            }}
          />
        ))}
      </div>

      {/* ── Navbar ── */}
      <header
        className="sticky top-0 z-30 flex items-center justify-between px-4 h-14"
        style={{
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(139,92,246,0.25)",
          backdropFilter: "blur(20px)",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl
            text-xs font-medium transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(139,92,246,0.25)",
            color: "rgba(255,255,255,0.55)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(124,58,237,0.2)";
            e.currentTarget.style.borderColor = "#7c3aed";
            e.currentTarget.style.color = "#a78bfa";
            e.currentTarget.style.boxShadow = "0 0 10px rgba(124,58,237,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)";
            e.currentTarget.style.color = "rgba(255,255,255,0.55)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <ArrowLeft size={13} />
          <span className="hidden sm:inline">Back</span>
        </button>

        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
              boxShadow: "0 0 12px rgba(124,58,237,0.5)",
            }}
          >
            💬
          </div>
          <span className="font-extrabold text-sm text-slate-100">
            NeonChat
          </span>
        </div>

        <div className="w-20" />
      </header>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Page heading */}
        <div>
          <h1
            className="text-2xl font-extrabold mb-1"
            style={{
              background: "linear-gradient(90deg,#a78bfa,#67e8f9,#f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Settings
          </h1>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Customize your chat experience
          </p>
        </div>

        {/* ── Theme Card ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(139,92,246,0.2)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Card header */}
          <div
            className="flex items-center gap-3 px-5 py-3"
            style={{
              borderBottom: "1px solid rgba(139,92,246,0.12)",
              background: "rgba(124,58,237,0.06)",
            }}
          >
            <Palette size={14} style={{ color: "#a78bfa" }} />
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Theme
            </span>
            {/* Active theme badge */}
            <span
              className="ml-auto text-xs px-2.5 py-1 rounded-full font-bold"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(139,92,246,0.3)",
                color: "#a78bfa",
              }}
            >
              ● {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </span>
          </div>

          <div className="px-5 pt-3 pb-1">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Choose a theme for your chat interface
            </p>
          </div>

          {/* Theme grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 p-4">
            {THEMES.map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className="flex flex-col items-center gap-1.5 p-2 rounded-xl
                  transition-all duration-200"
                style={{
                  background:
                    theme === t
                      ? "rgba(124,58,237,0.18)"
                      : "rgba(255,255,255,0.03)",
                  border:
                    theme === t
                      ? "1px solid #7c3aed"
                      : "1px solid rgba(139,92,246,0.15)",
                  boxShadow:
                    theme === t ? "0 0 12px rgba(124,58,237,0.25)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (theme !== t) {
                    e.currentTarget.style.background = "rgba(124,58,237,0.1)";
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.35)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (theme !== t) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.15)";
                  }
                }}
              >
                {/* Color swatch */}
                <div
                  className="relative w-full rounded-lg overflow-hidden"
                  style={{ height: "28px" }}
                  data-theme={t}
                >
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                    <div className="rounded bg-primary" />
                    <div className="rounded bg-secondary" />
                    <div className="rounded bg-accent" />
                    <div className="rounded bg-neutral" />
                  </div>
                </div>
                {/* Theme name */}
                <span
                  className="text-center w-full truncate"
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    color: theme === t ? "#a78bfa" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Preview Card ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(139,92,246,0.2)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Card header */}
          <div
            className="flex items-center gap-3 px-5 py-3"
            style={{
              borderBottom: "1px solid rgba(139,92,246,0.12)",
              background: "rgba(124,58,237,0.06)",
            }}
          >
            <span style={{ fontSize: "14px" }}>👁️</span>
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Preview
            </span>
          </div>

          <div className="p-4">
            {/* Mock chat UI */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(139,92,246,0.2)" }}
            >
              {/* Chat header */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  borderBottom: "1px solid rgba(139,92,246,0.15)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center
                    text-xs font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#ec4899)",
                    boxShadow: "0 0 8px rgba(124,58,237,0.4)",
                  }}
                >
                  JD
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-100">John Doe</p>
                  <p className="text-xs" style={{ color: "#34d399" }}>
                    ● Online
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div
                className="p-4 flex flex-col gap-3 overflow-y-auto"
                style={{
                  minHeight: "140px",
                  maxHeight: "180px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {PREVIEW_MESSAGES.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isSent ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className="max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed"
                      style={
                        msg.isSent
                          ? {
                              background:
                                "linear-gradient(135deg,#7c3aed,#6d28d9)",
                              color: "#fff",
                              borderRadius: "12px 12px 4px 12px",
                              boxShadow: "0 4px 12px rgba(124,58,237,0.3)",
                            }
                          : {
                              background: "rgba(255,255,255,0.08)",
                              border: "1px solid rgba(139,92,246,0.2)",
                              color: "#e2e8f0",
                              borderRadius: "12px 12px 12px 4px",
                            }
                      }
                    >
                      {msg.content}
                      <div
                        className="mt-1 text-right"
                        style={{
                          fontSize: "9px",
                          color: "rgba(255,255,255,0.35)",
                        }}
                      >
                        12:00 PM {msg.isSent && "✓✓"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div
                className="flex items-center gap-2 px-3 py-3"
                style={{
                  borderTop: "1px solid rgba(139,92,246,0.12)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <input
                  type="text"
                  readOnly
                  value="This is a preview"
                  className="flex-1 px-3 py-2 rounded-xl text-xs outline-none text-slate-300"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(139,92,246,0.2)",
                  }}
                />
                <button
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
                    boxShadow: "0 3px 10px rgba(124,58,237,0.4)",
                    border: "none",
                  }}
                >
                  <Send size={13} color="#fff" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbDrift {
          0%, 100% { transform: translate(0,0); }
          50%       { transform: translate(15px, 12px); }
        }
      `}</style>
    </div>
  );
};

export default SettingsPage;
