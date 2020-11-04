import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Route } from '@angular/compiler/src/core';
import { mimeType } from './file-type.validator'

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
  createRecipeForm: FormGroup;
  imagePreview: string;


  constructor(public recipeService: RecipeService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.createRecipeForm = new FormGroup({
        'title': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
        'description': new FormControl(null, {validators:[Validators.required]}),
        'image': new FormControl(null, {validators:[Validators.required], asyncValidators: [mimeType]})
      });


    this.route.paramMap.subscribe((paramMap: ParamMap)=> {
      if(paramMap.has('recipeId')) {
          this.mode= 'edit';
          this.recipeId = paramMap.get('recipeId');
          this.recipeService.getRecipe(this.recipeId)
            .subscribe(postData => {
              this.recipe = {
                id: postData._id, 
                title: postData.title, 
                description: postData.description, 
                imagePath: postData.imagePath
              };
              this.createRecipeForm.setValue({
                'title': this.recipe.title,
                'description': this.recipe.description,
                'image': this.recipe.imagePath
              })
            });
      } else {
        this.mode = 'create';
        this.recipeId = null;
      }
    });
  }


  onPickedImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.createRecipeForm.patchValue({image: file});
    this.createRecipeForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
     this.imagePreview = <string>reader.result
    };
    reader.readAsDataURL(file)
  }

  onSaveRecipe() {
    if (this.createRecipeForm.invalid) {
      return;
    }
    this.router.navigate(["/"]); 
    if(this.mode === 'create') {
      this.recipeService.addRecipe(
        this.createRecipeForm.value.title, 
        this.createRecipeForm.value.description, 
        this.createRecipeForm.value.image);
    } else {
      this.recipeService.updatePost(
        this.recipeId,
        this.createRecipeForm.value.title,
        this.createRecipeForm.value.description, 
        this.createRecipeForm.value.image);
      
    }
    this.createRecipeForm.reset();
  }
}
