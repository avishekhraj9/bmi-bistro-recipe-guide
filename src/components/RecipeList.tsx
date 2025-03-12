
import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Recipe, BmiCategory } from '@/types';
import { recipes } from '@/data/recipes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface RecipeListProps {
  activeBmiCategory?: BmiCategory;
}

const RecipeList: React.FC<RecipeListProps> = ({ activeBmiCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const uniqueTags = Array.from(
    new Set(recipes.flatMap(recipe => recipe.tags))
  ).sort();
  
  const filteredRecipes = recipes.filter((recipe) => {
    // Filter by BMI category if specified
    const bmiMatch = activeBmiCategory 
      ? recipe.suitableFor.includes(activeBmiCategory)
      : true;
    
    // Filter by search term
    const searchMatch = searchTerm
      ? recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;
    
    // Filter by selected tag
    const tagMatch = selectedTag
      ? recipe.tags.includes(selectedTag)
      : true;
    
    return bmiMatch && searchMatch && tagMatch;
  });
  
  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedTag(null);
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="rounded-lg bg-muted p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-56">
            <Select
              value={selectedTag || ""}
              onValueChange={(value) => setSelectedTag(value || null)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All tags</SelectItem>
                {uniqueTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button 
            variant="outline" 
            onClick={handleClearFilters}
            disabled={!searchTerm && !selectedTag}
          >
            Clear Filters
          </Button>
        </div>
        
        {activeBmiCategory && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Showing recipes suitable for:</span>
              <Badge variant="secondary">
                {activeBmiCategory.charAt(0).toUpperCase() + activeBmiCategory.slice(1)}
              </Badge>
            </div>
          </div>
        )}
      </div>
      
      {filteredRecipes.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No recipes found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              activeBmiCategory={activeBmiCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
