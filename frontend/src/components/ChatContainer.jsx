// import { useChatStore } from "../store/useChatStore";
// import { useEffect, useRef } from "react";

// import ChatHeader from "./ChatHeader";
// import MessageInput from "./MessageInput";
// import MessageSkeleton from "./skeletons/MessageSkeleton";
// import { useAuthStore } from "../store/useAuthStore";
// import { formatMessageTime } from "../lib/utils";

// const ChatContainer = () => {
//   const {
//     messages,
//     getMessages,
//     isMessagesLoading,
//     selectedUser,
//     subscribeToMessages,
//     unsubscribeFromMessages,
//   } = useChatStore();
//   const { authUser } = useAuthStore();
//   const messageEndRef = useRef(null);

//   useEffect(() => {
//     getMessages(selectedUser._id);

//     subscribeToMessages();

//     return () => unsubscribeFromMessages();
//   }, [
//     selectedUser._id,
//     getMessages,
//     subscribeToMessages,
//     unsubscribeFromMessages,
//   ]);

//   useEffect(() => {
//     if (messageEndRef.current && messages) {
//       messageEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   if (isMessagesLoading) {
//     return (
//       <div className="flex-1 flex flex-col overflow-auto">
//         <ChatHeader />
//         <MessageSkeleton />
//         <MessageInput />
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 flex flex-col overflow-auto">
//       <ChatHeader />

//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((message) => (
//           <div
//             key={message._id}
//             className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
//             ref={messageEndRef}
//           >
//             <div className=" chat-image avatar">
//               <div className="size-10 rounded-full border">
//                 <img
//                   src={
//                     message.senderId === authUser._id
//                       ? authUser.profilePic || "/avatar.png"
//                       : selectedUser.profilePic || "/avatar.png"
//                   }
//                   alt="profile pic"
//                 />
//               </div>
//             </div>
//             <div className="chat-header mb-1">
//               <time className="text-xs opacity-50 ml-1">
//                 {formatMessageTime(message.createdAt)}
//               </time>
//             </div>
//             <div className="chat-bubble flex flex-col">
//               {message.image && (
//                 <img
//                   src={message.image}
//                   alt="Attachment"
//                   className="sm:max-w-[200px] rounded-md mb-2"
//                 />
//               )}
//               {message.text && <p>{message.text}</p>}
//             </div>
//           </div>
//         ))}
//       </div>

//       <MessageInput />
//     </div>
//   );
// };
// export default ChatContainer;
























import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-hidden">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <ChatHeader />

      {/* ── Messages area ── */}
      <div
        className="flex-1 overflow-y-auto p-3 sm:p-4 flex flex-col gap-3
          scrollbar-thin scrollbar-thumb-purple-700/30 scrollbar-track-transparent"
      >
        {messages.length === 0 && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                No messages yet — say hello! 👋
              </p>
            </div>
          </div>
        )}

        {messages.map((message, idx) => {
          const isMine = message.senderId === authUser._id;
          const prevMsg = messages[idx - 1];
          const showDateSep =
            idx === 0 ||
            new Date(message.createdAt).toDateString() !==
              new Date(prevMsg?.createdAt).toDateString();

          return (
            <div key={message._id}>
              {/* Date separator */}
              {showDateSep && (
                <div className="flex items-center gap-3 my-3">
                  <div
                    className="flex-1 h-px"
                    style={{ background: "rgba(139,92,246,0.12)" }}
                  />
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      background: "rgba(124,58,237,0.08)",
                      border: "1px solid rgba(139,92,246,0.15)",
                      fontSize: "9px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {new Date(message.createdAt).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "rgba(139,92,246,0.12)" }}
                  />
                </div>
              )}

              {/* Message row */}
              <div
                className={`flex items-end gap-2 ${isMine ? "flex-row-reverse" : "flex-row"}`}
                ref={idx === messages.length - 1 ? messageEndRef : null}
              >
                {/* Avatar */}
                <div className="flex-shrink-0 mb-1">
                  <img
                    src={
                      isMine
                        ? authUser.profilePic || "/avatar.png"
                        : selectedUser.profilePic || "/avatar.png"
                    }
                    alt="avatar"
                    className="w-7 h-7 rounded-full object-cover"
                    style={{
                      border: "1.5px solid rgba(139,92,246,0.35)",
                      boxShadow: isMine
                        ? "0 0 8px rgba(124,58,237,0.3)"
                        : "0 0 8px rgba(6,182,212,0.2)",
                    }}
                  />
                </div>

                {/* Bubble + time */}
                <div
                  className={`flex flex-col gap-1 max-w-[70%] sm:max-w-[60%]
                    ${isMine ? "items-end" : "items-start"}`}
                >
                  {/* Image attachment */}
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="rounded-xl object-cover"
                      style={{
                        maxWidth: "200px",
                        border: "1px solid rgba(139,92,246,0.25)",
                        boxShadow: isMine
                          ? "0 4px 14px rgba(124,58,237,0.25)"
                          : "0 4px 14px rgba(0,0,0,0.3)",
                      }}
                    />
                  )}

                  {/* Text bubble */}
                  {message.text && (
                    <div
                      className="px-3 py-2 text-xs leading-relaxed"
                      style={
                        isMine
                          ? {
                              background:
                                "linear-gradient(135deg,#7c3aed,#6d28d9)",
                              color: "#fff",
                              borderRadius: "14px 14px 4px 14px",
                              boxShadow: "0 4px 14px rgba(124,58,237,0.35)",
                            }
                          : {
                              background: "rgba(255,255,255,0.08)",
                              border: "1px solid rgba(139,92,246,0.2)",
                              color: "#e2e8f0",
                              borderRadius: "14px 14px 14px 4px",
                            }
                      }
                    >
                      {message.text}
                    </div>
                  )}

                  {/* Timestamp + read receipt */}
                  <div className="flex items-center gap-1 px-1">
                    <span
                      style={{
                        fontSize: "9px",
                        color: "rgba(255,255,255,0.28)",
                      }}
                    >
                      {formatMessageTime(message.createdAt)}
                    </span>
                    {isMine && (
                      <span style={{ fontSize: "9px", color: "#a78bfa" }}>
                        ✓✓
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
