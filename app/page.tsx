"use client"

import { useState, useEffect } from "react"
import { TaskForm } from "@/components/task-form"
import { TaskList } from "@/components/task-list"
import { TaskStats } from "@/components/task-stats"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Task } from "@/types/task"
import { loadTasks, saveTasks } from "@/lib/storage"

export default function TaskManagement() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedTasks = loadTasks()
    setTasks(savedTasks)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!loading) {
      saveTasks(tasks)
    }
  }, [tasks, loading])

  const addTask = (taskData: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setTasks((prev) => [...prev, newTask])
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates, updatedAt: new Date().toISOString() } : task)),
    )
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 }
    return priorityOrder[b.priority] - priorityOrder[a.priority]
  })

  const tasksByStatus = {
    "to-do": sortedTasks.filter((task) => task.status === "to-do"),
    "in-progress": sortedTasks.filter((task) => task.status === "in-progress"),
    done: sortedTasks.filter((task) => task.status === "done"),
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading tasks...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">TaskEasy</h1>
          <p className="text-gray-600 mt-2">
            Manage your tasks efficiently with our lightweight task management system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Task Creation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Create New Task</CardTitle>
                <CardDescription>Add a new task to your workflow</CardDescription>
              </CardHeader>
              <CardContent>
                <TaskForm onSubmit={addTask} />
              </CardContent>
            </Card>

            {/* Task Statistics */}
            <div className="mt-6">
              <TaskStats tasks={tasks} />
            </div>
          </div>

          {/* Task Lists */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Tasks ({tasks.length})</TabsTrigger>
                <TabsTrigger value="to-do">To Do ({tasksByStatus["to-do"].length})</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress ({tasksByStatus["in-progress"].length})</TabsTrigger>
                <TabsTrigger value="done">Done ({tasksByStatus["done"].length})</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <TaskList tasks={sortedTasks} onUpdate={updateTask} onDelete={deleteTask} title="All Tasks" />
              </TabsContent>

              <TabsContent value="to-do" className="mt-6">
                <TaskList
                  tasks={tasksByStatus["to-do"]}
                  onUpdate={updateTask}
                  onDelete={deleteTask}
                  title="To Do Tasks"
                />
              </TabsContent>

              <TabsContent value="in-progress" className="mt-6">
                <TaskList
                  tasks={tasksByStatus["in-progress"]}
                  onUpdate={updateTask}
                  onDelete={deleteTask}
                  title="In Progress Tasks"
                />
              </TabsContent>

              <TabsContent value="done" className="mt-6">
                <TaskList
                  tasks={tasksByStatus["done"]}
                  onUpdate={updateTask}
                  onDelete={deleteTask}
                  title="Completed Tasks"
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
