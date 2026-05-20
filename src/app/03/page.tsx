"use client";

import { useState } from "react";
import BackButton from "@/componets/back";

export default function page03() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<{ id: number; text: string; done: boolean }[]>([]);

  function addTodo() {
    if (!task.trim()) return;
    setTodos((t) => [...t, { id: Date.now(), text: task.trim(), done: false }]);
    setTask("");
  }

  function toggle(id: number) {
    setTodos((t) => t.map((it) => (it.id === id ? { ...it, done: !it.done } : it)));
  }

  function remove(id: number) {
    setTodos((t) => t.filter((it) => it.id !== id));
  }

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl font-semibold my-4">TODO App (Page 03)</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New task"
          className="border px-3 py-2 rounded flex-1"
        />
        <button onClick={addTodo} className="px-4 py-2 bg-blue-600 text-white rounded">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.length === 0 && <li className="text-gray-500">No tasks yet.</li>}
        {todos.map((t) => (
          <li key={t.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span className={t.done ? "line-through text-gray-500" : ""}>{t.text}</span>
            </div>
            <button onClick={() => remove(t.id)} className="text-red-500">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
