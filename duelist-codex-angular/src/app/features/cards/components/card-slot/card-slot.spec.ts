import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSlot } from './card-slot';
import { Card } from '../../data/card.model';

const mockCard: Card = {
  id: 1,
  name: 'Dark Magician',
  type: 'Normal Monster',
  frameType: 'normal',
  desc: 'The ultimate wizard in terms of attack and defense.',
  ygoprodeck_url: 'https://ygoprodeck.com/card/dark-magician',
  card_images: [{ image_url: 'full.jpg', image_url_small: 'small.jpg' }],
};

describe('CardSlot', () => {
  let component: CardSlot;
  let fixture: ComponentFixture<CardSlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSlot],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSlot);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('cardInfo', mockCard);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
