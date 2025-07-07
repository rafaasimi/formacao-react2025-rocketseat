import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import { useState } from "react";

export function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [isDeletingTask, setIsDeletingTask] = useState(false);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatingTask(true);
    await delay(1000);

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task
      )
    );

    setIsUpdatingTask(false);
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: TaskState.Created, concluded } : task
      )
    );

    sortTaskByStatus();
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);
    await delay(1000);
    setTasks(tasks.filter((task) => task.id !== id));
    setIsDeletingTask(false);
  }

  function sortTaskByStatus() {
    setTasks((prevTask) => {
      if (!prevTask) {
        return;
      }

      return prevTask.sort((taskA, taskB) => {
        const concludedA = taskA.concluded ?? false;
        const concludedB = taskB.concluded ?? false;

        return Number(concludedA) - Number(concludedB);
      });
    });
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
}
