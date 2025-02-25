const ListGroup = ({ type = "ul", children, id = "", className = "" }) => {
  if (type === "ul")
    return (
      <ul id={id} className={`list-group ${className}`}>
        {children}
      </ul>
    );
  else
    return (
      <ol id={id} className={`list-group ${className}`}>
        {children}
      </ol>
    );
};

export default ListGroup;
