
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { 
  calculateBmi, 
  getBmiCategory, 
  getBmiCategoryLabel, 
  getBmiDescription 
} from '@/utils/bmiCalculator';
import { BmiData } from '@/types';

interface BmiCalculatorProps {
  onBmiCalculated: (bmiData: BmiData) => void;
}

const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onBmiCalculated }) => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const { toast } = useToast();

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!height || !weight) {
      toast({
        title: "Missing Information",
        description: "Please enter both height and weight.",
        variant: "destructive",
      });
      return;
    }
    
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);
    
    if (isNaN(heightValue) || isNaN(weightValue)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for height and weight.",
        variant: "destructive",
      });
      return;
    }
    
    if (heightValue <= 0 || weightValue <= 0) {
      toast({
        title: "Invalid Input",
        description: "Height and weight must be greater than zero.",
        variant: "destructive",
      });
      return;
    }
    
    setIsCalculating(true);
    
    // Simulate a short delay for visual feedback
    setTimeout(() => {
      const bmi = calculateBmi(heightValue, weightValue);
      const category = getBmiCategory(bmi);
      
      const bmiData: BmiData = {
        height: heightValue,
        weight: weightValue,
        bmi,
        category,
      };
      
      onBmiCalculated(bmiData);
      setIsCalculating(false);
    }, 500);
  };
  
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg animate-scale-in">
      <CardHeader>
        <CardTitle className="text-center">BMI Calculator</CardTitle>
        <CardDescription className="text-center">
          Calculate your Body Mass Index and get personalized diet recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleCalculate} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="transition-all duration-200"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="transition-all duration-200"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isCalculating}
          >
            {isCalculating ? "Calculating..." : "Calculate BMI"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground text-center">
        Your data is processed locally and never stored or shared
      </CardFooter>
    </Card>
  );
};

export default BmiCalculator;
