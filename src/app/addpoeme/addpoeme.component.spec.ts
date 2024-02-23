import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpoemeComponent } from './addpoeme.component';

describe('AddpoemeComponent', () => {
  let component: AddpoemeComponent;
  let fixture: ComponentFixture<AddpoemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddpoemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddpoemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
