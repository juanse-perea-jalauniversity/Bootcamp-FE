import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailModal } from './card-detail-modal';

describe('CardDetailModal', () => {
  let component: CardDetailModal;
  let fixture: ComponentFixture<CardDetailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetailModal],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDetailModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
