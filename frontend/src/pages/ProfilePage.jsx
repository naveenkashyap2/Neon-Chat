// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Camera, Mail, User } from "lucide-react";

// const ProfilePage = () => {
//   const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
//   const [selectedImg, setSelectedImg] = useState(null);

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();

//     reader.readAsDataURL(file);

//     reader.onload = async () => {
//       const base64Image = reader.result;
//       setSelectedImg(base64Image);
//       await updateProfile({ profilePic: base64Image });
//     };
//   };

//   return (
//     <div className="h-screen pt-20">
//       <div className="max-w-2xl mx-auto p-4 py-8">
//         <div className="bg-base-300 rounded-xl p-6 space-y-8">
//           <div className="text-center">
//             <h1 className="text-2xl font-semibold ">Profile</h1>
//             <p className="mt-2">Your profile information</p>
//           </div>

//           {/* avatar upload section */}

//           <div className="flex flex-col items-center gap-4">
//             <div className="relative">
//               <img
//                 src={selectedImg || authUser.profilePic || "/avatar.png"}
//                 alt="Profile"
//                 className="size-32 rounded-full object-cover border-4 "
//               />
//               <label
//                 htmlFor="avatar-upload"
//                 className={`
//                   absolute bottom-0 right-0 
//                   bg-base-content hover:scale-105
//                   p-2 rounded-full cursor-pointer 
//                   transition-all duration-200
//                   ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
//                 `}
//               >
//                 <Camera className="w-5 h-5 text-base-200" />
//                 <input
//                   type="file"
//                   id="avatar-upload"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   disabled={isUpdatingProfile}
//                 />
//               </label>
//             </div>
//             <p className="text-sm text-zinc-400">
//               {isUpdatingProfile
//                 ? "Uploading..."
//                 : "Click the camera icon to update your photo"}
//             </p>
//           </div>

//           <div className="space-y-6">
//             <div className="space-y-1.5">
//               <div className="text-sm text-zinc-400 flex items-center gap-2">
//                 <User className="w-4 h-4" />
//                 Full Name
//               </div>
//               <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
//                 {authUser?.fullName}
//               </p>
//             </div>

//             <div className="space-y-1.5">
//               <div className="text-sm text-zinc-400 flex items-center gap-2">
//                 <Mail className="w-4 h-4" />
//                 Email Address
//               </div>
//               <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
//                 {authUser?.email}
//               </p>
//             </div>
//           </div>

//           <div className="mt-6 bg-base-300 rounded-xl p-6">
//             <h2 className="text-lg font-medium  mb-4">Account Information</h2>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center justify-between py-2 border-b border-zinc-700">
//                 <span>Member Since</span>
//                 <span>{authUser.createdAt?.split("T")[0]}</span>
//               </div>
//               <div className="flex items-center justify-between py-2">
//                 <span>Account Status</span>
//                 <span className="text-green-500">Active</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProfilePage;












