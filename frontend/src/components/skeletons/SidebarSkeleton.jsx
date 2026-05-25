// import { Users } from "lucide-react";

// const SidebarSkeleton = () => {
//   // Create 8 skeleton items
//   const skeletonContacts = Array(8).fill(null);

//   return (
//     <aside
//       className="h-full w-20 lg:w-72 border-r border-base-300
//     flex flex-col transition-all duration-200"
//     >
//       {/* Header */}
//       <div className="border-b border-base-300 w-full p-5">
//         <div className="flex items-center gap-2">
//           <Users className="w-6 h-6" />
//           <span className="font-medium hidden lg:block">Contacts</span>
//         </div>
//       </div>

//       {/* Skeleton Contacts */}
//       <div className="overflow-y-auto w-full py-3">
//         {skeletonContacts.map((_, idx) => (
//           <div key={idx} className="w-full p-3 flex items-center gap-3">
//             {/* Avatar skeleton */}
//             <div className="relative mx-auto lg:mx-0">
//               <div className="skeleton size-12 rounded-full" />
//             </div>

//             {/* User info skeleton - only visible on larger screens */}
//             <div className="hidden lg:block text-left min-w-0 flex-1">
//               <div className="skeleton h-4 w-32 mb-2" />
//               <div className="skeleton h-3 w-16" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default SidebarSkeleton;







import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

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
        {/* Title row */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(139,92,246,0.25)",
            }}
          >
            <Users size={14} style={{ color: "#a78bfa" }} />
          </div>
          <div
            className="hidden lg:block sk-bar"
            style={{ width: 80, height: 12 }}
          />
        </div>

        {/* Search skeleton — lg only */}
        <div
          className="hidden lg:block sk-bar mb-3"
          style={{ height: 34, borderRadius: 10 }}
        />

        {/* Toggle skeleton — lg only */}
        <div
          className="hidden lg:block sk-bar"
          style={{ height: 28, borderRadius: 8 }}
        />
      </div>

      {/* ── Contact skeletons ── */}
      <div className="flex-1 overflow-hidden py-2">
        {skeletonContacts.map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-3 py-2.5"
            style={{ opacity: 1 - idx * 0.1 }}
          >
            {/* Avatar */}
            <div
              className="sk-circle flex-shrink-0 mx-auto lg:mx-0"
              style={{ width: 36, height: 36 }}
            />

            {/* Info — lg only */}
            <div className="hidden lg:flex flex-col gap-1.5 flex-1 min-w-0">
              <div
                className="sk-bar"
                style={{ width: `${55 + (idx % 4) * 15}%`, height: 11 }}
              />
              <div
                className="sk-bar"
                style={{ width: `${30 + (idx % 3) * 10}%`, height: 9 }}
              />
            </div>

            {/* Meta — lg only */}
            <div className="hidden lg:flex flex-col items-end gap-1.5">
              <div className="sk-bar" style={{ width: 28, height: 9 }} />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .sk-bar {
          border-radius: 6px;
          background: linear-gradient(
            90deg,
            rgba(139,92,246,0.08) 25%,
            rgba(139,92,246,0.18) 50%,
            rgba(139,92,246,0.08) 75%
          );
          background-size: 800px 100%;
          animation: skShimmer 1.8s ease-in-out infinite;
        }
        .sk-circle {
          border-radius: 50%;
          background: linear-gradient(
            90deg,
            rgba(139,92,246,0.08) 25%,
            rgba(139,92,246,0.18) 50%,
            rgba(139,92,246,0.08) 75%
          );
          background-size: 800px 100%;
          animation: skShimmer 1.8s ease-in-out infinite;
        }
        @keyframes skShimmer {
          0%   { background-position: -400px 0; }
          100% { background-position:  400px 0; }
        }
      `}</style>
    </aside>
  );
};

export default SidebarSkeleton;