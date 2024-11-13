// Two way binding
import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");

const submitHandler =(e)=>{
 e.preventDefault()
 console.log("Form Submited");
 console.log("Username:", username);
 console.log("Email:", email);
 console.log("Phone No:", phoneno);
 setUsername("");
 setEmail("");
 setPhoneno("");
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
        <input onChange={ (e)=> setUsername(e.target.value)} value={username} type="text" placeholder="Enter your Name" />
        <input onChange={ (e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Enter you Email" />
        <input onChange={ (e)=> setPhoneno(e.target.value)} value={phoneno} type="tel" placeholder="Enter you Phone Number" />
        <button className="bg-green-600 rounded mt-4 text-white px-10 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
