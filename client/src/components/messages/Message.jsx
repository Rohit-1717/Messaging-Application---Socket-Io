import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/girl"
            alt="Profile Image"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hey Bro!!</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        3:40
      </div>
    </div>
  );
};

export default Message;
