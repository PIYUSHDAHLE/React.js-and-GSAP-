import React, { useState } from "react";

const App = () => {

  const [num, setNum] = useState(0)

  const Increment = () => {
    setNum(num + 1);
  };
  const Decrement = () => {
   
   if (num === 0) {
    setNum(num);
   }else{
     setNum(num - 1);
   }
  };


  return (
    <div className="bg-pink-200 w-full h-[100vh] flex justify-center items-center">
      <div className="box flex-col gap-5 bg-purple-400 w-[50vw] h-[30vh] border-4 border-red-400 rounded-md flex justify-center items-center">
        <h1 className="text-3xl">Count {num}</h1>

        <div className="flex gap-4">
          <button
            onClick={Increment}
            className="bg-green-700 text-xl font-bold text-white px-4 py-2 border-2 border-amber-400 rounded-2xl"
          >
            Increment
          </button>
          <button
            onClick={Decrement}
            className="bg-green-700 text-xl font-bold text-white px-4 py-2 border-2 border-amber-400 rounded-2xl"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
