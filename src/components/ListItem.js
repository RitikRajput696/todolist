import Image from "next/image";
import { IconContext } from "react-icons";
import { MdDeleteForever } from "react-icons/md";

function ListItem({ children, handleDelete, i }) {
  return (
    <li className=" relative mb-2 flex justify-between rounded-md bg-white px-2 py-4 shadow-lg">
      {children}
      <i className="absolute right-1 top-1/2 z-10 -translate-y-1/2 transform">
        <IconContext.Provider
          value={{ size: "2em", className: "text-red-500" }}
        >
          <MdDeleteForever onClick={() => handleDelete(i)} />
        </IconContext.Provider>
      </i>
    </li>
  );
}

export default ListItem;
