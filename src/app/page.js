"use client";
import { useState } from "react";
import Image from "next/image";
import ListItem from "@/components/ListItem";
import InputBox from "@/components/InputBox";

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
    if (title != "") {
      setTask([...task, title]);
    }
    setTitle("");
  }

  if (task.length > 0) {
    renderTask = task.map((t, i) => (
      <ListItem key={i}>
        {t}
        <i className="absolute right-1 top-1/2 z-10 -translate-y-1/2 transform">
          <Image
            src="/delete.svg"
            height={25}
            width={25}
            alt="delete"
            onClick={() => handleDelete(i)}
          />
        </i>
      </ListItem>
    ));
  } else {
    renderTask = <p>No task available</p>;
  }

  return (
    <main className="flex min-h-screen justify-center ">
      <form onSubmit={handleSubmit} className="mx-1 w-96">
        <label className="relative">
          <InputBox title={title} setTitle={(data) => setTitle(data)} />
          <i className="absolute right-1 top-1/2 z-10 -translate-y-1/2 transform">
            <Image src="/add.svg" height={25} width={25} alt="add" />
          </i>
        </label>
        <ul className="rounded-lg bg-gray-200 p-4">{renderTask}</ul>
      </form>
    </main>
  );
}
