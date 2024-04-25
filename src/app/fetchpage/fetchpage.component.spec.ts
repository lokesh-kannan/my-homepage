import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchpageComponent } from './fetchpage.component';

describe('FetchpageComponent', () => {
  let component: FetchpageComponent;
  let fixture: ComponentFixture<FetchpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
