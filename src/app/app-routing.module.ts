import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddruleComponent } from './components/addrule/addrule.component';
import { CategoriesManagementComponent } from './components/categories-management/categories-management.component';
import { RuleManagementComponent } from './components/rule-management/rule-management.component';
import { PositionManagementComponent } from './components/position-management/position-management.component';
import { HotListComponent } from './components/hot-list/hot-list.component';
import { DecisionManagementComponent } from './components/decision-management/decision-management.component';
import { BlockingComponent } from './components/blocking/blocking.component';
import { FraudStatisticsComponent } from './components/fraud-statistics/fraud-statistics.component';
import { WarningsComponent } from './components/warnings/warnings.component';
import { AlarmsComponent } from './components/alarms/alarms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {path:'addrule',component:AddruleComponent},
  {path:'catmanagement',component:CategoriesManagementComponent},
  {path:'rulemanagement',component:RuleManagementComponent},
  {path:'positionmanagement',component:PositionManagementComponent},
  {path:'decisionmanagement',component:DecisionManagementComponent},
  {path:'bloking',component:BlockingComponent},
  {path:'fraudstat',component:FraudStatisticsComponent},
  {path:'warnings',component:WarningsComponent},
  {path:'alarms',component:AlarmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
