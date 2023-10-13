const House = ({ onClick }) => {
  return (
    <button
      className={`absolute bottom-0 left-1/3 flex justify-center items-center`}
      onClick={onClick}
    >
      <div className={`w-80 h-64 bg-gray-700`}>집</div>
    </button>
  );
};
export default House;
