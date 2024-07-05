"use client";

import React, { useState } from 'react';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Column from '../../../components/shared/ColumnSample';
import KanbanBoardSample from '../../../components/shared/KanbanBoardSample';

export default function Page() {
  return (
    <section className='px-8'>
      <KanbanBoardSample />
    </section>
  );
}
