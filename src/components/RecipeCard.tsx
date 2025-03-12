
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Recipe, BmiCategory } from '@/types';
import { getBmiCategoryLabel } from '@/utils/bmiCalculator';

interface RecipeCardProps {
  recipe: Recipe;
  activeBmiCategory?: BmiCategory;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, activeBmiCategory }) => {
  const isRecommended = activeBmiCategory 
    ? recipe.suitableFor.includes(activeBmiCategory)
    : false;
  
  return (
    <Card className={`overflow-hidden h-full flex flex-col card-hover ${isRecommended ? 'ring-2 ring-primary' : ''}`}>
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        
        {isRecommended && (
          <div className="absolute top-2 right-2">
            <Badge variant="default" className="bg-primary">
              Recommended
            </Badge>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-4">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-medium">
                {recipe.prepTime} prep • {recipe.cookTime} cook
              </span>
            </div>
            <Badge variant="outline" className="bg-black/40 text-white border-white/20">
              {recipe.calories} cal
            </Badge>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{recipe.title}</CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <div className="flex flex-wrap gap-1 mb-2">
          {recipe.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {activeBmiCategory && (
          <div className="mt-2 text-sm">
            <span className="font-medium">Suitable for: </span>
            {recipe.suitableFor.map((category) => (
              <span 
                key={category}
                className={`mr-1 ${category === activeBmiCategory ? 'text-primary font-medium' : ''}`}
              >
                {getBmiCategoryLabel(category)}
                {category !== recipe.suitableFor[recipe.suitableFor.length - 1] && ', '}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0 mt-auto">
        <Link to={`/recipe/${recipe.id}`} className="text-sm font-medium text-primary hover:underline transition-all">
          View Recipe
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
