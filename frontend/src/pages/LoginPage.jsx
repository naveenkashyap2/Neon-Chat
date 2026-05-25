// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import AuthImagePattern from "../components/AuthImagePattern";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const { login, isLoggingIn } = useAuthStore();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     login(formData);
//   };

//   return (
//     <div className="h-screen grid lg:grid-cols-2">
//       {/* Left Side - Form */}
//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* Logo */}
//           <div className="text-center mb-8">
//             <div className="flex flex-col items-center gap-2 group">
//               <div
//                 className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
//               transition-colors"
//               >
//                 <MessageSquare className="w-6 h-6 text-primary" />
//               </div>
//               <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
//               <p className="text-base-content/60">Sign in to your account</p>
//             </div>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Email</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="email"
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                 />
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Password</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={(e) =>
//                     setFormData({ ...formData, password: e.target.value })
//                   }
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-base-content/40" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-base-content/40" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary w-full"
//               disabled={isLoggingIn}
//             >
//               {isLoggingIn ? (
//                 <>
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                   Loading...
//                 </>
//               ) : (
//                 "Sign in"
//               )}
//             </button>
//           </form>

//           <div className="text-center">
//             <p className="text-base-content/60">
//               Don&apos;t have an account?{" "}
//               <Link to="/signup" className="link link-primary">
//                 Create account
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image/Pattern */}
//       <AuthImagePattern
//         title={"Welcome back!"}
//         subtitle={
//           "Sign in to continue your conversations and catch up with your messages."
//         }
//       />
//     </div>
//   );
// };
// export default LoginPage;




















import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  Zap,
} from "lucide-react";

const NeonOrb = ({ style }) => (
  <div
    style={{
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(80px)",
      opacity: 0.15,
      pointerEvents: "none",
      ...style,
    }}
  />
);

const GridLines = () => (
  <svg
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      opacity: 0.04,
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path
          d="M 60 0 L 0 0 0 60"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

const FloatingParticle = ({ style }) => (
  <div
    style={{
      position: "absolute",
      width: 3,
      height: 3,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
      animation: "floatUp 6s infinite ease-in-out",
      pointerEvents: "none",
      ...style,
    }}
  />
);

const GlassInput = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  rightEl,
}) => (
  <div style={{ position: "relative", marginBottom: 16 }}>
    <div
      style={{
        position: "absolute",
        left: 16,
        top: "50%",
        transform: "translateY(-50%)",
        color: "#7c3aed",
        zIndex: 1,
      }}
    >
      <Icon size={18} />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "14px 48px 14px 48px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(167,139,250,0.2)",
        borderRadius: 14,
        color: "#e2e8f0",
        fontSize: 14,
        outline: "none",
        boxSizing: "border-box",
        transition: "all 0.3s",
        fontFamily: "'Rajdhani', sans-serif",
        letterSpacing: 0.5,
      }}
      onFocus={(e) => {
        e.target.style.border = "1px solid rgba(167,139,250,0.6)";
        e.target.style.background = "rgba(255,255,255,0.07)";
        e.target.style.boxShadow = "0 0 20px rgba(124,58,237,0.15)";
      }}
      onBlur={(e) => {
        e.target.style.border = "1px solid rgba(167,139,250,0.2)";
        e.target.style.background = "rgba(255,255,255,0.04)";
        e.target.style.boxShadow = "none";
      }}
    />
    {rightEl && (
      <div
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          color: "#7c3aed",
          cursor: "pointer",
        }}
      >
        {rightEl}
      </div>
    )}
  </div>
);

