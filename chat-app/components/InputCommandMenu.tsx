"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Download,
  Headphones,
  Plane,
  Settings,
  ShoppingCart,
  Ticket,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

interface InputCommandMenuProps {
  open: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
  className?: string;
}

const suggestions = [
  {
    group: "Quick Actions",
    items: [
      {
        icon: Headphones,
        name: "How can I assist you today?",
        value: "assist",
      },
      {
        icon: Plane,
        name: "Book a flight ticket",
        value: "flight",
      },
      {
        icon: Ticket,
        name: "Download ticket",
        value: "download",
      },
      {
        icon: ShoppingCart,
        name: "View cart items",
        value: "cart",
      },
    ],
  },
  {
    group: "Other Options",
    items: [
      {
        icon: Calendar,
        name: "Schedule a meeting",
        value: "schedule",
      },
      {
        icon: Calculator,
        name: "Calculate price",
        value: "calculate",
      },
      {
        icon: User,
        name: "View profile",
        value: "profile",
      },
      {
        icon: Settings,
        name: "Open settings",
        value: "settings",
      },
    ],
  },
];

export function InputCommandMenu({
  open,
  onClose,
  onSelect,
  className,
}: InputCommandMenuProps) {
  return (
    <Command
      className={cn(
        "absolute bottom-full left-0 right-0 mb-2 rounded-lg border bg-white shadow-md min-h-[300px]", // Adjust height here
        className
      )}
    >
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {suggestions.map((group) => (
          <CommandGroup key={group.group} heading={group.group}>
            {group.items.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={() => {
                  onSelect(item.name);
                  onClose();
                }}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );
}
