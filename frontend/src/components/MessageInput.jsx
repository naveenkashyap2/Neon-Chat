// import { useRef, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
// import { Image, Send, X } from "lucide-react";
// import toast from "react-hot-toast";

// const MessageInput = () => {
//   const [text, setText] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);
//   const fileInputRef = useRef(null);
//   const { sendMessage } = useChatStore();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file.type.startsWith("image/")) {
//       toast.error("Please select an image file");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const removeImage = () => {
//     setImagePreview(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!text.trim() && !imagePreview) return;

//     try {
//       await sendMessage({
//         text: text.trim(),
//         image: imagePreview,
//       });

//       // Clear form
//       setText("");
//       setImagePreview(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     } catch (error) {
//       console.error("Failed to send message:", error);
//     }
//   };

//   return (
//     <div className="p-4 w-full">
//       {imagePreview && (
//         <div className="mb-3 flex items-center gap-2">
//           <div className="relative">
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
//             />
//             <button
//               onClick={removeImage}
//               className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
//               flex items-center justify-center"
//               type="button"
//             >
//               <X className="size-3" />
//             </button>
//           </div>
//         </div>
//       )}

//       <form onSubmit={handleSendMessage} className="flex items-center gap-2">
//         <div className="flex-1 flex gap-2">
//           <input
//             type="text"
//             className="w-full input input-bordered rounded-lg input-sm sm:input-md"
//             placeholder="Type a message..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             ref={fileInputRef}
//             onChange={handleImageChange}
//           />

//           <button
//             type="button"
//             className={`hidden sm:flex btn btn-circle
//                      ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
//             onClick={() => fileInputRef.current?.click()}
//           >
//             <Image size={20} />
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-sm btn-circle"
//           disabled={!text.trim() && !imagePreview}
//         >
//           <Send size={22} />
//         </button>
//       </form>
//     </div>
//   );
// };
// export default MessageInput;

import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X, Smile } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    try {
      await sendMessage({ text: text.trim(), image: imagePreview });
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  const canSend = text.trim() || imagePreview;

  return (
    <div
      className="px-3 py-3 flex-shrink-0"
      style={{
        borderTop: "1px solid rgba(139,92,246,0.15)",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Image Preview */}
      {imagePreview && (
        <div
          className="flex items-center gap-3 mb-3 p-2 rounded-xl"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(139,92,246,0.2)",
          }}
        >
          <div className="relative flex-shrink-0">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-14 h-14 object-cover rounded-xl"
              style={{ border: "1px solid rgba(139,92,246,0.3)" }}
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center
                justify-center text-white"
              style={{
                background: "linear-gradient(135deg,#ef4444,#dc2626)",
                border: "1.5px solid #0a0015",
                boxShadow: "0 0 6px rgba(239,68,68,0.5)",
              }}
            >
              <X size={9} />
            </button>
          </div>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Image ready to send
          </span>
        </div>
      )}

      {/* Input Row */}
      <form onSubmit={handleSend} className="flex items-center gap-2">
        {/* Attach image */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
            transition-all duration-200"
          style={{
            background: imagePreview
              ? "rgba(16,185,129,0.15)"
              : "rgba(255,255,255,0.06)",
            border: imagePreview
              ? "1px solid rgba(16,185,129,0.4)"
              : "1px solid rgba(139,92,246,0.2)",
            color: imagePreview ? "#34d399" : "rgba(255,255,255,0.4)",
          }}
        >
          <Image size={15} />
        </button>

        {/* Emoji btn */}
        <button
          type="button"
          className="hidden sm:flex w-9 h-9 rounded-xl items-center justify-center
            flex-shrink-0 transition-all duration-200 text-slate-500 hover:text-purple-400"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(139,92,246,0.2)",
          }}
        >
          <Smile size={15} />
        </button>

        {/* Text input */}
        <input
          type="text"
          value={text}
          maxLength={500}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-xl px-4 py-2.5 text-xs outline-none transition-all duration-200
            text-slate-200 placeholder:text-slate-600"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(139,92,246,0.2)",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#7c3aed";
            e.target.style.boxShadow = "0 0 12px rgba(124,58,237,0.2)";
            e.target.style.background = "rgba(255,255,255,0.09)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(139,92,246,0.2)";
            e.target.style.boxShadow = "none";
            e.target.style.background = "rgba(255,255,255,0.07)";
          }}
        />

        {/* Send button */}
        <button
          type="submit"
          disabled={!canSend}
          className="w-9 h-9 rounded-xl flex items-center justify-center
            flex-shrink-0 transition-all duration-200"
          style={{
            background: canSend
              ? "linear-gradient(135deg,#7c3aed,#06b6d4)"
              : "rgba(255,255,255,0.06)",
            border: canSend ? "none" : "1px solid rgba(139,92,246,0.2)",
            color: canSend ? "#fff" : "rgba(255,255,255,0.2)",
            boxShadow: canSend ? "0 4px 14px rgba(124,58,237,0.45)" : "none",
            cursor: canSend ? "pointer" : "not-allowed",
            transform: canSend ? "scale(1)" : "scale(0.95)",
          }}
          onMouseEnter={(e) => {
            if (canSend) {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(124,58,237,0.6)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = canSend
              ? "scale(1)"
              : "scale(0.95)";
            e.currentTarget.style.boxShadow = canSend
              ? "0 4px 14px rgba(124,58,237,0.45)"
              : "none";
          }}
        >
          <Send size={14} />
        </button>
      </form>

      {/* Character counter */}
      {text.length > 400 && (
        <p
          className="text-right mt-1 text-xs"
          style={{
            color: text.length > 480 ? "#f87171" : "rgba(255,255,255,0.25)",
          }}
        >
          {text.length} / 500
        </p>
      )}
    </div>
  );
};

export default MessageInput;