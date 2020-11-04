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
              id: recipe._id,
              imagePath: recipe.imagePath
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
    return this.http.get<{_id: string, title: string, description: string, imagePath: string}>("http://localhost:3000/api/recipes/" + id);
  }
  
  updatePost(id: string, title: string, description: string, image: File | string) {
    let recipeData: Recipe | FormData;
    if (typeof(image) === 'object') {
        recipeData = new FormData();
        recipeData.append("id", id);
        recipeData.append("title", title);
        recipeData.append("description", description);
        recipeData.append("image", image, title);
    } else {
      recipeData = {
        id: id,
        title: title,
        description: description,
        imagePath: image
      } 
    }
    this.http
      .put("http://localhost:3000/api/recipes/" + id, recipeData)
      .subscribe(response => {
        const updatedPosts = [...this.recipes];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
        const recipe: Recipe = {
          id: id,
          title: title,
          description: description,
          imagePath: ""
        }
        updatedPosts[oldPostIndex] = recipe;
        this.recipes = updatedPosts;
        this.recipeUpdated.next([...this.recipes]);
        this.router.navigate(["/"]);
      });
  }

  addRecipe( title: string, description: string, image: File) {
    const recipeData = new FormData();
    recipeData.append('title', title);
    recipeData.append('description', description);
    recipeData.append('image', image, title);
    this.http.post<{message: string, recipe: Recipe}>('http://localhost:3000/api/recipes', recipeData)
      .subscribe((responseData)=> {
        const recipe: Recipe = {
          id: responseData.recipe.id, 
          title: title, 
          description: description,
          imagePath: responseData.recipe.imagePath
        };
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
