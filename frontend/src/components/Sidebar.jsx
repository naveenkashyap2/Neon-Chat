// import { useEffect, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
// import { useAuthStore } from "../store/useAuthStore";
// import SidebarSkeleton from "./skeletons/SidebarSkeleton";
// import { Users } from "lucide-react";

// const Sidebar = () => {
//   const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
//     useChatStore();

//   const { onlineUsers } = useAuthStore();
//   const [showOnlineOnly, setShowOnlineOnly] = useState(false);

//   useEffect(() => {
//     getUsers();
//   }, [getUsers]);

//   const filteredUsers = showOnlineOnly
//     ? users.filter((user) => onlineUsers.includes(user._id))
//     : users;

//   if (isUsersLoading) return <SidebarSkeleton />;

//   return (
//     <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
//       <div className="border-b border-base-300 w-full p-5">
//         <div className="flex items-center gap-2">
//           <Users className="size-6" />
//           <span className="font-medium hidden lg:block">Contacts</span>
//         </div>
//         {/* TODO: Online filter toggle */}
//         <div className="mt-3 hidden lg:flex items-center gap-2">
//           <label className="cursor-pointer flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={showOnlineOnly}
//               onChange={(e) => setShowOnlineOnly(e.target.checked)}
//               className="checkbox checkbox-sm"
//             />
//             <span className="text-sm">Show online only</span>
//           </label>
//           <span className="text-xs text-zinc-500">
//             ({onlineUsers.length - 1} online)
//           </span>
//         </div>
//       </div>

//       <div className="overflow-y-auto w-full py-3">
//         {filteredUsers.map((user) => (
//           <button
//             key={user._id}
//             onClick={() => setSelectedUser(user)}
//             className={`
//               w-full p-3 flex items-center gap-3
//               hover:bg-base-300 transition-colors
//               ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
//             `}
//           >
//             <div className="relative mx-auto lg:mx-0">
//               <img
//                 src={user.profilePic || "/avatar.png"}
//                 alt={user.name}
//                 className="size-12 object-cover rounded-full"
//               />
//               {onlineUsers.includes(user._id) && (
//                 <span
//                   className="absolute bottom-0 right-0 size-3 bg-green-500 
//                   rounded-full ring-2 ring-zinc-900"
//                 />
//               )}
//             </div>

//             {/* User info - only visible on larger screens */}
//             <div className="hidden lg:block text-left min-w-0">
//               <div className="font-medium truncate">{user.fullName}</div>
//               <div className="text-sm text-zinc-400">
//                 {onlineUsers.includes(user._id) ? "Online" : "Offline"}
//               </div>
//             </div>
//           </button>
//         ))}

//         {filteredUsers.length === 0 && (
//           <div className="text-center text-zinc-500 py-4">No online users</div>
//         )}
//       </div>
//     </aside>
//   );
// };
// export default Sidebar;

















