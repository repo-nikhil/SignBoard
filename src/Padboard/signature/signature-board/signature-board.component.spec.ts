import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureBoardComponent } from './signature-board.component';

describe('SignatureBoardComponent', () => {
  let component: SignatureBoardComponent;
  let fixture: ComponentFixture<SignatureBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatureBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
