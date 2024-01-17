import { RouterModule, Routes } from '@angular/router';

import { EnterDataComponent } from './enter-data/enter-data.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

export const routes: Routes = [
    { path: 'first-page', component:FirstPageComponent},
    { path: 'enter-data', component: EnterDataComponent },
    { path: 'thank-you', component: ThankYouComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
  