import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users, Search } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => { getUsers(); }, [getUsers]);

  const filteredUsers = users
    .filter((user) => showOnlineOnly ? onlineUsers.includes(user._id) : true)
    .filter((user) =>
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside
      className="h-full flex flex-col transition-all duration-300
        w-16 sm:w-20 lg:w-72 flex-shrink-0"
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRight: "1px solid rgba(139,92,246,0.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* ── Header ── */}
      <div
        className="p-3 lg:p-4 flex-shrink-0"
        style={{ borderBottom: "1px solid rgba(139,92,246,0.15)" }}
      >
        {/* Title */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg,rgba(124,58,237,.25),rgba(6,182,212,.25))",
              border: "1px solid rgba(139,92,246,.3)",
            }}
          >
            <Users size={14} style={{ color: "#a78bfa" }} />
          </div>
          <span className="hidden lg:block font-bold text-sm text-slate-200 tracking-wide">
            Contacts
          </span>
          <span
            className="hidden lg:flex ml-auto text-xs px-2 py-0.5 rounded-full font-semibold"
            style={{
              background: "rgba(16,185,129,0.15)",
              color: "#34d399",
              border: "1px solid rgba(16,185,129,0.25)",
            }}
          >
            {onlineUsers.length - 1} online
          </span>
        </div>

        {/* Search — lg only */}
        <div
          className="hidden lg:flex items-center gap-2 rounded-xl px-3 py-2 mb-3
            transition-all duration-200 focus-within:shadow-[0_0_10px_rgba(124,58,237,.25)]"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(139,92,246,0.2)",
          }}
          onFocus={(e) =>
            e.currentTarget.style.borderColor = "#7c3aed"
          }
          onBlur={(e) =>
            e.currentTarget.style.borderColor = "rgba(139,92,246,0.2)"
          }
        >
          <Search size={12} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-xs w-full
              text-slate-200 placeholder:text-slate-500"
          />
        </div>

        {/* Online-only toggle — lg only */}
        <div
          className="hidden lg:flex items-center gap-2 rounded-lg px-3 py-2"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(139,92,246,0.15)",
          }}
        >
          <label className="flex items-center gap-2 cursor-pointer flex-1">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
              />
              <div
                className="w-7 h-4 rounded-full transition-all duration-300 relative"
                style={{
                  background: showOnlineOnly
                    ? "linear-gradient(90deg,#7c3aed,#06b6d4)"
                    : "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  boxShadow: showOnlineOnly ? "0 0 8px rgba(124,58,237,0.4)" : "none",
                }}
              >
                <span
                  className="absolute top-0.5 w-3 h-3 rounded-full bg-white shadow
                    transition-transform duration-300"
                  style={{
                    left: "2px",
                    transform: showOnlineOnly ? "translateX(12px)" : "translateX(0)",
                  }}
                />
              </div>
            </div>
            <span className="text-xs text-slate-400 select-none">Online only</span>
          </label>
        </div>
      </div>

      {/* ── Contact List ── */}
      <div className="flex-1 overflow-y-auto py-2 scrollbar-thin
        scrollbar-thumb-purple-700/40 scrollbar-track-transparent">
        {filteredUsers.map((user) => {
          const isOnline = onlineUsers.includes(user._id);
          const isSelected = selectedUser?._id === user._id;

          return (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className="w-full flex items-center gap-3 px-3 py-2.5
                transition-all duration-200 group relative"
              style={{
                background: isSelected ? "rgba(124,58,237,0.15)" : "transparent",
                borderLeft: isSelected
                  ? "2px solid #7c3aed"
                  : "2px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!isSelected)
                  e.currentTarget.style.background = "rgba(124,58,237,0.08)";
              }}
              onMouseLeave={(e) => {
                if (!isSelected)
                  e.currentTarget.style.background = "transparent";
              }}
            >
              {/* Avatar */}
              <div className="relative mx-auto lg:mx-0 flex-shrink-0">
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.fullName}
                  className="w-9 h-9 rounded-full object-cover"
                  style={{
                    border: isSelected
                      ? "2px solid rgba(124,58,237,0.6)"
                      : "2px solid rgba(255,255,255,0.08)",
                    boxShadow: isSelected
                      ? "0 0 10px rgba(124,58,237,0.35)"
                      : "none",
                  }}
                />
                {isOnline && (
                  <span
                    className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full
                      bg-emerald-400"
                    style={{
                      border: "1.5px solid #0a0015",
                      boxShadow: "0 0 5px #10b981",
                    }}
                  />
                )}
              </div>

              {/* Info — lg only */}
              <div className="hidden lg:flex flex-col flex-1 min-w-0 text-left">
                <span className="text-xs font-semibold text-slate-200 truncate">
                  {user.fullName}
                </span>
                <span
                  className="text-xs mt-0.5"
                  style={{ color: isOnline ? "#34d399" : "rgba(255,255,255,0.3)" }}
                >
                  {isOnline ? "● Online" : "○ Offline"}
                </span>
              </div>

              {/* Glow effect on selected */}
              {isSelected && (
                <div
                  className="absolute left-0 top-1/4 h-1/2 w-0.5 rounded-r"
                  style={{
                    background: "linear-gradient(180deg,#7c3aed,#06b6d4)",
                    boxShadow: "0 0 6px #7c3aed",
                  }}
                />
              )}
            </button>
          );
        })}

        {filteredUsers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 gap-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
            >
              <Users size={16} style={{ color: "#7c3aed" }} />
            </div>
            <p className="text-xs text-slate-500 hidden lg:block">
              {showOnlineOnly ? "No users online" : "No contacts found"}
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

