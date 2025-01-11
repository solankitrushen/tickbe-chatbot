'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, Paperclip } from 'lucide-react'
import { InputCommandMenu } from './InputCommandMenu'

interface MessageInputProps {
  onSendMessage: (content: string) => void
  isLoading: boolean
}

export default function MessageInput({ onSendMessage, isLoading }: MessageInputProps) {
  const [message, setMessage] = useState('')
  const [showCommands, setShowCommands] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowCommands(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === '/' && !showCommands) {
      e.preventDefault()
      setShowCommands(true)
    } else if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    } else if (e.key === 'Escape' && showCommands) {
      setShowCommands(false)
    }
  }

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  const handleCommandSelect = (command: string) => {
    setMessage(command)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="p-4 bg-white border-t">
      <div className="relative " ref={inputRef}>
        {showCommands && (
          <InputCommandMenu
            open={showCommands}
            onClose={() => setShowCommands(false)}
            onSelect={handleCommandSelect}
          />
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute left-2 top-3 h-6 w-6 text-muted-foreground hover:text-foreground"
        >
          <Paperclip className="h-4 w-4" />
        </Button>
        <Textarea
          placeholder="Type / for commands or send a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-h-[56px] w-full resize-none pl-12 pr-12 focus:border-primary"
        />
        <Button
          size="icon"
          className="absolute right-2 top-3 h-6 w-6"
          onClick={handleSend}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </div>
  )
}

