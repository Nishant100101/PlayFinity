const Box = ({ heading, component, play }) => {
  return (
    <div>
      <div className="m-2 relative w-64 h-64 hover:shadow-current hover:shadow-md shadow-inner shadow-current  font-bold text-lg flex flex-col justify-center  rounded-2xl ">
        {/*  Heading */}
        <div
          className="text-2xl select-none flex justify-center w-full top-0 absolute font-bold text-gray-900 text-center py-4"
          style={{ textShadow: "rgb(73 71 71) 1px 1px 4px" }}
        >
          {heading}
        </div>
        {component}
        {/*   Button */}
        {play}
      </div>
    </div>
  );
};

export default Box;
