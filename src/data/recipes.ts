
import { Recipe, DietPlan } from "@/types";

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Mediterranean Quinoa Bowl",
    description: "A nutrient-rich bowl with quinoa, vegetables, and a light lemon dressing.",
    ingredients: [
      "1 cup cooked quinoa",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, finely sliced",
      "1/4 cup kalamata olives, pitted",
      "2 oz feta cheese, crumbled",
      "2 tbsp extra virgin olive oil",
      "1 tbsp lemon juice",
      "1 tsp dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Place cooked quinoa in a large bowl.",
      "Add cucumber, tomatoes, red onion, olives, and feta cheese.",
      "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
      "Pour dressing over the quinoa mixture and toss to combine.",
      "Serve immediately or refrigerate for up to 3 days."
    ],
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    servings: 2,
    calories: 320,
    tags: ["vegetarian", "mediterranean", "high-protein", "gluten-free"],
    suitableFor: ["normal", "overweight", "obese"]
  },
  {
    id: "2",
    title: "Protein-Packed Breakfast Smoothie",
    description: "A high-calorie, nutrient-dense smoothie perfect for building muscle and gaining weight healthily.",
    ingredients: [
      "1 banana",
      "1 cup whole milk or plant-based alternative",
      "2 tbsp almond or peanut butter",
      "1 scoop protein powder",
      "1 tbsp chia seeds",
      "1 tbsp honey or maple syrup",
      "1/2 tsp cinnamon",
      "Ice cubes (optional)"
    ],
    instructions: [
      "Add all ingredients to a blender.",
      "Blend until smooth and creamy.",
      "Add more milk if a thinner consistency is desired.",
      "Pour into a glass and enjoy immediately."
    ],
    imageUrl: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    prepTime: "5 minutes",
    cookTime: "0 minutes",
    servings: 1,
    calories: 450,
    tags: ["high-protein", "high-calorie", "breakfast", "quick"],
    suitableFor: ["underweight"]
  },
  {
    id: "3",
    title: "Grilled Chicken and Vegetable Skewers",
    description: "Lean protein with colorful vegetables, perfect for a balanced meal that's satisfying and nutritious.",
    ingredients: [
      "1 lb chicken breast, cut into 1-inch cubes",
      "1 red bell pepper, cut into chunks",
      "1 yellow bell pepper, cut into chunks",
      "1 zucchini, sliced",
      "1 red onion, cut into chunks",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 tsp dried oregano",
      "1 tsp dried basil",
      "Salt and pepper to taste",
      "Wooden skewers, soaked in water"
    ],
    instructions: [
      "In a large bowl, combine olive oil, garlic, oregano, basil, salt, and pepper.",
      "Add chicken and vegetables, tossing to coat evenly.",
      "Thread chicken and vegetables onto soaked skewers, alternating ingredients.",
      "Preheat grill to medium-high heat.",
      "Grill skewers for 10-12 minutes, turning occasionally, until chicken is cooked through.",
      "Serve with a side of brown rice or a fresh salad."
    ],
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    prepTime: "20 minutes",
    cookTime: "12 minutes",
    servings: 4,
    calories: 280,
    tags: ["high-protein", "low-carb", "gluten-free", "meal-prep"],
    suitableFor: ["normal", "overweight", "obese"]
  },
  {
    id: "4",
    title: "Hearty Lentil and Vegetable Soup",
    description: "A filling, high-fiber soup that's low in calories but packed with nutrients and flavor.",
    ingredients: [
      "1 cup dried lentils, rinsed",
      "1 onion, diced",
      "2 carrots, diced",
      "2 celery stalks, diced",
      "3 cloves garlic, minced",
      "1 can (14 oz) diced tomatoes",
      "6 cups vegetable broth",
      "1 bay leaf",
      "1 tsp cumin",
      "1 tsp dried thyme",
      "2 cups fresh spinach",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion, carrots, and celery, cooking until softened, about 5 minutes.",
      "Add garlic and cook for another minute.",
      "Stir in lentils, diced tomatoes, vegetable broth, bay leaf, cumin, thyme, salt, and pepper.",
      "Bring to a boil, then reduce heat and simmer for 25-30 minutes until lentils are tender.",
      "Stir in spinach and cook until wilted, about 2 minutes.",
      "Remove bay leaf before serving.",
      "Garnish with fresh parsley."
    ],
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    prepTime: "15 minutes",
    cookTime: "35 minutes",
    servings: 6,
    calories: 220,
    tags: ["vegetarian", "vegan", "high-fiber", "low-calorie"],
    suitableFor: ["overweight", "obese"]
  },
  {
    id: "5",
    title: "Avocado and Egg Toast with Microgreens",
    description: "A balanced breakfast with healthy fats, protein, and complex carbohydrates to start your day right.",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "1 cup microgreens or baby spinach",
      "1 tbsp olive oil",
      "1 tsp lemon juice",
      "Red pepper flakes (optional)",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Toast the bread to your desired level of crispness.",
      "While bread is toasting, heat olive oil in a non-stick pan over medium heat.",
      "Crack eggs into the pan and cook to your preference (sunny side up, over easy, etc.).",
      "Mash the avocado in a small bowl with lemon juice, salt, and pepper.",
      "Spread the mashed avocado evenly on the toast slices.",
      "Top each slice with an egg and sprinkle with microgreens.",
      "Add red pepper flakes if desired, and serve immediately."
    ],
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    prepTime: "5 minutes",
    cookTime: "5 minutes",
    servings: 1,
    calories: 400,
    tags: ["vegetarian", "breakfast", "high-protein", "quick"],
    suitableFor: ["normal", "underweight"]
  },
  {
    id: "6",
    title: "Salmon with Roasted Vegetables",
    description: "Heart-healthy omega-3 fatty acids from salmon paired with fiber-rich vegetables for a complete meal.",
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "2 cups Brussels sprouts, halved",
      "1 sweet potato, diced",
      "1 red onion, cut into wedges",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 lemon, half juiced and half sliced",
      "2 sprigs fresh rosemary",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss vegetables with 1 tbsp olive oil, garlic, salt, and pepper.",
      "Spread vegetables on a baking sheet and roast for 15 minutes.",
      "Meanwhile, season salmon with salt, pepper, and lemon juice.",
      "Push vegetables to the sides of the baking sheet and place salmon in the center.",
      "Top salmon with lemon slices and rosemary sprigs.",
      "Drizzle remaining olive oil over salmon.",
      "Return to oven and bake for an additional 12-15 minutes until salmon is cooked through.",
      "Serve immediately."
    ],
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: 2,
    calories: 460,
    tags: ["high-protein", "gluten-free", "omega-3", "low-carb"],
    suitableFor: ["normal", "overweight", "underweight"]
  }
];

