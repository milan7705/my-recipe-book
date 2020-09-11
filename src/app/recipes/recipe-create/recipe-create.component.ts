import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  enteredTitleValue = '';
  enteredDescValue = '';

  private mode = 'create';
  private recipeId: string;
  recipe: Recipe;


  constructor(public recipeService: RecipeService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=> {
      if(paramMap.has('recipeId')) {
          this.mode= 'edit';
          this.recipeId = paramMap.get('recipeId');
          this.recipeService.getRecipe(this.recipeId)
            .subscribe(postData => {
              this.recipe = {id: postData._id, title: postData.title, description: postData.description}
            })
      } else {
        this.mode = 'create';
        this.recipeId = null;
      }
    });
  }


  onSaveRecipe(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.router.navigate(["/"]); 
    if(this.mode === 'create') {
      this.recipeService.addRecipe(form.value.title, form.value.description);
    } else {
      this.recipeService.updatePost(this.recipeId,form.value.title, form.value.description);
      
    }
    form.resetForm();
  }
}
