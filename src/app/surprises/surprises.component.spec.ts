import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurprisesComponent } from './surprises.component';

describe('SurprisesComponent', () => {
  let component: SurprisesComponent;
  let fixture: ComponentFixture<SurprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurprisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
