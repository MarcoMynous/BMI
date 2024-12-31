import React from "react";

const Introduction = () => {
  return (
    <div>
      <h1 className="my-5 text-xl font-semibold place-self-center">
        Understanding Body Mass Index (BMI) and how to calculate it
      </h1>
      <div className="max-w-[650px] place-self-center border border-gray-200 py-4 px-5 pb-7 shadow rounded-3xl mb-6">
        <h1 className="mb-2 text-lg font-semibold">What is BMI?</h1>
        <p>
          Body Mass Index (BMI) is a measurement of a person's leanness or
          corpulence based on their height and weight, and is intended to
          quantify tissue mass. It is widely used as a general indicator of
          whether a person has a healthy body weight for their height.
          Specifically, the value obtained from the calculation of BMI is used
          to categorize whether a person is underweight, normal weight,
          overweight, or obese depending on what range the value falls between.
          These ranges of BMI vary based on factors such as region and age.
          Being overweight or underweight can have significant health effects,
          so while BMI is an imperfect measure of healthy body weight, it is a
          useful indicator of whether any additional testing or action is
          required.
        </p>
        <div className="my-5">
          <h1 className="mb-2 text-lg font-semibold">Who is BMI for?</h1>
          <p>
            The BMI calculator applies to most adults 18-65 years old. It is
            less accurate for:
          </p>
          <ol className="list-disc ml-7">
            <li>Muscle Builders</li>
            <li>Long-distance athletes</li>
            <li>Pregnant individuals</li>
            <li>Young children</li>
            <li>People with a physical disability</li>
            <li>People of certain ethnicities</li>
          </ol>
        </div>
        <div className="">
          <div className="flex border border-gray-500 my-3 rounded-r-xl">
            <div className="bg-yellow-300 p-1"></div>
            <div>
              <div className=" flex items-center py-2">
                <div className="flex flex-col px-2 py-2 w-36">
                  <h1 className="text-sm font-semibold">Less than 18.5</h1>
                  <p className="text-xs">Underweight</p>
                </div>
                <div className="border-l-2 border-gray-300 px-3">
                  <p className="text-sm py-2">
                    This can indicate malnutrition or an underlying health
                    condition that requires attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border border-gray-500 my-3 rounded-r-xl">
            <div className="bg-lime-300 p-1"></div>
            <div>
              <div className="flex items-center">
                <div className="flex flex-col px-2 py-2">
                  <h1 className="text-sm font-semibold">18.5 - 24.9</h1>
                  <p className="text-xs">Normal Weight</p>
                </div>
                <div className="border-l-2 border-gray-300 px-3">
                  <p className="text-sm py-2">
                    This range is considered healthy for most people.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border border-gray-500 my-3 rounded-r-xl">
            <div className="bg-orange-300 p-1"></div>
            <div className="flex">
              <div className=" flex items-center py-2">
                <div className="flex flex-col px-2 w-32">
                  <h1 className="text-sm font-semibold">25 - 29.9</h1>
                  <p className="text-xs">Over Weight</p>
                </div>
                <div className="border-l-2 border-gray-300 px-3">
                  <p className="text-sm py-2 ">
                    People in this range may be at increased risk of health
                    problems like heart disease and diabetes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border border-gray-500 rounded-r-xl">
            <div className="bg-red-400 p-1"></div>
            <div className="flex">
              <div className=" flex items-center py-2">
                <div className="flex flex-col px-2 py-2 w-52">
                  <h1 className="text-sm font-semibold">More than 30</h1>
                  <p className="text-xs">Obesity</p>
                </div>
                <div className="border-l-2 border-gray-300 px-3">
                  <p className="text-sm py-2">
                    A BMI in this range suggests a higher risk for serious
                    health issues and should prompt discussions about weight
                    management and lifestyle changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
