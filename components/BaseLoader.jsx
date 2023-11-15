const BaseLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen  flex-col ">
      <div className="animate-spin rounded-full border-t-8 border-blue-900 border-opacity-25 h-24 w-24"></div>
      <h1 className="pt-4 animate-ping font-satori text-lg font-medium bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-transparent bg-clip-text ">
        {" "}
        Loading Data...
      </h1>
    </div>
  );
};

export default BaseLoader;
