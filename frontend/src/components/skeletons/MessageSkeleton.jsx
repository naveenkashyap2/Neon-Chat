// const MessageSkeleton = () => {
//   // Create an array of 6 items for skeleton messages
//   const skeletonMessages = Array(6).fill(null);

//   return (
//     <div className="flex-1 overflow-y-auto p-4 space-y-4">
//       {skeletonMessages.map((_, idx) => (
//         <div
//           key={idx}
//           className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}
//         >
//           <div className="chat-image avatar">
//             <div className="size-10 rounded-full">
//               <div className="skeleton w-full h-full rounded-full" />
//             </div>
//           </div>

//           <div className="chat-header mb-1">
//             <div className="skeleton h-4 w-16" />
//           </div>

//           <div className="chat-bubble bg-transparent p-0">
//             <div className="skeleton h-16 w-[200px]" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MessageSkeleton;










const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  // Alternate widths for natural feel
  const widths = [180, 220, 150, 200, 170, 210];
  const heights = [52, 64, 44, 56, 44, 60];

  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-4 flex flex-col gap-4">
      {skeletonMessages.map((_, idx) => {
        const isMine = idx % 2 !== 0;

        return (
          <div
            key={idx}
            className={`flex items-end gap-2 ${isMine ? "flex-row-reverse" : "flex-row"}`}
            style={{ opacity: 1 - idx * 0.08 }}
          >
            {/* Avatar */}
            <div
              className="sk-circle flex-shrink-0"
              style={{ width: 28, height: 28 }}
            />

            {/* Bubble + time */}
            <div
              className={`flex flex-col gap-1.5
                ${isMine ? "items-end" : "items-start"}`}
            >
              {/* Timestamp */}
              <div className="sk-bar" style={{ width: 44, height: 9 }} />

              {/* Bubble */}
              <div
                className="sk-bar"
                style={{
                  width: widths[idx],
                  height: heights[idx],
                  borderRadius: isMine
                    ? "14px 14px 4px 14px"
                    : "14px 14px 14px 4px",
                }}
              />
            </div>
          </div>
        );
      })}

      <style>{`
        .sk-bar {
          background: linear-gradient(
            90deg,
            rgba(139,92,246,0.08) 25%,
            rgba(139,92,246,0.18) 50%,
            rgba(139,92,246,0.08) 75%
          );
          background-size: 800px 100%;
          animation: skShimmer 1.8s ease-in-out infinite;
          border-radius: 6px;
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
    </div>
  );
};

export default MessageSkeleton;
