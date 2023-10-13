const Bear = ({ position, onClick, children }) => {
  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className={`relative bg-[#F37613] w-20 h-20 rounded-full border border-black`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default Bear;
