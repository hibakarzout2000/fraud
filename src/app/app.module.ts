import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AddruleComponent } from './components/addrule/addrule.component';
import { PositionManagementComponent } from './components/position-management/position-management.component';
import { HotListComponent } from './components/hot-list/hot-list.component';
import { RuleManagementComponent } from './components/rule-management/rule-management.component';
import { CategoriesManagementComponent } from './components/categories-management/categories-management.component';
import { DecisionManagementComponent } from './components/decision-management/decision-management.component';
import { FraudStatisticsComponent } from './components/fraud-statistics/fraud-statistics.component';
import { BlockingComponent } from './components/blocking/blocking.component';
import { WarningsComponent } from './components/warnings/warnings.component';
import { AlarmsComponent } from './components/alarms/alarms.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageGroupsComponent } from './components/manage-groups/manage-groups.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [

    AppComponent,
    AddruleComponent,
    PositionManagementComponent,
    HotListComponent,
    RuleManagementComponent,
    CategoriesManagementComponent,
    DecisionManagementComponent,
    FraudStatisticsComponent,
    BlockingComponent,
    WarningsComponent,
    AlarmsComponent,
    ManageUsersComponent,
    ManageGroupsComponent,
    DashboardComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    FontAwesomeModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    CommonModule,
    TableModule,
    SharedModule,
    TreeTableModule,
    MatChipsModule,
    MatSortModule,
    MatCardModule,
    HighchartsChartModule,
    NgbCollapseModule,
    ToastrModule.forRoot()
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
