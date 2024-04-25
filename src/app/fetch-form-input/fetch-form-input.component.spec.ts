import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchFormInputComponent } from './fetch-form-input.component';

describe('FetchFormInputComponent', () => {
  let component: FetchFormInputComponent;
  let fixture: ComponentFixture<FetchFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchFormInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