import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, ArrowLeft, CheckCircle } from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
      setIsUpdated(true);
    };
  };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0015 0%, #0d0030 40%, #00101a 100%)",
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
            size: 250,
            top: "100px",
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
        ].map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              background: orb.color,
              filter: "blur(70px)",
              opacity: 0.2,
              top: orb.top,
              left: orb.left,
              right: orb.right,
              bottom: orb.bottom,
              animation: `orbDrift 10s ease-in-out infinite ${orb.delay}`,
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
        {/* Back button */}
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

        {/* Brand */}
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

      {/* ── Page Content ── */}
      <div className="relative z-10 flex justify-center px-4 py-8">
        <div className="w-full max-w-md flex flex-col gap-4">
          {/* ── Profile Card ── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(139,92,246,0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Card Header */}
            <div
              className="px-6 py-5 text-center"
              style={{ borderBottom: "1px solid rgba(139,92,246,0.12)" }}
            >
              <h1
                className="text-xl font-extrabold mb-1"
                style={{
                  background: "linear-gradient(90deg,#a78bfa,#67e8f9,#f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                My Profile
              </h1>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                Manage your account information
              </p>
            </div>

            {/* Upload progress bar */}
            {isUpdatingProfile && (
              <div
                className="h-0.5 w-full"
                style={{
                  background: "linear-gradient(90deg,#7c3aed,#06b6d4,#ec4899)",
                  animation: "barPulse 1.5s ease-in-out infinite",
                }}
              />
            )}

            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-3 py-6">
              {/* Spinning ring + avatar */}
              <div className="relative">
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg,#7c3aed,#06b6d4,#ec4899)",
                    filter: "blur(10px)",
                    opacity: 0.4,
                    transform: "scale(1.2)",
                  }}
                />
                {/* Spinning border */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "-3px",
                    background:
                      "linear-gradient(135deg,#7c3aed,#06b6d4,#ec4899)",
                    borderRadius: "50%",
                    animation: "spin 4s linear infinite",
                    zIndex: 1,
                  }}
                />
                {/* Avatar image */}
                <img
                  src={selectedImg || authUser.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="relative w-28 h-28 rounded-full object-cover"
                  style={{
                    border: "3px solid #0a0015",
                    zIndex: 2,
                  }}
                />
                {/* Camera button */}
                <label
                  htmlFor="avatar-upload"
                  className={`absolute bottom-1 right-1 z-10 w-8 h-8 rounded-full
                    flex items-center justify-center cursor-pointer
                    transition-all duration-200
                    ${isUpdatingProfile ? "animate-pulse pointer-events-none opacity-60" : "hover:scale-110"}`}
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
                    border: "2px solid #0a0015",
                    boxShadow: "0 0 12px rgba(124,58,237,0.6)",
                    zIndex: 3,
                  }}
                >
                  <Camera size={14} color="#fff" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
              </div>

              {/* Name + upload status */}
              <div className="text-center">
                <p className="font-bold text-sm text-slate-100">
                  {authUser?.fullName}
                </p>
                <p
                  className="text-xs mt-1 transition-all duration-300"
                  style={{
                    color: isUpdatingProfile
                      ? "#a78bfa"
                      : isUpdated
                        ? "#34d399"
                        : "rgba(255,255,255,0.3)",
                  }}
                >
                  {isUpdatingProfile
                    ? "⏳ Uploading photo..."
                    : isUpdated
                      ? "✓ Photo updated successfully"
                      : "Click 📷 to update your photo"}
                </p>
              </div>
            </div>

            {/* Fields */}
            <div
              className="px-5 pb-5 flex flex-col gap-4"
              style={{ borderTop: "1px solid rgba(139,92,246,0.1)" }}
            >
              <div className="pt-4">
                {/* Full Name */}
                <div className="mb-4">
                  <div
                    className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    <User size={12} style={{ color: "#a78bfa" }} />
                    Full Name
                  </div>
                  <div
                    className="px-4 py-2.5 rounded-xl text-sm text-slate-200"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(139,92,246,0.18)",
                    }}
                  >
                    {authUser?.fullName}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div
                    className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    <Mail size={12} style={{ color: "#67e8f9" }} />
                    Email Address
                  </div>
                  <div
                    className="px-4 py-2.5 rounded-xl text-sm text-slate-200"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(139,92,246,0.18)",
                    }}
                  >
                    {authUser?.email}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Account Info Card ── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(139,92,246,0.15)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider"
              style={{
                color: "rgba(255,255,255,0.4)",
                borderBottom: "1px solid rgba(139,92,246,0.12)",
                background: "rgba(124,58,237,0.06)",
              }}
            >
              Account Information
            </div>

            {[
              {
                label: "Member Since",
                value: authUser.createdAt?.split("T")[0],
              },
              {
                label: "Account Status",
                value: null,
                badge: true,
              },
              {
                label: "Last Updated",
                value: isUpdated ? "Just now" : "—",
              },
            ].map((row, i, arr) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-3 text-xs"
                style={{
                  borderBottom:
                    i < arr.length - 1
                      ? "1px solid rgba(139,92,246,0.08)"
                      : "none",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.35)" }}>
                  {row.label}
                </span>
                {row.badge ? (
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "rgba(16,185,129,0.15)",
                      color: "#34d399",
                      border: "1px solid rgba(16,185,129,0.25)",
                    }}
                  >
                    Active
                  </span>
                ) : (
                  <span className="font-semibold text-slate-200">
                    {row.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* ── Action Buttons ── */}
          <div className="flex gap-3 pb-8">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-3 rounded-xl text-xs font-semibold
                transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(139,92,246,0.2)",
                color: "rgba(255,255,255,0.45)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(124,58,237,0.15)";
                e.currentTarget.style.borderColor = "#7c3aed";
                e.currentTarget.style.color = "#a78bfa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
              }}
            >
              Cancel
            </button>

            <button
              onClick={() => {
                setIsUpdated(true);
                navigate(-1);
              }}
              disabled={isUpdatingProfile}
              className="flex-1 flex items-center justify-center gap-2
                py-3 rounded-xl text-xs font-bold text-white
                transition-all duration-200 disabled:opacity-60
                disabled:cursor-not-allowed"
              style={{
                background: isUpdated
                  ? "linear-gradient(135deg,#10b981,#06b6d4)"
                  : "linear-gradient(135deg,#7c3aed,#06b6d4)",
                boxShadow: isUpdated
                  ? "0 4px 14px rgba(16,185,129,0.4)"
                  : "0 4px 14px rgba(124,58,237,0.45)",
              }}
              onMouseEnter={(e) => {
                if (!isUpdatingProfile) {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = isUpdated
                    ? "0 6px 20px rgba(16,185,129,0.55)"
                    : "0 6px 20px rgba(124,58,237,0.6)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = isUpdated
                  ? "0 4px 14px rgba(16,185,129,0.4)"
                  : "0 4px 14px rgba(124,58,237,0.45)";
              }}
            >
              <CheckCircle size={14} />
              {isUpdatingProfile
                ? "Saving..."
                : isUpdated
                  ? "Saved! Go Back"
                  : "Done"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbDrift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, 12px); }
        }
        @keyframes barPulse {
          0%, 100% { opacity: 0.5; transform: scaleX(0.4); transform-origin: left; }
          50% { opacity: 1; transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;




