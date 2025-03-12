
export interface BmiData {
  height: number;
  weight: number;
  bmi: number;
  category: BmiCategory;
}

export type BmiCategory = 
  | "underweight" 
  | "normal" 
  | "overweight" 
  | "obese";

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  tags: string[];
  suitableFor: BmiCategory[];
}

export interface DietPlan {
  category: BmiCategory;
  title: string;
  description: string;
  recommendations: string[];
  sampleMeals: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
  };
  tips: string[];
}
