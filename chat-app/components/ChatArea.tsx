import { ScrollArea } from "@/components/ui/scroll-area";
import MessageInput from "./MessageInput";
import { Message } from "@/types";

interface ChatAreaProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  isLoading: boolean;
}

export default function ChatArea({
  messages,
  onSendMessage,
  isLoading,
}: ChatAreaProps) {
  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[100%]  rounded-lg px-4 py-2 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <MessageInput onSendMessage={onSendMessage} isLoading={isLoading} />
    </div>
  );
}
