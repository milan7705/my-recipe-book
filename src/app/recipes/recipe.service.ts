import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model'
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 private recipes: Recipe[] = [];
 private recipeUpdated = new Subject<Recipe[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getRecipes() {
    this.http.get<{message: string, recipes: any}>('http://localhost:3000/api/recipes')
      .pipe(map((recipeData) => {
          return recipeData.recipes.map(recipe => {
            return {
              title: recipe.title,
              description: recipe.description,
              id: recipe._id
            };
          });
      }))
      .subscribe((transformData)=> {
        this.recipes = transformData;
        this.recipeUpdated.next([...this.recipes])
      }); 
  }

  getRecipeListener() {
    return this.recipeUpdated.asObservable();
  }

  getRecipe(id: string) {
    return this.http.get<{_id: string, title: string, description: string}>("http://localhost:3000/api/recipes/" + id);
  }
  
  updatePost(id: string, title: string, description: string) {
    const recipe: Recipe = { id: id, title: title, description: description };
    this.http
      .put("http://localhost:3000/api/recipes/" + id, recipe)
      .subscribe(response => {
        const updatedPosts = [...this.recipes];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === recipe.id);
        updatedPosts[oldPostIndex] = recipe;
        this.recipes = updatedPosts;
        this.recipeUpdated.next([...this.recipes]);
        this.router.navigate(["/"]);
      });
  }

  addRecipe( title: string, description: string) {
    const recipe: Recipe = 
    {
      id: null,
      title: title,
      description: description
    };
    this.http.post<{message: string, recipeId: string}>('http://localhost:3000/api/recipes', recipe)
      .subscribe((responseData)=> {
        const id = responseData.recipeId;
        recipe.id = id;
        this.recipes.push(recipe);
        this.recipeUpdated.next([...this.recipes]);
      });
  }
  deleteRecipe(recipeId: string) {
    this.http.delete("http://localhost:3000/api/recipes/" + recipeId)
      .subscribe(()=> {
        const updatedPost = this.recipes.filter(recipe => recipe.id !== recipeId);
        this.recipes = updatedPost;
        this.recipeUpdated.next([...this.recipes]);
        });   
  }
}
