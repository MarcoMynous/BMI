import React, { useRef, useState } from "react";

const Calculate = () => {
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");
  const [weightPounds, setWeightPounds] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightUnit, setHeightUnit] = useState("ft_in");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [update, setUpdate] = useState(false);

  const preventInvalidInput = (event) => {
    if (["e", "E", "-", "+"].includes(event.key)) {
      event.preventDefault();
    }
  };

  const handleWeight = (e) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) >= 0) {
      setWeight(value);
    }
  };

  const handleFeetChange = (e) => {
    const value = e.target.value;
    if (value === "" || parseInt(value, 10) >= 0) {
      setHeightFeet(value);
    }
  };

  const handleCmChange = (e) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) >= 0) {
      setHeightCm(value);
    }
  };

  const handleInChange = (e) => {
    const value = e.target.value;
    if (
      value === "" ||
      (parseInt(value, 10) >= 0 && parseInt(value, 10) < 12)
    ) {
      setHeightIn(value);
    }
  };

  const HandleWeightPound = (e) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) >= 0) {
      setWeightPounds(value);
    }
  };

  const calculateBMI = () => {
    if (weightUnit === "kg" && heightUnit === "ft_in") {
      setHeightCm("");
      setWeightPounds("");
      if (!weight || (!heightFeet && !heightIn)) {
        setBmi(0);
        setCategory("");
        alert("Please enter in the field");
        return;
      }
    }

    if (weightUnit === "kg" && heightUnit === "cm") {
      setHeightFeet("");
      setHeightIn("");
      setWeightPounds("");
      if (!weight || !heightCm) {
        setBmi(0);
        setCategory("");
        alert("Please enter in the field");
        return;
      }
    }
    if (weightUnit === "ibs" && heightUnit === "ft_in") {
      setHeightCm("");
      setWeight("");
      if (!weightPounds || (!heightFeet && !heightIn)) {
        setBmi(0);
        setCategory("");
        alert("Please enter in the field");
        return;
      }
    }
    if (weightUnit === "ibs" && heightUnit === "cm") {
      setHeightFeet("");
      setHeightIn("");
      setWeight("");
      if (!weightPounds || !heightCm) {
        setBmi(0);
        setCategory("");
        alert("Please enter in the field");
        return;
      }
    }

    setUpdate(true);

    const weightInKg =
      weightUnit === "ibs"
        ? parseFloat(weightPounds) * 0.453592
        : parseFloat(weight);

    const heightInMeters =
      heightUnit === "cm"
        ? parseFloat(heightCm || 0) / 100
        : (parseInt(heightFeet || 0, 10) * 12 + parseInt(heightIn || 0, 10)) *
          0.0254;

    const bmiResult = (weightInKg / heightInMeters ** 2).toFixed(1);
    setBmi(bmiResult);
    console.log(weightInKg);

    console.log(`Height in meters: ${heightInMeters.toFixed(2)}m`);
    console.log(weight);

    if (bmiResult < 18.5) setCategory("Underweight");
    else if (bmiResult >= 18.5 && bmiResult <= 24.9)
      setCategory("Normal Weight");
    else if (bmiResult >= 25 && bmiResult <= 29.9) setCategory("Overweight");
    else if (bmiResult >= 30) setCategory("Obesity");
  };

  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-500">
        Discover your BMI Score
      </h1>
      <div className="flex max-lg:flex-col mt-5">
        <div className="flex flex-col mb-5 ">
          <label className="font-semibold text-lg font-mono my-3">Weight</label>
          <div className="flex items-center border border-gray-300 rounded-md w-full">
            {weightUnit === "kg" ? (
              <input
                type="number"
                placeholder="Kg"
                value={weight}
                onChange={handleWeight}
                onKeyDown={preventInvalidInput}
                className=" px-3 py-2 w-11/12  border-none focus:outline-none text-md text-black"
              />
            ) : (
              <input
                type="number"
                placeholder="Ibs"
                value={weightPounds}
                onChange={HandleWeightPound}
                onKeyDown={preventInvalidInput}
                className="px-3 py-2 w-11/12 border-none focus:outline-none text-lg text-black"
              />
            )}

            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
              className="border-none px-3 py-2 bg-gray-100 cursor-pointer text-black text-lg focus:outline-none"
            >
              <option value="kg">Kg</option>
              <option value="ibs">Ibs</option>
            </select>
          </div>
          <label className="font-semibold text-lg font-mono my-3">Height</label>
          <div
            className={`flex items-center rounded-md ${
              heightUnit === "ft_in" ? "" : "border border-gray-300"
            }`}
          >
            {heightUnit === "ft_in" ? (
              <div className="flex flex-col justify-between">
                <input
                  type="number"
                  placeholder="feet"
                  value={heightFeet}
                  onChange={handleFeetChange}
                  onKeyDown={preventInvalidInput}
                  className=" px-2 py-2 w-5/6 mb-1 border-2 hover:border-gray-200 focus:outline-none text-md text-black rounded-lg"
                />
                <input
                  type="number"
                  placeholder="inches"
                  value={heightIn}
                  onChange={handleInChange}
                  onKeyDown={preventInvalidInput}
                  className="px-2 py-2 w-5/6 border-2  hover:border-gray-200 focus:outline-none text-md text-black rounded-lg"
                />
              </div>
            ) : (
              <input
                type="number"
                placeholder="cm"
                value={heightCm}
                onChange={handleCmChange}
                onKeyDown={preventInvalidInput}
                className="px-3 py-2 w-11/12 rounded-none border-none focus:outline-none text-md text-black"
              />
            )}
            <select
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
              className="border px-2 py-2 bg-gray-100 text-black text-lg focus:outline-none cursor-pointer rounded-lg"
            >
              <option value="ft_in">ft-in</option>
              <option value="cm">cm</option>
            </select>
          </div>
          <button
            className="mt-4 py-2 px-2 bg-blue-500 hover:bg-blue-300 w-fit place-self-center rounded-2xl text-white font-semibold"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
        </div>
        <div className="flex flex-col lg:ml-3">
          <div className="flex items-center flex-col my-3">
            <h2 className="font-semibold text-xl font-mono">BMI Result</h2>
          </div>
          <div className="flex  flex-col items-center place-self-center font-mono">
            <h2>Your BMI</h2>
            <p className="text-3xl font-semibold text-black my-3">{bmi}</p>
            <div>
              {update ? (
                <p
                  className={`text-md font-semibold ${
                    bmi < 18.5
                      ? "bg-yellow-500 text-white font-semibold py-2 px-2 rounded-full"
                      : ""
                  } ${
                    bmi >= 18.5 && bmi <= 24.9
                      ? "bg-lime-500 text-white font-semibold py-2 px-2 rounded-full"
                      : ""
                  } ${
                    bmi >= 25 && bmi <= 29.9
                      ? "bg-orange-500 text-white font-semibold py-2 px-2 rounded-full"
                      : ""
                  } 
                    ${
                      bmi >= 30
                        ? "bg-red-500 text-white font-semibold py-2 px-2 rounded-full"
                        : ""
                    }`}
                >
                  {category}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="flex border border-gray-500 my-3">
          <div className="bg-yellow-300 p-1"></div>
          <div>
            <div className=" flex items-center">
              <div className="flex flex-col px-2 py-2">
                <h1 className="text-sm font-semibold ">Less than 18.5</h1>
                <p className="text-xs mt-1 font-mono">Underweight</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border border-gray-500 my-3">
          <div className="bg-lime-300 p-1"></div>
          <div>
            <div className=" flex items-center">
              <div className="flex flex-col px-2 py-2">
                <h1 className="text-sm font-semibold">18.5 - 24.9</h1>
                <p className="text-xs mt-1 font-mono">Normal weight</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border border-gray-500 my-3">
          <div className="bg-orange-400 p-1"></div>
          <div>
            <div className=" flex items-center">
              <div className="flex flex-col px-2 py-2">
                <h1 className="text-sm font-semibold">25 - 29.9</h1>
                <p className="text-xs mt-1 font-mono">Over weight</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border border-gray-500 my-3">
          <div className="bg-red-400 p-1"></div>
          <div>
            <div className=" flex items-center">
              <div className="flex flex-col px-2 py-2">
                <h1 className="text-sm font-semibold">More than 30</h1>
                <p className="text-xs mt-1 font-mono">Obesity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
