import { Message } from "@/types";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-md p-4 rounded-lg ",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted"
        )}
      >
        <p>{message.content}</p>
      </div>
    </div>
  );
}
