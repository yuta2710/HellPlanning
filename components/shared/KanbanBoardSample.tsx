// import PlusIcon from "../icons/PlusIcon";
import { useMemo, useState } from "react";
import { Column, Id, Task } from "../../types";
import ColumnSample from "./ColumnSample";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCardSample from "./TaskCardSample";
import React from "react";
import { Button } from "../ui/button"

const defaultCols: Column[] = [
  {
    id: "notReady",
    title: "Not Ready",
  },
  {
    id: "todo",
    title: "To Do",
  },
  {
    id: "inProgress",
    title: "In Progress",
  },
  {
    id: "completed",
    title: "Completed",
  },
];

const defaultTasks: Task[] = [
  {
    id: "1",
    columnId: "notReady",
    content: "List admin APIs for dashboard",
    avatar: "/assets/task-avatar-1.png"
  },
  {
    id: "2",
    columnId: "notReady",
    content:
      "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation. ",
  },
  {
    id: "3",
    columnId: "todo",
    content: "Conduct security testing",
    avatar: "/assets/task-avatar-2.png"
  },
  {
    id: "4",
    columnId: "todo",
    content: "Analyze competitors",
  },
  {
    id: "5",
    columnId: "inProgress",
    content: "Create UI kit documentation",
  },
  {
    id: "6",
    columnId: "inProgress",
    content: "Dev meeting",
    avatar: "/assets/task-avatar-3.png"
  },
  {
    id: "7",
    columnId: "notReady",
    content: "Optimize application performance",
  },
  {
    id: "8",
    columnId: "notReady",
    content: "Implement data validation",
  },
  {
    id: "9",
    columnId: "notReady",
    content: "Design database schema",
  },
  {
    id: "10",
    columnId: "notReady",
    content: "Integrate SSL web certificates into workflow",
  },
  {
    id: "11",
    columnId: "todo",
    content: "Implement error logging and monitoring",
  },
  {
    id: "12",
    columnId: "todo",
    content: "Design and implement responsive UI",
  },
  {
    id: "13",
    columnId: "completed",
    content: "Develop Search Functionality",
    avatar: "/assets/task-avatar-2.png"
  },
  {
    id: "14",
    columnId: "completed",
    content: "Design Mobile App UI",
    avatar: "/assets/avatar.jpg"
  },
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>(defaultCols);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  return (
    <div className="mt-8 flex justify-start items-start w-full overflow-x-auto overflow-y-hidden relative">
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="m-auto flex justify-start items-start gap-4 w-full">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnSample
                  key={col.id}
                  column={col}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                />
              ))}
            </SortableContext>
          </div>

          <Button
            onClick={() => {
              createNewColumn();
            }}
            reststyle={'px-4 py-2 rounded-[6px] text-sm hover:scale-[1.05] transition-all'}
            bgcolor='115467'
            text={{ color: 'text-white', content: '+ Add Task' }} />
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnSample
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.id
                )}
              />
            )}
            {activeTask && (
              <TaskCardSample
                task={activeTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )}
          </DragOverlay>,
          document.body as HTMLElement
        )}
      </DndContext>
    </div>
  );

  function createTask(columnId: Id) {
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: `Task ${tasks.length + 1}`,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: Id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function updateTask(id: Id, content: string) {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });

    setTasks(newTasks);
  }

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);

    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
  }

  function updateColumn(id: Id, title: string) {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });

    setColumns(newColumns);
  }

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === "Column";
    if (!isActiveAColumn) return;

    console.log("DRAG END");

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
          // Fix introduced after video recording
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].columnId = overId;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }
}

function generateId() {
  /* Generate a random number between 0 and 10000 */
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;