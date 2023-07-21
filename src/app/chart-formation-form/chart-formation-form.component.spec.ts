import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFormationFormComponent } from './chart-formation-form.component';

describe('ChartFormationFormComponent', () => {
  let component: ChartFormationFormComponent;
  let fixture: ComponentFixture<ChartFormationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartFormationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartFormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
