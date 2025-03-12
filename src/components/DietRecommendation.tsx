
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BmiData, DietPlan } from '@/types';
import { getBmiCategoryLabel, getBmiDescription } from '@/utils/bmiCalculator';
import { dietPlans } from '@/data/recipes';
import { Link } from 'react-router-dom';

interface DietRecommendationProps {
  bmiData: BmiData;
}

const DietRecommendation: React.FC<DietRecommendationProps> = ({ bmiData }) => {
  const { bmi, category } = bmiData;
  
  // Find the diet plan for this BMI category
  const dietPlan: DietPlan | undefined = dietPlans.find(
    (plan) => plan.category === category
  );
  
  if (!dietPlan) {
    return (
      <Card className="w-full animate-fade-in">
        <CardHeader>
          <CardTitle>Diet Recommendation</CardTitle>
          <CardDescription>
            We couldn't find a diet plan for your BMI category. Please try calculating again.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-4 p-6 rounded-full bg-primary/10 w-24 h-24 flex items-center justify-center">
          <span className="text-3xl font-bold">{bmi}</span>
        </div>
        <CardTitle className="text-xl md:text-2xl">
          Your BMI: {getBmiCategoryLabel(category)}
        </CardTitle>
        <CardDescription className="max-w-xl mx-auto mt-2">
          {getBmiDescription(category)}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-2">{dietPlan.title}</h3>
          <p className="text-muted-foreground mb-4">{dietPlan.description}</p>
          
          <div className="rounded-lg bg-secondary p-4">
            <h4 className="font-medium mb-2">Key Recommendations:</h4>
            <ul className="space-y-1 ml-5 list-disc">
              {dietPlan.recommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>
        </section>
        
        <section>
          <h4 className="font-medium mb-2">Sample Meal Plan:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-muted p-4">
              <h5 className="font-medium mb-1">Breakfast Options</h5>
              <ul className="space-y-1 ml-5 list-disc">
                {dietPlan.sampleMeals.breakfast.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h5 className="font-medium mb-1">Lunch Options</h5>
              <ul className="space-y-1 ml-5 list-disc">
                {dietPlan.sampleMeals.lunch.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="rounded-lg bg-muted p-4">
              <h5 className="font-medium mb-1">Dinner Options</h5>
              <ul className="space-y-1 ml-5 list-disc">
                {dietPlan.sampleMeals.dinner.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h5 className="font-medium mb-1">Snack Options</h5>
              <ul className="space-y-1 ml-5 list-disc">
                {dietPlan.sampleMeals.snacks.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h4 className="font-medium mb-2">Helpful Tips:</h4>
          <ul className="space-y-1 ml-5 list-disc">
            {dietPlan.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>
        
        <div className="flex justify-center mt-6">
          <Link to="/recipes">
            <Button size="lg" className="w-full sm:w-auto">
              View Recipe Suggestions
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default DietRecommendation;
