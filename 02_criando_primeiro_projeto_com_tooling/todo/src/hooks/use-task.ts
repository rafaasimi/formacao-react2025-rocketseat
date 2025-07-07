import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

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

  function updateTask(id: string, payload: { title: Task["title"] }) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task
      )
    );
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: TaskState.Created, concluded } : task
      )
    );

    sortTaskByStatus();
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
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
  };
}
