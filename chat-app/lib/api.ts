import { Task, Message } from '@/types'

// Mock data
const mockTasks: Task[] = [
  { id: '1', title: 'Implement login functionality', completed: false },
  { id: '2', title: 'Design user dashboard', completed: true },
  { id: '3', title: 'Fix pagination bug', completed: false },
  { id: '4', title: 'Update API documentation', completed: false },
  { id: '5', title: 'Optimize database queries', completed: true },
]

const mockMessages: Message[] = [
  { id: '1', content: 'Hello! How can I help you today?', sender: 'bot', timestamp: new Date() },
  { id: '2', content: 'I need help with my tasks.', sender: 'user', timestamp: new Date() },
  { id: '3', content: 'Sure, I can help you with that. What specific task do you need assistance with?', sender: 'bot', timestamp: new Date() },
]

// Mock API functions
export async function fetchTasks(): Promise<Task[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockTasks
}

export async function fetchMessages(): Promise<Message[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockMessages
}

export async function sendMessage(content: string): Promise<Message> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  const newMessage: Message = {
    id: Date.now().toString(),
    content,
    sender: 'user',
    timestamp: new Date(),
  }
  mockMessages.push(newMessage)
  return newMessage
}

