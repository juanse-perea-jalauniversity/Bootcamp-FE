import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSlot } from './card-slot';

describe('CardSlot', () => {
  let component: CardSlot;
  let fixture: ComponentFixture<CardSlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSlot],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSlot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
