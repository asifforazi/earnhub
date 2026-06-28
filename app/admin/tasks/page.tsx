"use client";

import { useState } from "react";

export default function AdminTasksPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reward, setReward] = useState(0);
  const [category, setCategory] = useState("Daily");
  const [link, setLink] = useState("");

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl bg-slate-900 p-8">

        <h1 className="mb-8 text-3xl font-bold">
          Create Task
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
          />

          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
          />

          <input
            type="number"
            placeholder="Reward"
            value={reward}
            onChange={(e) => setReward(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
          >
            <option>Daily</option>
            <option>Survey</option>
            <option>Video</option>
            <option>Offerwall</option>
            <option>App Install</option>
          </select>

          <input
            type="text"
            placeholder="Task Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
          />

          <button
            className="w-full rounded-xl bg-emerald-500 py-4 font-bold text-black"
          >
            Create Task
          </button>

        </div>

      </div>
    </main>
  );
}