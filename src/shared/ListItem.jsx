const ListItem = ({ children, key = "", id = "", className = "", onClick }) => {
  return (
    <li
      key={key}
      id={id}
      className={`list-group-item ${className}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default ListItem;