export const dietPlans: DietPlan[] = [
  {
    category: "underweight",
    title: "Healthy Weight Gain Diet Plan",
    description: "This diet plan focuses on nutrient-dense, calorie-rich foods to help you gain weight in a healthy way. The goal is to consume more calories than you burn while ensuring those calories come from nutritious sources.",
    recommendations: [
      "Eat more frequently, aiming for 5-6 smaller meals rather than 3 large ones",
      "Include protein with every meal to help build muscle mass",
      "Choose nutrient and calorie-dense foods like nuts, seeds, avocados, and whole grains",
      "Add healthy fats to meals and snacks for extra calories",
      "Consider smoothies and shakes as an easy way to consume more calories",
      "Strength train regularly to ensure weight gain comes from muscle, not just fat"
    ],
    sampleMeals: {
      breakfast: [
        "Overnight oats with nuts, seeds, and fruit",
        "Protein smoothie with banana, peanut butter, and whole milk",
        "Avocado toast with eggs and cheese on whole grain bread"
      ],
      lunch: [
        "Salmon with quinoa and roasted vegetables",
        "Chicken wrap with avocado and sweet potato fries",
        "Tuna sandwich on whole grain bread with a side of fruit"
      ],
      dinner: [
        "Steak with baked potato and broccoli",
        "Pasta with olive oil, parmesan, and grilled chicken",
        "Stir-fry with brown rice, tofu, and vegetables in a peanut sauce"
      ],
      snacks: [
        "Greek yogurt with honey and granola",
        "Trail mix with nuts, seeds, and dried fruit",
        "Hummus with pita bread and vegetables",
        "Apple slices with nut butter"
      ]
    },
    tips: [
      "Track your calorie intake to ensure you're consuming enough",
      "Drink beverages after meals, not before, to avoid filling up on liquids",
      "Choose calorie-dense options when eating out",
      "Incorporate resistance training to build muscle mass",
      "Be patient – healthy weight gain takes time"
    ]
  },
  {
    category: "normal",
    title: "Balanced Maintenance Diet Plan",
    description: "This diet plan focuses on maintaining your healthy weight through balanced nutrition. The goal is to provide your body with the right amount of calories and nutrients to sustain your current weight and support overall health.",
    recommendations: [
      "Maintain a balanced diet with appropriate portions",
      "Emphasize whole, unprocessed foods",
      "Include a variety of fruits and vegetables for essential vitamins and minerals",
      "Balance protein, carbohydrates, and healthy fats at each meal",
      "Stay hydrated with water throughout the day",
      "Exercise regularly to maintain muscle mass and cardiovascular health"
    ],
    sampleMeals: {
      breakfast: [
        "Greek yogurt parfait with berries and granola",
        "Veggie omelet with whole grain toast",
        "Oatmeal with fruit and nuts"
      ],
      lunch: [
        "Mediterranean quinoa bowl with vegetables and feta",
        "Turkey and vegetable wrap with side salad",
        "Lentil soup with whole grain bread"
      ],
      dinner: [
        "Grilled fish with steamed vegetables and brown rice",
        "Chicken stir-fry with mixed vegetables",
        "Bean and vegetable chili with a small side of cornbread"
      ],
      snacks: [
        "Apple with a small handful of almonds",
        "Vegetable sticks with hummus",
        "Small smoothie with fruit and yogurt"
      ]
    },
    tips: [
      "Practice mindful eating – pay attention to hunger and fullness cues",
      "Cook at home more often to control ingredients and portions",
      "Limit processed foods, added sugars, and excessive sodium",
      "Maintain consistent meal times",
      "Balance indulgences with nutrient-dense foods",
      "Adjust calorie intake based on activity level"
    ]
  },
  {
    category: "overweight",
    title: "Calorie-Conscious Weight Management Plan",
    description: "This diet plan focuses on creating a moderate calorie deficit while ensuring nutritional adequacy. The goal is gradual, sustainable weight loss through a balanced approach to eating and physical activity.",
    recommendations: [
      "Create a moderate calorie deficit (about 500 calories/day for 1 pound of weight loss per week)",
      "Focus on nutrient-dense foods that provide satiety",
      "Increase protein intake to preserve muscle mass during weight loss",
      "Include fiber-rich foods to promote fullness",
      "Stay hydrated, as thirst can sometimes be mistaken for hunger",
      "Combine diet modifications with regular physical activity"
    ],
    sampleMeals: {
      breakfast: [
        "Protein smoothie with spinach, berries, and plant-based protein",
        "Egg white omelet with vegetables and a slice of whole grain toast",
        "Overnight oats with chia seeds and berries"
      ],
      lunch: [
        "Large salad with grilled chicken, vegetables, and light dressing",
        "Turkey and vegetable soup with a small whole grain roll",
        "Tuna salad (made with Greek yogurt) in lettuce wraps"
      ],
      dinner: [
        "Baked fish with roasted vegetables and a small serving of quinoa",
        "Zucchini noodles with turkey meatballs and tomato sauce",
        "Stir-fried tofu with vegetables and a small portion of brown rice"
      ],
      snacks: [
        "Greek yogurt with cinnamon",
        "Vegetable sticks with hummus",
        "Small piece of fruit with a few nuts"
      ]
    },
    tips: [
      "Use smaller plates to help with portion control",
      "Plan meals ahead to avoid impulsive, less healthy choices",
      "Read nutrition labels and be aware of serving sizes",
      "Include regular strength training to maintain muscle mass",
      "Manage stress, as it can contribute to emotional eating",
      "Focus on progress, not perfection – small, consistent changes add up"
    ]
  },
  {
    category: "obese",
    title: "Comprehensive Weight Reduction Plan",
    description: "This diet plan focuses on significant but healthy weight loss through substantial dietary modifications. The goal is to reduce health risks associated with obesity while ensuring nutritional needs are met.",
    recommendations: [
      "Work with healthcare providers to establish safe weight loss goals",
      "Focus on whole, unprocessed foods with high nutrient density",
      "Significantly reduce intake of refined carbohydrates and added sugars",
      "Emphasize lean proteins to preserve muscle mass",
      "Include ample fiber to promote satiety and digestive health",
      "Incorporate movement throughout the day, gradually increasing as fitness improves"
    ],
    sampleMeals: {
      breakfast: [
        "Egg white and vegetable scramble",
        "Protein smoothie with greens, berries, and plant protein",
        "Greek yogurt with a small amount of low-sugar granola"
      ],
      lunch: [
        "Large salad with lean protein and olive oil-based dressing",
        "Vegetable soup with a small portion of lean protein",
        "Lettuce wraps with lean turkey and vegetables"
      ],
      dinner: [
        "Baked fish with steamed vegetables",
        "Lean meat with roasted vegetables",
        "Vegetable stir-fry with tofu and minimal oil"
      ],
      snacks: [
        "Small piece of fruit",
        "Vegetable sticks with a small amount of hummus",
        "Hard-boiled egg"
      ]
    },
    tips: [
      "Consider working with a registered dietitian for personalized guidance",
      "Stay well-hydrated throughout the day",
      "Focus on non-scale victories like improved energy and mobility",
      "Address emotional eating through mindfulness or counseling if needed",
      "Be patient and consistent – sustainable weight loss is gradual",
      "Celebrate small successes along the way"
    ]
  }
];
