import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [mydata, setMydata] = useState([]);

  const getData = async () => {
    // API call here
    const res = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    setMydata(res.data);
    console.log(mydata);
  };

  //Life Cycle Method
  useEffect(() => {
    getData() // Without clicking button this function will be called
  }, [])  // Run the effect only once when the component mounts

  return (
    <div className="p-10">
      <button
        onClick={getData}
        className="text-white font-bold bg-green-700 px-10 py-5 text-xl active:scale-90 rounded-xl"
      >
        Click me
      </button>
      <div className="bg-black text-white w-full p-5 mt-5">
        {mydata.map((elem) => {
          return (
            <div className="flex justify-center items-center mt-5 bg-slate-200 p-5 text-black">
              <img
                src={elem.download_url}
                alt="random image"
                className="w-[300px] h-[200px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
