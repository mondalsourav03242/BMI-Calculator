var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");
let pic = document.querySelector(".pic");

function calculate() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    modalText.innerHTML = `All fields are required!`;
  } else {
    countBmi();
  }
}

function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }

  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  var result = "";
  if (bmi < 18.5 && age.value >= 15) {
    result = "Underweight";
  } else if (bmi < 18.5 && age.value < 15 && age.value >= 5) {
    result = "Healthy";
  } else if (18.5 <= bmi && bmi <= 24.9 && age.value >= 15 && age.value <= 49) {
    result = "Healthy";
  } else if (18.5 <= bmi && bmi <= 24.9 && age.value >= 5 && age.value < 15) {
    result = "overweight";
  } else if (18.5 <= bmi && bmi <= 24.9 && age.value > 49) {
    result = "underweight";
  } else if (25 <= bmi && bmi <= 29.9 && age.value >= 15 && age.value <= 49) {
    result = "Overweight";
  } else if (25 <= bmi && bmi <= 29.9 && age.value >= 5 && age.value < 15) {
    result = "Overweight";
  } else if (25 <= bmi && bmi <= 29.9 && age.value > 49 && age.value < 109) {
    result = "Healthy";
  } else if (25 <= bmi && bmi <= 29.9 && age.value > 109) {
    result = "underweight";
  } else if (30 <= bmi && bmi <= 34.9 && age.value >= 15 && age.value < 49) {
    result = "Obese";
  } else if (30 <= bmi && bmi <= 34.9 && age.value >= 5 && age.value < 15) {
    result = " Extremely Obese";
  } else if (30 <= bmi && bmi <= 34.9 && age.value > 49 && age.value < 109) {
    result = " overweight";
  } else if (30 <= bmi && bmi <= 34.9 && age.value > 109) {
    result = " healthy";
  } else if (35 <= bmi && age.value >= 5 && age.value <= 49) {
    result = "Extremely obese";
  } else if (35 <= bmi && age.value > 49 && age.value <= 109) {
    result = "obese";
  } else if (35 <= bmi && age.value > 109) {
    result = "overweight";
  } else {
    result = " under 5 years ";
  }

  resultArea.style.display = "block";
  document.querySelector(
    ".comment"
  ).innerHTML = `You are <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

const canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke();
