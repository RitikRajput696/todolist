function ListItem({ children }) {
  return (
    <li className=" relative mb-2 flex justify-between rounded-md bg-white px-2 py-4">
      {children}
    </li>
  );
}

export default ListItem;
