import type { Card } from "../types/card"
import { CardItem } from "./CardItem"
import "./CardGrid.css"

type CardGridProps = {
  cards: Card[]
  onSelectCard: (card: Card) => void
}

export function CardGrid({ cards, onSelectCard }: CardGridProps) {
  return (
    <ul className="dc-grid">
      {cards.map((card) => (
        <li key={card.id} className="dc-grid__cell">
          <CardItem card={card} onSelect={onSelectCard} />
        </li>
      ))}
    </ul>
  )
}

type CardGridSkeletonProps = {
  count?: number
}

export function CardGridSkeleton({ count = 12 }: CardGridSkeletonProps) {
  return (
    <ul className="dc-grid" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <li key={index} className="dc-grid__cell">
          <div className="dc-skeleton">
            <div className="dc-skeleton__frame" />
            <div className="dc-skeleton__line" />
            <div className="dc-skeleton__line dc-skeleton__line--short" />
          </div>
        </li>
      ))}
    </ul>
  )
}
