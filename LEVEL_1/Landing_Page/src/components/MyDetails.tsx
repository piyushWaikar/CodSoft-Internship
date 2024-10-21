const MyDetails = () => {
    return (
      <div className="flex items-center justify-center w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <div className="p-8 bg-white bg-opacity-20 rounded-xl shadow-lg backdrop-blur-md text-center m-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            This Website is a clone of <i onClick={()=> window.location.href = "https://www.codsoft.in/"} className="cursor-pointer underline"> CodSoft </i>
          </h1>
          <p className="text-lg md:text-xl">
            Built under the Internship program by <b onClick={()=> window.location.href = "https://www.linkedin.com/in/piyush-waikar"} className="text-yellow-300 underline cursor-pointer">Piyush W.</b>
          </p>
        </div>
      </div>
    );
  };
  
  export default MyDetails;
  