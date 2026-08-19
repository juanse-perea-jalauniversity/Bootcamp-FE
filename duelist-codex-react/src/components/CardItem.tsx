import type { Card } from "../types/card"
import "./CardItem.css"

type CardItemProps = {
  card: Card
  onSelect: (card: Card) => void
}

export function CardItem({ card, onSelect }: CardItemProps) {
  const image = card.card_images?.[0]?.image_url_small

  return (
    <button type="button" className="dc-card" onClick={() => onSelect(card)}>
      <div className="dc-card__frame">
        {image ? (
          <img
            className="dc-card__image"
            src={image}
            alt={card.name}
            loading="lazy"
          />
        ) : (
          <div className="dc-card__image dc-card__image--fallback">
            <span aria-hidden="true">◈</span>
            <span className="dc-card__fallback-text">No image available</span>
          </div>
        )}
      </div>

      <div className="dc-card__body">
        <h3 className="dc-card__name">{card.name}</h3>
        <p className="dc-card__type">{card.type}</p>
      </div>
    </button>
  )
}
