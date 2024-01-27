function ListItem({ children }) {
  return (
    <li className="mb-2 flex justify-between rounded-md bg-white px-2 py-2">
      {children}
    </li>
  );
}

export default ListItem;
