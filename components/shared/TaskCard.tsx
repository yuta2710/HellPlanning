import { useState } from "react";
import { Id, Task } from "../../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Badge } from "../ui/badge"
import { darkenColor } from "../../lib/utils"
import Skeleton from "../ui/skeleton"
import { mockAvatars2 } from '../../constants'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';


interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

const TaskCard = ({ task, deleteTask, updateTask }: Props) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    // borderColor: "#9095A1"
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="taskShadow p-2.5 w-full border rounded-[6px] items-start flex flex-col gap-4 justify-start text-left hover:ring-2 hover:ring-inset hover:opacity-70 transition-all cursor-grab relative"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      {task.avatar && task.avatar !== ""
        ? <Image className="object-cover h-[250px] rounded-xl shadow-xl bg-transparent" src={task.avatar as string | StaticImport} width={250} height={250} alt="" />
        : <Skeleton className="h-[250px] w-[250px] rounded-xl" />
      }
      {/* {editMode ? (
        <textarea
          className="h-[90%] w-full resize-none border-none rounded bg-transparent text-white focus:outline-none"
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      ) : (
        <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap text-[14px] text-[#171A1F] mt-2 ">
          {task.content}
        </p>
      )} */}

      <p className="w-full flex-1 overflow-x-hidden text-[14px] text-[#171A1F] mt-2 text-balance">
        {task.content}
      </p>

      <ul className="relative grid grid-cols-4 gap-2">
        {["Test 1", "Test 2", "Test 3", "Test 4", "Test 5", "Test 6"].map((label, index) => {
          return <li key={index} className="bg-[#FDF2F2] text-[#FF0000] rounded px-2 py-1 text-xs">
            {label}
          </li>
        })}
      </ul>

      <div className="flex justify-between items-center gap-2 w-full">
        {/** ICON */}
        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-center items-center gap-[2px]">
            <Image src={'/assets/attachment.svg'} width={18} height={18} alt="Attachment" />
            <span className="text-[#9095A1] text-sm">3</span>
          </div>
          <div className="flex justify-center items-center gap-[2px]">
            <Image src={'/assets/chat.svg'} width={18} height={18} alt="Chat" />
            <span className="text-[#9095A1] text-sm">1</span>
          </div>
        </div>

        {/** AVATARS */}
        <ul className='flex justify-center items-center gap-2'>
          {mockAvatars2.map((avatar, index) => {
            return (
              <li key={avatar}>
                <Avatar style={{
                  width: 28,
                  height: 28
                }} >
                  <AvatarImage src={avatar} className='object-cover' />
                  <AvatarFallback>
                    <Skeleton className="h-28 w-28 rounded-full" />
                  </AvatarFallback>
                </Avatar>
              </li>
            )
          })}
        </ul>
      </div>

      {/* {mouseIsOver && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
          className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100"
        >
          <TrashIcon />
        </button>
      )} */}
    </div>
  );
};

export default TaskCard;
