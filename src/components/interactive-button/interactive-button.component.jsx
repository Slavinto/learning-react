const InteractiveButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
export default InteractiveButton;
