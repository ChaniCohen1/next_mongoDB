import axios from "axios";
import IRecipe from "../types/Recipe";


export const fetchRecipes = async () : Promise<IRecipe[]> =>
    axios
      .get('https://dummyjson.com/recipes')
      .then(response => response.data.recipes)
      .catch(error => {
        console.error(error);
        return null;
      });

export default fetchRecipes; 