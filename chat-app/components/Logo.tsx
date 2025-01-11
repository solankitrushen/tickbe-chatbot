import { MessageSquare } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <MessageSquare className="h-6 w-6" />
      <span className="text-xl font-semibold">Chat App</span>
    </div>
  )
}

