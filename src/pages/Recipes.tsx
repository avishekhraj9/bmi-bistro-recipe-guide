
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import RecipeList from '@/components/RecipeList';
import { BmiCategory } from '@/types';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { getBmiCategoryLabel } from '@/utils/bmiCalculator';

const Recipes = () => {
  const [activeBmiCategory, setActiveBmiCategory] = useState<BmiCategory | undefined>(
    // Try to get the BMI category from localStorage
    localStorage.getItem('bmiCategory') as BmiCategory || undefined
  );
  
  const bmiCategories: BmiCategory[] = ["underweight", "normal", "overweight", "obese"];
  
  const handleCategoryChange = (value: string) => {
    if (value === "") {
      setActiveBmiCategory(undefined);
      localStorage.removeItem('bmiCategory');
    } else {
      setActiveBmiCategory(value as BmiCategory);
      localStorage.setItem('bmiCategory', value);
    }
  };
  
  return (
    <Layout>
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Recipe Collection</h1>
              <p className="text-muted-foreground">
                Discover delicious and healthy recipes tailored to your dietary needs
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Select
                value={activeBmiCategory || ""}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by BMI category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All recipes</SelectItem>
                  {bmiCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {getBmiCategoryLabel(category)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <RecipeList activeBmiCategory={activeBmiCategory} />
        </div>
      </section>
    </Layout>
  );
};

export default Recipes;
