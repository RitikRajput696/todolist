import Image from "next/image";

function ListItem({ children, handleDelete, i }) {
  return (
    <li className=" relative mb-2 flex justify-between rounded-md bg-white px-2 py-4">
      {children}
      <i className="absolute right-1 top-1/2 z-10 -translate-y-1/2 transform">
        <Image
          src="/delete.svg"
          height={25}
          width={25}
          alt="delete"
          onClick={() => handleDelete(i)}
        />
      </i>
    </li>
  );
}

export default ListItem;
