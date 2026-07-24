import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSquareComponent } from './card-square.component';

describe('CardSquareComponent', () => {
  let component: CardSquareComponent;
  let fixture: ComponentFixture<CardSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSquareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSquareComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
