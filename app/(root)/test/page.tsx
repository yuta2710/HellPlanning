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
import Column from '../../../components/shared/Column';
import KanbanBoard from '../../../components/shared/KanbanBoard';

export default function Page() {
  return (
    <div className="App">
      <h1>My Tasks ✅</h1>
      <KanbanBoard />;
    </div>
  );
}
