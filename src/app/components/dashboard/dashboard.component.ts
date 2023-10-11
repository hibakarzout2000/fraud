import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit  {
  body = document.getElementsByTagName('body')[0]
  title = 'reporting';
  currentPath: string | undefined;
  routess!:any;
  pushme:boolean= false;
  opened:boolean=false;

  
  constructor(private router:Router,private route: ActivatedRoute,private changeDetectorRef: ChangeDetectorRef,private cookieService: CookieService){
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  toggle() {
    this.opened = !this.opened
  }

  pushMe(){
    this.pushme = true;
  }
  openSidebar() {
    // Code to open the sidebar and make changes
  
    this.changeDetectorRef.detectChanges();
  }
  

  ngAfterViewInit() {
  }
}


