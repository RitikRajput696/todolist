"use client";
import { useState } from "react";
import Image from "next/image";
import ListItem from "@/components/ListItem";

export default function Home() {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([]);

  let renderTask;
  function handleDelete(i) {
    let copyTask = [...task];
    copyTask.splice(i, 1);
    setTask(copyTask);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTask([...task, title]);
    setTitle("");
  }

  if (task.length > 0) {
    renderTask = task.map((t, i) => (
      <ListItem key={i}>
        {t}
        <Image
          src="/delete.svg"
          height={25}
          width={25}
          alt="delete"
          onClick={() => handleDelete(i)}
        />
      </ListItem>
    ));
  } else {
    renderTask = <p>No task available</p>;
  }

  return (
    <main className="flex min-h-screen justify-center ">
      <form onSubmit={handleSubmit}>
        <label className="relative">
          <input
            type="text"
            placeholder="Enter Your Task"
            className=" my-8 rounded-lg border-[1px] border-gray-500 px-4 py-2 font-semibold focus:border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <i className="absolute right-1 top-1/2 z-10 -translate-y-1/2 transform">
            <Image src="/add.svg" height={25} width={25} alt="add" />
          </i>
        </label>
        <ul className="rounded-lg bg-gray-300 p-4">{renderTask}</ul>
      </form>
    </main>
  );
}
