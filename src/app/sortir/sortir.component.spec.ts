import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortirComponent } from './sortir.component';

describe('SortirComponent', () => {
  let component: SortirComponent;
  let fixture: ComponentFixture<SortirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
