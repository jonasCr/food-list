import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "src/app/shared/models/recipe.model";
//import { menu } from "src/app/models/menu.model";
//import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { RecipeData } from "src/app/data/recipe.data";
//import { RecipeEditComponent } from "src/app/shared/recipe-details/recipe-edit.component";

@Component({
    selector:'app-recipe-details',
    templateUrl:'./recipe-details.component.html',
    styleUrls:['./recipe-details.component.scss']
})

export class RecipeDetails {
    @Input() recipe:Recipe;
    @Input() parent:string;
    @Output() deleteBtn:EventEmitter<boolean> = new EventEmitter;
    constructor(
            public _recipeData:RecipeData,
        ){}

    deleteRecipeFromMenu(){
        this.deleteBtn.emit(true);
    }

    onChange(event){
        this._recipeData.updateRecipe(this.recipe);
    }

   
}