const ChatPreview = () => {
  const messages = [
    {
      id: 1,
      sent: false,
      text: "Hey! The new UI looks incredible 🔥",
      time: "9:41 AM",
      avatar: "A",
    },
    {
      id: 2,
      sent: true,
      text: "Right?! Neon + glassmorphism hits different",
      time: "9:42 AM",
    },
    {
      id: 3,
      sent: false,
      text: "Real-time is smooth too. Socket.io magic ⚡",
      time: "9:42 AM",
      avatar: "A",
    },
    {
      id: 4,
      sent: true,
      text: "MERN stack never looked this good 🚀",
      time: "9:43 AM",
    },
  ];

  return (
    <div
      style={{
        background: "rgba(15,10,30,0.8)",
        border: "1px solid rgba(167,139,250,0.15)",
        borderRadius: 20,
        overflow: "hidden",
        backdropFilter: "blur(20px)",
        boxShadow:
          "0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Chat Header */}
      <div
        style={{
          padding: "14px 20px",
          background: "rgba(124,58,237,0.1)",
          borderBottom: "1px solid rgba(167,139,250,0.1)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7c3aed, #0891b2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            boxShadow: "0 0 12px rgba(124,58,237,0.5)",
          }}
        >
          A
        </div>
        <div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#e2e8f0",
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            Alex Chen
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#22d3ee",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22d3ee",
                boxShadow: "0 0 6px #22d3ee",
              }}
            />
            Online
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          {["#7c3aed", "#2563eb", "#0891b2"].map((c, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: c,
                boxShadow: `0 0 6px ${c}`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          minHeight: 200,
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              flexDirection: msg.sent ? "row-reverse" : "row",
              alignItems: "flex-end",
              gap: 8,
            }}
          >
            {!msg.sent && (
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed, #0891b2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                {msg.avatar}
              </div>
            )}
            <div
              style={{
                maxWidth: "70%",
                padding: "10px 14px",
                borderRadius: msg.sent
                  ? "18px 18px 4px 18px"
                  : "18px 18px 18px 4px",
                background: msg.sent
                  ? "linear-gradient(135deg, rgba(124,58,237,0.7), rgba(37,99,235,0.7))"
                  : "rgba(255,255,255,0.06)",
                border: msg.sent
                  ? "1px solid rgba(124,58,237,0.3)"
                  : "1px solid rgba(255,255,255,0.08)",
                color: "#e2e8f0",
                fontSize: 13,
                lineHeight: 1.5,
                backdropFilter: "blur(10px)",
                boxShadow: msg.sent
                  ? "0 4px 20px rgba(124,58,237,0.2)"
                  : "none",
              }}
            >
              <div>{msg.text}</div>
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(226,232,240,0.4)",
                  marginTop: 4,
                  textAlign: msg.sent ? "right" : "left",
                }}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        style={{
          padding: "12px 16px",
          borderTop: "1px solid rgba(167,139,250,0.1)",
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "10px 16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(167,139,250,0.15)",
            borderRadius: 50,
            color: "rgba(226,232,240,0.3)",
            fontSize: 13,
            fontFamily: "'Rajdhani', sans-serif",
          }}
        >
          Type a message...
        </div>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7c3aed, #0891b2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 15px rgba(124,58,237,0.5)",
            cursor: "pointer",
          }}
        >
          <Zap size={16} color="#fff" fill="#fff" />
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore(); // ✅ same functionality

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData); // ✅ same
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#060412",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@700;900&display=swap');
        @keyframes floatUp { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-20px) scale(1.1)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{opacity:0.15} 50%{opacity:0.25} }
        ::placeholder { color: rgba(148,163,184,0.4) !important; }
        * { box-sizing: border-box; }
      `}</style>

      <GridLines />
      <NeonOrb
        style={{
          width: 600,
          height: 600,
          top: -200,
          left: -200,
          background: "#7c3aed",
        }}
      />
      <NeonOrb
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          right: "40%",
          background: "#0891b2",
          animation: "pulse 4s ease-in-out infinite",
        }}
      />
      <NeonOrb
        style={{
          width: 300,
          height: 300,
          top: "30%",
          right: "10%",
          background: "#ec4899",
        }}
      />

      {[...Array(8)].map((_, i) => (
        <FloatingParticle
          key={i}
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${5 + i}s`,
          }}
        />
      ))}

      {/* Left — Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 420,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(167,139,250,0.2)",
            borderRadius: 24,
            padding: "40px 36px",
            backdropFilter: "blur(30px)",
            boxShadow:
              "0 30px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                margin: "0 auto 16px",
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(8,145,178,0.3))",
                border: "1px solid rgba(167,139,250,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 30px rgba(124,58,237,0.3)",
              }}
            >
              <MessageSquare size={24} color="#a78bfa" />
            </div>
            <div
              style={{
                fontSize: 11,
                fontFamily: "'Orbitron', sans-serif",
                color: "#a78bfa",
                letterSpacing: 4,
                marginBottom: 8,
              }}
            >
              MERN CHAT 2026
            </div>
            <h1
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#fff",
                margin: 0,
                letterSpacing: 1,
              }}
            >
              Welcome Back
            </h1>
            <p
              style={{
                color: "rgba(148,163,184,0.6)",
                fontSize: 13,
                margin: "6px 0 0",
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              Sign in to continue
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <GlassInput
              icon={Mail}
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <GlassInput
              icon={Lock}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              rightEl={
                showPassword ? (
                  <EyeOff size={18} onClick={() => setShowPassword(false)} />
                ) : (
                  <Eye size={18} onClick={() => setShowPassword(true)} />
                )
              }
            />

            <div style={{ marginBottom: 20 }}>
              <button
                type="submit"
                disabled={isLoggingIn}
                style={{
                  width: "100%",
                  padding: "15px",
                  background: isLoggingIn
                    ? "rgba(124,58,237,0.4)"
                    : "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #0891b2 100%)",
                  border: "none",
                  borderRadius: 14,
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: isLoggingIn ? "not-allowed" : "pointer",
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  boxShadow: "0 0 30px rgba(124,58,237,0.4)",
                  transition: "all 0.3s",
                }}
              >
                {isLoggingIn ? (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    <Loader2
                      size={18}
                      style={{ animation: "spin 1s linear infinite" }}
                    />{" "}
                    Connecting...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>

          <div
            style={{
              textAlign: "center",
              fontSize: 13,
              color: "rgba(148,163,184,0.5)",
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            No account?{" "}
            <Link
              to="/signup"
              style={{
                color: "#a78bfa",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Create one
            </Link>
          </div>

          <div
            style={{
              marginTop: 24,
              paddingTop: 24,
              borderTop: "1px solid rgba(167,139,250,0.1)",
              display: "flex",
              justifyContent: "center",
              gap: 20,
            }}
          >
            {["React", "Node.js", "MongoDB", "Socket.io"].map((tech) => (
              <div
                key={tech}
                style={{
                  fontSize: 10,
                  color: "rgba(167,139,250,0.4)",
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: 1,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — Chat Preview */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ width: "100%", maxWidth: 460 }}>
          <div style={{ marginBottom: 32, textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 22,
                background:
                  "linear-gradient(135deg, #a78bfa, #22d3ee, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 8px",
                letterSpacing: 2,
              }}
            >
              2026 MERN REAL TIME
            </h2>
            <h2
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 22,
                background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: 0,
                letterSpacing: 2,
              }}
            >
              CHAT APP
            </h2>
          </div>
          <ChatPreview />
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
              gap: 24,
            }}
          >
            {[
              { color: "#a78bfa", label: "Live Chat" },
              { color: "#22d3ee", label: "Real-time" },
              { color: "#f472b6", label: "Secure" },
            ].map(({ color, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  color: "rgba(226,232,240,0.5)",
                  fontFamily: "'Rajdhani', sans-serif",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: color,
                    boxShadow: `0 0 6px ${color}`,
                  }}
                />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;