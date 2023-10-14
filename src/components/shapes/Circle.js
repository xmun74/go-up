const Circle = ({ position, onClick, children }) => {
  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className={`relative bg-pink-600 w-20 h-20 rounded-full border border-black`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default Circle;
