// form handling
import React from "react";

const App = () => {

const submitHandler =(e)=>{
 e.preventDefault()
 console.log("Form Submited");

}

  return (
    <div className="flex bg-black text-white text-xl h-[100vh] justify-center items-center">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-center items-center flex-col gap-3 bg-purple-500 w-[40vw] h-[80vh] rounded"
      >
        <h1 className="text-black text-3xl font-bold mb-5">Register Form</h1>
        <input type="text" placeholder="Enter your Name" />
        <input type="email" placeholder="Enter you Email" />
        <input type="tel" placeholder="Enter you Phone Number" />
        <button className="bg-green-600 rounded mt-4 text-white px-10 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
