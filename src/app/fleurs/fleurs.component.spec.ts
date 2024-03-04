import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursComponent } from './fleurs.component';

describe('FleursComponent', () => {
  let component: FleursComponent;
  let fixture: ComponentFixture<FleursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FleursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
