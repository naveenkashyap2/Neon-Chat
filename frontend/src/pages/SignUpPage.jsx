// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import {
//   Eye,
//   EyeOff,
//   Loader2,
//   Lock,
//   Mail,
//   MessageSquare,
//   User,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// import AuthImagePattern from "../components/AuthImagePattern";
// import toast from "react-hot-toast";

// const SignUpPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const { signup, isSigningUp } = useAuthStore();

//   const validateForm = () => {
//     if (!formData.fullName.trim()) return toast.error("Full name is required");
//     if (!formData.email.trim()) return toast.error("Email is required");
//     if (!/\S+@\S+\.\S+/.test(formData.email))
//       return toast.error("Invalid email format");
//     if (!formData.password) return toast.error("Password is required");
//     if (formData.password.length < 6)
//       return toast.error("Password must be at least 6 characters");

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const success = validateForm();

//     if (success === true) signup(formData);
//   };

//   return (
//     <div className="min-h-screen grid lg:grid-cols-2">
//       {/* left side */}
//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* LOGO */}
//           <div className="text-center mb-8">
//             <div className="flex flex-col items-center gap-2 group">
//               <div
//                 className="size-12 rounded-xl bg-primary/10 flex items-center justify-center
//               group-hover:bg-primary/20 transition-colors"
//               >
//                 <MessageSquare className="size-6 text-primary" />
//               </div>
//               <h1 className="text-2xl font-bold mt-2">Create Account</h1>
//               <p className="text-base-content/60">
//                 Get started with your free account
//               </p>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Full Name</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="size-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="text"
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="John Doe"
//                   value={formData.fullName}
//                   onChange={(e) =>
//                     setFormData({ ...formData, fullName: e.target.value })
//                   }
//                 />
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Email</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="size-5 text-base-content/40" />
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
//                   <Lock className="size-5 text-base-content/40" />
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
//                     <EyeOff className="size-5 text-base-content/40" />
//                   ) : (
//                     <Eye className="size-5 text-base-content/40" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary w-full"
//               disabled={isSigningUp}
//             >
//               {isSigningUp ? (
//                 <>
//                   <Loader2 className="size-5 animate-spin" />
//                   Loading...
//                 </>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>

//           <div className="text-center">
//             <p className="text-base-content/60">
//               Already have an account?{" "}
//               <Link to="/login" className="link link-primary">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* right side */}

//       <AuthImagePattern
//         title="Join our community"
//         subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
//       />
//     </div>
//   );
// };
// export default SignUpPage;












// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import {
//   Eye,
//   EyeOff,
//   Loader2,
//   Lock,
//   Mail,
//   MessageSquare,
//   User,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import AuthImagePattern from "../components/AuthImagePattern";
// import toast from "react-hot-toast";

// const SignUpPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const { signup, isSigningUp } = useAuthStore();

//   const validateForm = () => {
//     if (!formData.fullName.trim()) return toast.error("Full name is required");
//     if (!formData.email.trim()) return toast.error("Email is required");
//     if (!/\S+@\S+\.\S+/.test(formData.email))
//       return toast.error("Invalid email format");
//     if (!formData.password) return toast.error("Password is required");
//     if (formData.password.length < 6)
//       return toast.error("Password must be at least 6 characters");
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm() === true) signup(formData);
//   };

