"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Search, Code, PenLine, Cloud, MessageSquare } from "lucide-react";
import { CommandMenu } from "./CommandMenu";

const conversations = [
  {
    title: "Flight Booking",
    preview: "Your flight has been booked successfully",
    time: "2m ago",
    id: "1",
  },
  {
    title: "Support Request",
    preview: "How can I download my ticket?",
    time: "1h ago",
    id: "2",
  },
  {
    title: "Schedule Meeting",
    preview: "Meeting scheduled for tomorrow at 2 PM",
    time: "3h ago",
    id: "3",
  },
];

export default function Sidebar() {
  const handleChatClick = (id: string) => {
    console.log(`Navigating to chat with ID: ${id}`);
    // You can replace this with actual navigation logic, e.g., using `router.push` if using Next.js
  };

  return (
    <div className="w-80 border-r bg-white ">
      <div className="flex items-center justify-center gap-2 py-4  ">
        <MessageSquare className="h-6 w-6" />
        <span className="text-xl font-semibold">Chat App</span>
      </div>
      <div className="p-4 space-y-4 ">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search conversations..." className="pl-8" />
        </div>
        <ScrollArea className="h-[calc(100vh-6rem)] ">
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => handleChatClick(conversation.id)}
                className="w-full cursor-pointer justify-start px-4 py-6 mb-2 rounded-lg hover:bg-gray-100"
              >
                <div className="flex flex-col items-start">
                  <span className="font-semibold">{conversation.title}</span>
                  <span className="text-sm text-muted-foreground line-clamp-1">
                    {conversation.preview}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {conversation.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <CommandMenu />
    </div>
  );
}
