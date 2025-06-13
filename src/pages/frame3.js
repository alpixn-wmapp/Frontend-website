import React from "react";

const Frame3 = () => {
  return (
    <>
      <div className="bg-gray-800 h-screen w-screen ">
        <div className=" h-10  bg-gray-900">
          <h1 className="text-white">header</h1>
        </div>


        <div className="bg-gray-800">

          <div className="m-8 ml-20 flex flex-row  ">
            
        <div className="w-1/4 h-[500px] border-2 border-white bg-gray-900">
  <div className="gap gap-2 flex flex-col  h-[375px]">
    <div className="flex h-10 flex-col ">
      <h1 className="text-white text-center">Logo</h1>


    </div>


  <div className=" flex flex-col gap gap-4  ">
      <button className=" bg-gray-900 pl-8 hover:text-blue-400 text-left text-white text-sm rounded">App Type</button>
    <button className=" bg-gray-900 pl-8 hover:text-blue-400 text-left text-white text-sm rounded">Feature</button>
    <button className=" bg-gray-900 pl-8 hover:text-blue-400 text-left text-white text-sm rounded">UI Components</button>
    <button className=" bg-gray-900 pl-8 hover:text-blue-400 text-left text-white text-sm rounded">Logic & Workflow</button>
    <button className=" bg-gray-900 pl-8 hover:text-blue-400 text-left text-white text-sm rounded">Export</button>

  </div> 
  
  </div>
</div>

           <div className="w-full border-2 border-blue-400 h-[500px] bg-gray-200">
            right input
          </div>


          </div>
          
        </div>
      </div>
    </>
  );
};

export default Frame3;