//   return (
//     <div className="min-h-screen grid lg:grid-cols-2">
//       {/* Left side */}
//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-sm space-y-7">
//           {/* Logo + heading */}
//           <div>
//             <Link
//               to="/"
//               className="inline-flex items-center gap-2.5 mb-7 hover:opacity-75 transition-opacity"
//             >
//               <div className="size-[36px] rounded-[9px] bg-primary/10 flex items-center justify-center">
//                 <MessageSquare className="size-[18px] text-primary" />
//               </div>
//               <span className="text-[15px] font-medium tracking-tight">
//                 Chatty
//               </span>
//             </Link>
//             <h1 className="text-[22px] font-medium tracking-tight">
//               Create account
//             </h1>
//             <p className="text-sm text-base-content/50 mt-1.5">
//               Get started for free — no credit card needed.
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Full Name */}
//             <div className="space-y-1.5">
//               <label className="text-[13px] font-medium text-base-content/70">
//                 Full name
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="size-4 text-base-content/30" />
//                 </div>
//                 <input
//                   type="text"
//                   className="input input-bordered w-full pl-9 h-[38px] text-sm"
//                   placeholder="John Doe"
//                   value={formData.fullName}
//                   onChange={(e) =>
//                     setFormData({ ...formData, fullName: e.target.value })
//                   }
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="space-y-1.5">
//               <label className="text-[13px] font-medium text-base-content/70">
//                 Email
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="size-4 text-base-content/30" />
//                 </div>
//                 <input
//                   type="email"
//                   className="input input-bordered w-full pl-9 h-[38px] text-sm"
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="space-y-1.5">
//               <label className="text-[13px] font-medium text-base-content/70">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="size-4 text-base-content/30" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="input input-bordered w-full pl-9 pr-10 h-[38px] text-sm"
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={(e) =>
//                     setFormData({ ...formData, password: e.target.value })
//                   }
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/30 hover:text-base-content/60 transition-colors"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="size-4" />
//                   ) : (
//                     <Eye className="size-4" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="btn btn-primary w-full h-[38px] min-h-0 text-sm font-medium mt-1"
//               disabled={isSigningUp}
//             >
//               {isSigningUp ? (
//                 <>
//                   <Loader2 className="size-4 animate-spin" />
//                   Creating account...
//                 </>
//               ) : (
//                 "Create account"
//               )}
//             </button>
//           </form>

//           {/* Footer */}
//           <p className="text-[13px] text-base-content/50 text-center">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-primary font-medium hover:underline"
//             >
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>

//       {/* Right side */}
//       <AuthImagePattern
//         title="Join our community"
//         subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
//       />
//     </div>
//   );
// };

// export default SignUpPage;





















































import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

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
      <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
        <path
          d="M 60 0 L 0 0 0 60"
          fill="none"
          stroke="#34d399"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid2)" />
  </svg>
);

const FloatingParticle = ({ style }) => (
  <div
    style={{
      position: "absolute",
      width: 3,
      height: 3,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #34d399, #06b6d4)",
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
  label,
}) => (
  <div style={{ marginBottom: 16 }}>
    {label && (
      <div
        style={{
          fontSize: 11,
          fontFamily: "'Rajdhani', sans-serif",
          color: "rgba(52,211,153,0.7)",
          letterSpacing: 2,
          marginBottom: 6,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    )}
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          color: "#059669",
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
          border: "1px solid rgba(52,211,153,0.2)",
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
          e.target.style.border = "1px solid rgba(52,211,153,0.6)";
          e.target.style.background = "rgba(255,255,255,0.07)";
          e.target.style.boxShadow = "0 0 20px rgba(5,150,105,0.15)";
        }}
        onBlur={(e) => {
          e.target.style.border = "1px solid rgba(52,211,153,0.2)";
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
            color: "#059669",
            cursor: "pointer",
          }}
        >
          {rightEl}
        </div>
      )}
    </div>
  </div>
);

const AVATARS = [
  {
    initials: "RK",
    color: "#7c3aed",
    x: "50%",
    y: "18%",
    delay: "0s",
    dur: "5s",
  },
  {
    initials: "AS",
    color: "#0891b2",
    x: "22%",
    y: "30%",
    delay: "0.8s",
    dur: "6.5s",
  },
  {
    initials: "PJ",
    color: "#db2777",
    x: "78%",
    y: "35%",
    delay: "1.6s",
    dur: "4.8s",
  },
  {
    initials: "MN",
    color: "#d97706",
    x: "15%",
    y: "58%",
    delay: "2.4s",
    dur: "7s",
  },
  {
    initials: "VC",
    color: "#059669",
    x: "85%",
    y: "62%",
    delay: "0.4s",
    dur: "5.5s",
  },
  {
    initials: "TR",
    color: "#7c3aed",
    x: "40%",
    y: "75%",
    delay: "1.2s",
    dur: "6s",
  },
  {
    initials: "SL",
    color: "#0891b2",
    x: "65%",
    y: "80%",
    delay: "2s",
    dur: "4.5s",
  },
  {
    initials: "BF",
    color: "#db2777",
    x: "30%",
    y: "50%",
    delay: "3s",
    dur: "5.8s",
  },
];

