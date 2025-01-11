"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";

export default function ChatApp() {
  const [messages, setMessages] = useState<{ content: string; role: string }[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { content, role: "user" }]);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setMessages((prev) => [
      ...prev,
      {
        content: `You said: "${content}". How can I help you further?`,
        role: "assistant",
      },
    ]);
    setIsLoading(false);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col relative">
        {messages.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-center leading-loose  ">
            Our hackathon project offers a seamless AI-powered chatbot solution
            built with Next.js and Vercel's AI SDK.<br></br> Designed to tackle
            real-world challenges, it provides efficient, responsive
            interactions tailored to user needs <br></br> ensuring a streamlined
            and engaging experience.{" "}
          </div>
        )}
        <ChatArea
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
