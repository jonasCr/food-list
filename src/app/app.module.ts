import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

//Routes
import { APP_ROUTES } from './app.routes';

//FireBase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

//Modules
import { MaterialModule } from './material.module';
import { FirebaseModule } from './firebase.module';

//Pipes
import { WeekdayPipe } from './pipes/weekday.pipe';
import { NumberToArray } from './pipes/number-to-array.pipe';
import localEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);

//Component
import { CalendarComponent } from './views/calendar/calendar.component';
import { RecipeComponent } from './views/recipe/recipe.component';
import { RecipeEditComponent } from './views/recipe-edit/recipe-edit.component';
import { RecipeDialogCategory } from './views/recipe-edit/recipe-dialog-category';
import { RateComponent } from './shared/components/rate/rate.component';
import { ConfirmComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ListComponent } from './views/list/list.component';
import { RecipeDetailsComponent } from './shared/components/recipe-details/recipe-details.component';
import { RangeDayComponent } from './shared/components/range-day/range-day-component';
import { AuthModule } from './auth/auth.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    ListComponent,
    RecipeComponent,
    WeekdayPipe,
    RecipeDetailsComponent,
    NumberToArray,
    RecipeEditComponent,
    RecipeDialogCategory,
    RateComponent,
    RangeDayComponent,
    ConfirmComponent,
  ],
  entryComponents: [
    RecipeDialogCategory,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    FirebaseModule,
    FormsModule,
    AuthModule,
    APP_ROUTES,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
