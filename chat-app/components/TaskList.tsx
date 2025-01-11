import { Task } from '@/types'
import { Button } from "@/components/ui/button"

interface TaskListProps {
  tasks: Task[]
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Button
          key={task.id}
          variant="ghost"
          className="w-full justify-start text-left font-normal"
        >
          <span className="truncate">{task.title}</span>
        </Button>
      ))}
    </div>
  )
}

