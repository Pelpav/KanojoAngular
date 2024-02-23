import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemeComponent } from './poeme.component';

describe('PoemeComponent', () => {
  let component: PoemeComponent;
  let fixture: ComponentFixture<PoemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
