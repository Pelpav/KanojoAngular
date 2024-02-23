import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemdescComponent } from './poemdesc.component';

describe('PoemdescComponent', () => {
  let component: PoemdescComponent;
  let fixture: ComponentFixture<PoemdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoemdescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoemdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
