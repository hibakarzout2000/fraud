import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionManagementComponent } from './decision-management.component';

describe('DecisionManagementComponent', () => {
  let component: DecisionManagementComponent;
  let fixture: ComponentFixture<DecisionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
