
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About NutriGuide
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your personalized companion for healthier eating habits
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-muted-foreground">
                At NutriGuide, we believe that proper nutrition is foundational to overall health and well-being. Our mission is to provide personalized dietary guidance based on scientific principles, making it easier for you to make informed food choices that align with your health goals.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Understanding BMI</h2>
              <p className="text-muted-foreground">
                Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m<sup>2</sup> where kg is a person's weight in kilograms and m<sup>2</sup> is their height in meters squared.
              </p>
              <p className="text-muted-foreground">
                BMI is an inexpensive and easy screening method for weight category—underweight, normal weight, overweight, and obesity. While BMI does not measure body fat directly, it is moderately correlated with more direct measures of body fat and is strongly correlated with various metabolic and disease outcomes.
              </p>
              <div className="mt-6 rounded-lg bg-muted p-6">
                <h3 className="text-lg font-semibold mb-4">BMI Categories:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Underweight:</span>
                    <span>BMI less than 18.5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Normal weight:</span>
                    <span>BMI 18.5 to 24.9</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Overweight:</span>
                    <span>BMI 25 to 29.9</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Obesity:</span>
                    <span>BMI 30 or greater</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Our Approach</h2>
              <p className="text-muted-foreground">
                We take a holistic view of nutrition, recognizing that dietary needs vary based on individual factors like BMI, activity level, health conditions, and personal preferences. Our recommendations are based on current nutritional science and focus on sustainable eating patterns rather than restrictive diets.
              </p>
              <p className="text-muted-foreground">
                Our recipe collections are carefully curated to provide options that are not only nutritionally appropriate for different BMI categories but also delicious and practical to prepare.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Disclaimer</h2>
              <p className="text-muted-foreground">
                While NutriGuide provides general dietary recommendations based on BMI categories, these suggestions are not intended to replace professional medical advice. Individual nutritional needs can vary significantly based on factors not captured by BMI alone.
              </p>
              <p className="text-muted-foreground">
                We encourage users to consult with healthcare providers, especially registered dietitians or nutritionists, for personalized nutrition guidance, particularly for those with existing health conditions or special dietary requirements.
              </p>
            </div>
            
            <div className="flex justify-center mt-10">
              <Link to="/">
                <Button size="lg">
                  Calculate Your BMI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
