import React from "react";

function InputBox({ title, setTitle }) {
  return (
    <input
      type="text"
      placeholder="Enter Your Task"
      className=" my-8 w-full rounded-lg border-[1px] border-gray-500 px-4 py-2 text-lg placeholder:font-semibold focus:border "
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      autoFocus={true}
    />
  );
}

export default InputBox;
