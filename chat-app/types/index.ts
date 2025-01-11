export interface Task {
  id: string
  title: string
  completed: boolean
}

export interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

