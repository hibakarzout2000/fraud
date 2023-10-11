import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudStatisticsComponent } from './fraud-statistics.component';

describe('FraudStatisticsComponent', () => {
  let component: FraudStatisticsComponent;
  let fixture: ComponentFixture<FraudStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraudStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
