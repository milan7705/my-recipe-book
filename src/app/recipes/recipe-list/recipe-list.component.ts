import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import {Subscription} from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
   recipes: Recipe[] = [];
   private recipeSub: Subscription;



  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
     this.recipeService.getRecipes();
    this.recipeSub = this.recipeService.getRecipeListener()
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }
  onDelete(recipeid: string) {
    this.recipeService.deleteRecipe(recipeid);
  }
  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }

}