const CommunityAnimation = () => (
  <div style={{ width: "100%", maxWidth: 480, position: "relative" }}>
    <div style={{ textAlign: "center", marginBottom: 28 }}>
      <div
        style={{
          fontSize: 11,
          fontFamily: "'Orbitron', sans-serif",
          color: "#34d399",
          letterSpacing: 4,
          marginBottom: 10,
        }}
      >
        JOIN THE NETWORK
      </div>
      <h2
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 22,
          background: "linear-gradient(135deg, #34d399, #06b6d4, #818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          margin: "0 0 6px",
          letterSpacing: 2,
        }}
      >
        YOUR PEOPLE
      </h2>
      <h2
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 22,
          background: "linear-gradient(135deg, #06b6d4, #34d399)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          margin: 0,
          letterSpacing: 2,
        }}
      >
        ARE WAITING
      </h2>
    </div>

    {/* Orbital network */}
    <div style={{ position: "relative", height: 360 }}>
      <style>{`
        @keyframes floatAvatar {
          0%,100% { transform: translate(-50%,-50%) translateY(0px) scale(1); }
          50% { transform: translate(-50%,-50%) translateY(-14px) scale(1.05); }
        }
        @keyframes ringPulse {
          0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.15; }
          50% { transform: translate(-50%,-50%) scale(1.06); opacity: 0.28; }
        }
        @keyframes connPulse {
          0%,100% { opacity: 0.08; }
          50% { opacity: 0.25; }
        }
        @keyframes centerGlow {
          0%,100% { box-shadow: 0 0 30px rgba(52,211,153,0.4); }
          50% { box-shadow: 0 0 60px rgba(52,211,153,0.7), 0 0 100px rgba(6,182,212,0.3); }
        }
        @keyframes counterUp {
          0% { opacity:0; transform: translateY(6px); }
          100% { opacity:1; transform: translateY(0); }
        }
        @keyframes orbitRing {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }
      `}</style>

      {/* Orbit rings */}
      {[130, 175].map((r, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: r * 2,
            height: r * 2,
            border: `1px solid rgba(52,211,153,${0.07 + i * 0.04})`,
            borderRadius: "50%",
            animation: `ringPulse ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* Rotating dashed ring */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 300,
          height: 300,
          border: "1px dashed rgba(52,211,153,0.12)",
          borderRadius: "50%",
          animation: "orbitRing 20s linear infinite",
        }}
      />

      {/* Connection lines */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {AVATARS.map((a, i) => (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={a.x}
            y2={a.y}
            stroke="url(#lineGrad)"
            strokeWidth="0.8"
            style={{
              animation: `connPulse ${3 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center node */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: 64,
          height: 64,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(52,211,153,0.25), rgba(6,182,212,0.25))",
          border: "1px solid rgba(52,211,153,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "centerGlow 3s ease-in-out infinite",
          zIndex: 2,
        }}
      >
        <MessageSquare size={26} color="#34d399" />
      </div>

      {/* Avatar nodes */}
      {AVATARS.map((a, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: a.x,
            top: a.y,
            transform: "translate(-50%,-50%)",
            animation: `floatAvatar ${a.dur} ease-in-out infinite`,
            animationDelay: a.delay,
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${a.color}55, ${a.color}33)`,
              border: `1px solid ${a.color}66`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 700,
              color: "#fff",
              fontFamily: "'Rajdhani', sans-serif",
              boxShadow: `0 0 14px ${a.color}44`,
            }}
          >
            {a.initials}
          </div>
          <div
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#34d399",
              boxShadow: "0 0 6px #34d399",
              border: "1.5px solid #060412",
            }}
          />
        </div>
      ))}
    </div>

    {/* Stats row */}
    <div
      style={{
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        gap: 28,
      }}
    >
      {[
        { val: "12K+", label: "Members", color: "#34d399" },
        { val: "98%", label: "Active", color: "#06b6d4" },
        { val: "0ms", label: "Latency", color: "#818cf8" },
      ].map(({ val, label, color }) => (
        <div
          key={label}
          style={{
            textAlign: "center",
            animation: "counterUp 0.6s ease-out both",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              fontFamily: "'Orbitron', sans-serif",
              color,
              letterSpacing: 1,
            }}
          >
            {val}
          </div>
          <div
            style={{
              fontSize: 10,
              color: "rgba(148,163,184,0.45)",
              fontFamily: "'Rajdhani', sans-serif",
              letterSpacing: 2,
              marginTop: 2,
            }}
          >
            {label.toUpperCase()}
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        gap: 20,
      }}
    >
      {[
        { color: "#34d399", label: "Encrypted" },
        { color: "#06b6d4", label: "Real-time" },
        { color: "#818cf8", label: "Open Source" },
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
);

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm() === true) signup(formData);
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
          width: 500,
          height: 500,
          top: -150,
          left: -150,
          background: "#059669",
        }}
      />
      <NeonOrb
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          right: "35%",
          background: "#06b6d4",
          animation: "pulse 4s ease-in-out infinite",
        }}
      />
      <NeonOrb
        style={{
          width: 280,
          height: 280,
          top: "25%",
          right: "8%",
          background: "#818cf8",
        }}
      />

      {[...Array(8)].map((_, i) => (
        <FloatingParticle
          key={i}
          style={{
            left: `${8 + i * 11}%`,
            top: `${15 + (i % 3) * 28}%`,
            animationDelay: `${i * 0.7}s`,
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
            border: "1px solid rgba(52,211,153,0.2)",
            borderRadius: 24,
            padding: "40px 36px",
            backdropFilter: "blur(30px)",
            boxShadow:
              "0 30px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                margin: "0 auto 16px",
                background:
                  "linear-gradient(135deg, rgba(5,150,105,0.3), rgba(6,182,212,0.3))",
                border: "1px solid rgba(52,211,153,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 30px rgba(52,211,153,0.3)",
              }}
            >
              <MessageSquare size={24} color="#34d399" />
            </div>
            <div
              style={{
                fontSize: 11,
                fontFamily: "'Orbitron', sans-serif",
                color: "#34d399",
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
              Create Account
            </h1>
            <p
              style={{
                color: "rgba(148,163,184,0.6)",
                fontSize: 13,
                margin: "6px 0 0",
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              Join thousands of users worldwide
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <GlassInput
              icon={User}
              type="text"
              placeholder="John Doe"
              label="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            <GlassInput
              icon={Mail}
              type="email"
              placeholder="you@example.com"
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <GlassInput
              icon={Lock}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              label="Password"
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
                disabled={isSigningUp}
                style={{
                  width: "100%",
                  padding: "15px",
                  background: isSigningUp
                    ? "rgba(5,150,105,0.4)"
                    : "linear-gradient(135deg, #059669 0%, #0891b2 50%, #7c3aed 100%)",
                  border: "none",
                  borderRadius: 14,
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: isSigningUp ? "not-allowed" : "pointer",
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  boxShadow: "0 0 30px rgba(5,150,105,0.4)",
                  transition: "all 0.3s",
                }}
              >
                {isSigningUp ? (
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
                    />
                    Creating Account...
                  </span>
                ) : (
                  "Join Now"
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
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#34d399",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign in
            </Link>
          </div>

          <div
            style={{
              marginTop: 24,
              paddingTop: 24,
              borderTop: "1px solid rgba(52,211,153,0.1)",
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
                  color: "rgba(52,211,153,0.4)",
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

      {/* Right — Community Animation */}
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
        <CommunityAnimation />
      </div>
    </div>
  );
};

export default SignUpPage;






