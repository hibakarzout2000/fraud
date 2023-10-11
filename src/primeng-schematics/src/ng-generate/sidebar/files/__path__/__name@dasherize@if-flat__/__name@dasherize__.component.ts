import { Component<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `<p-sidebar [(visible)]="visibleSidebar1" [baseZIndex]="10000">
                <h1 style="font-weight:normal">Left Sidebar</h1>
                <button pButton type="button" (click)="visibleSidebar1 = false" label="Save" class="ui-button-success"></button>
                <button pButton type="button" (click)="visibleSidebar1 = false" label="Cancel" class="ui-button-secondary"></button>
              </p-sidebar>

              <p-sidebar [(visible)]="visibleSidebar2" position="right" [baseZIndex]="10000">
                <h1 style="font-weight:normal">Right Sidebar</h1>
                <button pButton type="button" (click)="visibleSidebar2 = false" label="Save" class="ui-button-success"></button>
                <button pButton type="button" (click)="visibleSidebar2 = false" label="Cancel" class="ui-button-secondary"></button>
              </p-sidebar>

              <p-sidebar [(visible)]="visibleSidebar3" position="top" [baseZIndex]="10000">
                <h1 style="font-weight:normal">Top Sidebar</h1>
                <button pButton type="button" (click)="visibleSidebar3 = false" label="Save" class="ui-button-success"></button>
                <button pButton type="button" (click)="visibleSidebar3 = false" label="Cancel" class="ui-button-secondary"></button>
              </p-sidebar>

              <p-sidebar [(visible)]="visibleSidebar4" position="bottom" [baseZIndex]="10000">
                <h1 style="font-weight:normal">Bottom Sidebar</h1>
                <button pButton type="button" (click)="visibleSidebar4 = false" label="Save" class="ui-button-success"></button>
                <button pButton type="button" (click)="visibleSidebar4 = false" label="Cancel" class="ui-button-secondary"></button>
              </p-sidebar>

              <p-sidebar [(visible)]="visibleSidebar5" [fullScreen]="true" [baseZIndex]="10000">
                <h1 style="font-weight:normal">Full Screen Sidebar</h1>
                <button pButton type="button" (click)="visibleSidebar5 = false" label="Save" class="ui-button-success"></button>
                <button pButton type="button" (click)="visibleSidebar5 = false" label="Cancel" class="ui-button-secondary"></button>
              </p-sidebar>

              <button pButton type="button" (click)="visibleSidebar1 = true" icon="pi pi-arrow-right"></button>
              <button pButton type="button" (click)="visibleSidebar2 = true" icon="pi pi-arrow-left"></button>
              <button pButton type="button" (click)="visibleSidebar3 = true" icon="pi pi-arrow-down"></button>
              <button pButton type="button" (click)="visibleSidebar4 = true" icon="pi pi-arrow-up"></button>
              <button pButton type="button" (click)="visibleSidebar5 = true" icon="pi pi-th-large"></button>`,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classify(name) %>Component {
  visibleSidebar1;
  visibleSidebar2; 
  visibleSidebar3;
  visibleSidebar4;
  visibleSidebar5;
}