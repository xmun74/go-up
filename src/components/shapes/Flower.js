const Flower = ({ position, onClick, children }) => {
  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className={`relative bg-yellow-300 w-16 h-16 rounded-full border border-black`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default Flower;
