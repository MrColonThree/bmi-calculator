let isMetric = true;
let BMI;
if (isMetric === true) {
  document.getElementById("btn-metric").classList.add("bg-purple-700");
  document.getElementById("btn-metric").classList.add("text-white");
}

const handleClickMetric = () => {
  isMetric = true;
  document.getElementById("btn-metric").classList.add("bg-purple-700");
  document.getElementById("btn-metric").classList.add("text-white");
  document.getElementById("btn-imperial").classList.remove("bg-purple-700");
  document.getElementById("btn-imperial").classList.remove("text-white");
  document.getElementById("imperial").classList.add("hidden");
  document.getElementById("metric").classList.remove("hidden");
  document.getElementById("output").classList.add("hidden");
  document.getElementById("output").textContent = "";
};

const handleClickImperial = () => {
  isMetric = false;
  document.getElementById("btn-metric").classList.remove("bg-purple-700");
  document.getElementById("btn-metric").classList.remove("text-white");
  document.getElementById("btn-imperial").classList.add("bg-purple-700");
  document.getElementById("btn-imperial").classList.add("text-white");
  document.getElementById("imperial").classList.remove("hidden");
  document.getElementById("metric").classList.add("hidden");
  document.getElementById("output").classList.add("hidden");
  document.getElementById("output").textContent = "";
};

const handleClick = () => {
  let status;
  let message;
  if (isMetric === true) {
    const heightField = document.getElementById("height-field");
    const heightFieldValue = heightField.value;
    heightField.value = "";
    const height = parseFloat(heightFieldValue);
    const weightField = document.getElementById("weight-field");
    const weightFieldValue = weightField.value;
    weightField.value = "";
    const weight = parseFloat(weightFieldValue);

    const calculateBMI = weight / (height / 100) ** 2;
    BMI = calculateBMI.toFixed(2);

    if (BMI < 18.5) {
      status = "Underweight";
      message =
        "Your BMI suggests that you are underweight. It's important to maintain a healthy weight for overall well-being. Consider speaking with a healthcare professional for guidance.";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      status = "Normal weight";
      message =
        "Congratulations! Your BMI falls within the normal weight range. Keep up the good work with a balanced diet and regular exercise to stay healthy.";
    } else if (BMI >= 25 && BMI <= 29.9) {
      status = "Overweight";
      message =
        "Your BMI indicates that you are overweight. This may increase your risk of certain health conditions. Consider making healthy lifestyle changes, including diet and exercise, to achieve a healthier weight.";
    } else {
      status = "Obesity";
      message =
        "Your BMI classifies you as obese. Obesity is associated with various health risks. It's important to consult a healthcare provider to discuss strategies for weight management and overall health improvement.";
    }
    const output = document.getElementById("output");
    output.classList.remove("hidden");
    output.textContent = "";
    const newDiv = document.createElement("div");
    newDiv.classList = "text-lg mt-5";
    newDiv.innerHTML = `
      <h4 class="text-center font-semibold">Your BMI is <span class="text-xl font-bold text-purple-600">${BMI}</span></h4>
      <p class="text-center font-bold">Status: <span class="text-xl text-purple-600">${status}</span</p>
      <p class="my-5">${message}</p>
      <hr class="border-2 border-purple-600"> 
      <p class="mt-5"><span class="font-bold">Note: </span> Remember that BMI is just one tool for assessing health, and individual health can vary based on various factors. It's essential to consult with a healthcare professional for a comprehensive evaluation of your health and to create a personalized plan for achieving and maintaining a healthy weight.</p>
    `;
    output.appendChild(newDiv);
    if (isNaN(height) || isNaN(weight)) {
      output.classList.add("hidden");
      output.textContent = "";
      alert("Please type numbers");
    }
  } else {
    const feetField = document.getElementById("feet-field");
    const feetFieldValue = feetField.value;
    feetField.value = "";
    const feet = parseFloat(feetFieldValue);
    const inchField = document.getElementById("inch-field");
    const inchFieldValue = inchField.value;
    inchField.value = "";
    const inch = parseFloat(inchFieldValue);
    const poundField = document.getElementById("pound-field");
    const poundFieldValue = poundField.value;
    poundField.value = "";
    const pound = parseFloat(poundFieldValue);
    calculateBMI = (pound / (feet * 12 + inch) ** 2) * 703;
    BMI = calculateBMI.toFixed(2);
    console.log(BMI);

    if (BMI < 18.5) {
      status = "Underweight";
      message =
        "Your BMI suggests that you are underweight. It's important to maintain a healthy weight for overall well-being. Consider speaking with a healthcare professional for guidance.";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      status = "Normal weight";
      message =
        "Congratulations! Your BMI falls within the normal weight range. Keep up the good work with a balanced diet and regular exercise to stay healthy.";
    } else if (BMI >= 25 && BMI <= 29.9) {
      status = "Overweight";
      message =
        "Your BMI indicates that you are overweight. This may increase your risk of certain health conditions. Consider making healthy lifestyle changes, including diet and exercise, to achieve a healthier weight.";
    } else {
      status = "Obesity";
      message =
        "Your BMI classifies you as obese. Obesity is associated with various health risks. It's important to consult a healthcare provider to discuss strategies for weight management and overall health improvement.";
    }
    const output = document.getElementById("output");
    output.classList.remove("hidden");
    output.textContent = "";
    const newDiv = document.createElement("div");
    newDiv.classList = "text-lg mt-5";
    newDiv.innerHTML = `
      <h4 class="text-center font-semibold">Your BMI is <span class="text-xl font-bold text-purple-600">${BMI}</span></h4>
      <p class="text-center font-bold">Status: <span class="text-xl text-purple-600">${status}</span</p>
      <p class="my-5">${message}</p>
      <hr class="border-2 border-purple-600"> 
      <p class="mt-5"><span class="font-bold">Note: </span> Remember that BMI is just one tool for assessing health, and individual health can vary based on various factors. It's essential to consult with a healthcare professional for a comprehensive evaluation of your health and to create a personalized plan for achieving and maintaining a healthy weight.</p>
    `;
    output.appendChild(newDiv);
    if (isNaN(feet) || isNaN(pound)) {
      output.classList.add("hidden");
      output.textContent = "";
      alert("Please type numbers");
    }
  }
};
