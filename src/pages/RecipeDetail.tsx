
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { recipes } from '@/data/recipes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import { getBmiCategoryLabel } from '@/utils/bmiCalculator';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <Layout>
        <div className="container px-4 md:px-6 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
            <p className="mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/recipes">Back to Recipes</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link to="/recipes" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Recipes
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden mb-6">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title}
                className="w-full h-auto object-cover aspect-video"
              />
            </div>

            <h1 className="text-3xl font-bold mb-3">{recipe.title}</h1>
            <p className="text-muted-foreground mb-4">{recipe.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>

            <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>Prep: {recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>Cook: {recipe.cookTime}</span>
              </div>
              <div>
                <span>Servings: {recipe.servings}</span>
              </div>
              <div>
                <span>{recipe.calories} calories</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Ingredients</h2>
              <ul className="list-disc pl-5 space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Instructions</h2>
              <ol className="list-decimal pl-5 space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="pl-2">{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-muted rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Dietary Information</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Suitable for:</h4>
                <div className="space-y-2">
                  {recipe.suitableFor.map(category => (
                    <div key={category} className="flex items-center gap-2">
                      <Badge variant="outline">{getBmiCategoryLabel(category)}</Badge>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Nutritional Info:</h4>
                <p className="text-sm text-muted-foreground">
                  {recipe.calories} calories per serving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetail;
