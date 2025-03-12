
import { BmiCategory } from "@/types";

export const calculateBmi = (heightCm: number, weightKg: number): number => {
  // Convert height from cm to meters
  const heightM = heightCm / 100;
  
  // Calculate BMI: weight (kg) / [height (m)]^2
  const bmi = weightKg / (heightM * heightM);
  
  // Return BMI rounded to one decimal place
  return Math.round(bmi * 10) / 10;
};

export const getBmiCategory = (bmi: number): BmiCategory => {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "normal";
  } else if (bmi >= 25 && bmi < 30) {
    return "overweight";
  } else {
    return "obese";
  }
};

export const getBmiCategoryLabel = (category: BmiCategory): string => {
  switch (category) {
    case "underweight":
      return "Underweight";
    case "normal":
      return "Normal Weight";
    case "overweight":
      return "Overweight";
    case "obese":
      return "Obese";
    default:
      return "Unknown";
  }
};

export const getBmiDescription = (category: BmiCategory): string => {
  switch (category) {
    case "underweight":
      return "This BMI classification indicates that your body weight is lower than what is considered healthy for your height. Focus on nutrient-dense foods to achieve a healthy weight.";
    case "normal":
      return "Congratulations! This BMI classification indicates that your body weight is within a healthy range for your height. Maintain your balanced diet and regular physical activity.";
    case "overweight":
      return "This BMI classification indicates that your body weight is higher than what is considered healthy for your height. Focus on portion control and regular physical activity.";
    case "obese":
      return "This BMI classification indicates that you have a high amount of body fat relative to your height. Consider consulting a healthcare professional for personalized advice.";
    default:
      return "";
  }
};
