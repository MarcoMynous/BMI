import React from "react";
import Calculate from "./Components/Calculate";
import Introduction from "./Components/Introduction";
// import todo_icon from "../assets/icon.png";

const App = () => {
  return (
    <div className="p-6">
      <div>
        {/* <img src={todo_icon} alt="" /> */}
        <h1 className="my-5 text-3xl font-semibold place-self-center">
          BMI Calculator
        </h1>
      </div>
      <div className="border border-gray-200 py-4 px-4 shadow mb-8 max-w-[650px] place-self-center">
        <Calculate />
      </div>
      <Introduction />
    </div>
  );
};

export default App;
