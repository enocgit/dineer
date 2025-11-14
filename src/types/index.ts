export interface Ingredient {
  id: string;
  name: string;
  category?: string;
  addedAt: string;
}

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strCategory?: string;
  strArea?: string;
  strTags?: string;
  [key: string]: any;
}


export interface ShoppingListItem {
  id: string;
  name: string;
  category: string;
  recipeId?: string;
  recipeName?: string;
}