import React, { useState } from "react";
import { useFormContext } from "contexts/FormContext";

const FormMoverControl = () => {
  const { formData, currentStep, totalSteps, handleNewStep } = useFormContext();

  const handleNextButton = () => {

    // FormMoverControl.js:
    // Add a new function to the "Next" button in FormMoverControl.js
    // Upon clicking it:

    // console.log("Current step is:", currentStep);
    // console.log(Object.values(formData));

    // If currentStep === 1
    if (currentStep === 1) {
      // Run a bunch of tests for FormCreateEvent.

      // const formDataExpectedKeys = ['recurring', 'completed', 'title', 'discordName', 'description', 'location']
      // const formDataCurrentKeys = Object.keys(formData)      
      // console.log(formDataCurrentKeys.toString(),formDataExpectedKeys.toString())
      
      // Check if any values are undeclared
      if (Object.keys(formData).toString() !== ['recurring', 'completed', 'title', 'discordName', 'description', 'location'].toString()) {
        console.log("Error: Undeclared Value");
      }

      console.log("\n\nChecking Values:");

      // Check if any values are empty string, null, or undefined
      // Side note: This is the only case where you'd ever want to use == instead of ===
      if (formData['title'] === "" || formData['title'] == null) {
        console.log("Error: Missing 'title' field value");
      } else {
        console.log("'title' field value is valid");
      }
      
      if (formData['description'] === "" || formData['description'] == null) {
        console.log("Error: Missing 'description' field value");
      } else {
        console.log("'description' field value is valid");
      }

      if (formData['location'] === "" || formData['location'] == null) {
        console.log("Error: Missing 'location' field value");
      } else {
        console.log("'location' field value is valid");
      }

      if (formData['discordName'] === "" || formData['discordName'] == null) {
        console.log("Error: Missing 'discordName' field value");
      } else {
        console.log("'discordName' field value is valid");
      }

      // Below is old code for checking all the values at once for null
      // But we want to check each value individually to display the respect error
      // So TODO: scrap this later
      // if (Object.values(formData).some((item) => {
      //   return item == null || item === "";
      // })) {
      //   console.log("Error: Value null, undefined, or empty (Most likely empty string)");
      // }

      console.log("Testing concluded.");

      // For each test that returns an error, save a value
        // Return the values to FormCreateEventErrors
      // Only if none of the tests return an error do we allow currentStep to iterate
      // By running handleNextStep.
    }
      // TEST THIS VIA THIS CONTEXT


    handleNewStep("next");
  }

  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* back button */}
      <button
        onClick={() => handleNewStep()}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>

      {/* next button */}
      <button
        onClick={() => handleNextButton()}
        className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
      >
        {currentStep === totalSteps.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default FormMoverControl;