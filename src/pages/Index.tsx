
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import BmiCalculator from '@/components/BmiCalculator';
import DietRecommendation from '@/components/DietRecommendation';
import { BmiData } from '@/types';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [bmiData, setBmiData] = useState<BmiData | null>(null);
  
  const handleBmiCalculated = (data: BmiData) => {
    setBmiData(data);
    
    // Scroll to recommendations section
    setTimeout(() => {
      const element = document.getElementById('recommendations');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const handleResetCalculator = () => {
    setBmiData(null);
  };
  
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Personalized Diet Recommendations
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Discover the perfect diet plan for your body type. Get personalized recommendations and delicious recipes based on your BMI.
              </p>
            </div>
            <div className="space-x-4">
              <Link to="/about">
                <Button variant="outline" className="animate-fade-in">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {!bmiData ? (
              <BmiCalculator onBmiCalculated={handleBmiCalculated} />
            ) : (
              <div id="recommendations" className="space-y-6">
                <DietRecommendation bmiData={bmiData} />
                <div className="flex justify-center">
                  <Button variant="outline" onClick={handleResetCalculator}>
                    Calculate Again
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full p-6 bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                  <path d="m7 16.5-4.74-2.85" />
                  <path d="m7 16.5 5-3" />
                  <path d="M7 16.5v5.17" />
                  <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                  <path d="m17 16.5-5-3" />
                  <path d="m17 16.5 4.74-2.85" />
                  <path d="M17 16.5v5.17" />
                  <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                  <path d="M12 8 7.26 5.15" />
                  <path d="m12 8 4.74-2.85" />
                  <path d="M12 13.5V8" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Calculate Your BMI</h3>
                <p className="text-muted-foreground">
                  Use our simple BMI calculator to determine your body mass index and identify your ideal weight range.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full p-6 bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Get Personalized Recommendations</h3>
                <p className="text-muted-foreground">
                  Receive diet plans tailored to your specific BMI category, including daily meal suggestions and nutritional guidance.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full p-6 bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M15 11h.01" />
                  <path d="M11 15h.01" />
                  <path d="M16 16h.01" />
                  <path d="m2 16 20 6-6-20a12 12 0 0 0-8 2 12 12 0 0 0-6 12Z" />
                  <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Explore Healthy Recipes</h3>
                <p className="text-muted-foreground">
                  Discover delicious recipes that match your dietary requirements, with detailed ingredients and instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
