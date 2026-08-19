import type { Card } from "../types/card"
import { SectionPanel } from "./SectionPanel"
import type { PanelSection } from "./SectionPanel"
import "./CardDetail.css"

type CardDetailProps = {
  card: Card
  onBack: () => void
}

type StatRow = {
  label: string
  value: string | number
}

function formatPrice(value: string | undefined) {
  const amount = Number(value)
  return Number.isFinite(amount) && amount > 0 ? `$${amount.toFixed(2)}` : "—"
}

function buildStats(card: Card): StatRow[] {
  const rows: StatRow[] = [
    { label: "Type", value: card.type },
    { label: "Frame", value: card.frameType },
  ]

  if (card.race) rows.push({ label: "Race", value: card.race })
  if (card.attribute) rows.push({ label: "Attribute", value: card.attribute })
  if (card.level !== undefined) rows.push({ label: "Level", value: card.level })
  if (card.atk !== undefined) rows.push({ label: "ATK", value: card.atk })
  if (card.def !== undefined) rows.push({ label: "DEF", value: card.def })
  if (card.archetype) rows.push({ label: "Archetype", value: card.archetype })

  return rows
}

function StatList({ rows }: { rows: StatRow[] }) {
  return (
    <dl className="dc-stats">
      {rows.map((row) => (
        <div key={row.label} className="dc-stats__row">
          <dt className="dc-stats__label">{row.label}</dt>
          <dd className="dc-stats__value">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function CardDetail({ card, onBack }: CardDetailProps) {
  const image = card.card_images?.[0]?.image_url
  const prices = card.card_prices?.[0]

  const sections: PanelSection[] = [
    {
      id: "effect",
      label: "Effect",
      content: <p className="dc-detail__effect">{card.desc}</p>,
    },
    {
      id: "stats",
      label: "Stats",
      content: <StatList rows={buildStats(card)} />,
    },
    {
      id: "price",
      label: "Price",
      content: prices ? (
        <StatList
          rows={[
            { label: "Cardmarket", value: formatPrice(prices.cardmarket_price) },
            { label: "TCGplayer", value: formatPrice(prices.tcgplayer_price) },
            { label: "eBay", value: formatPrice(prices.ebay_price) },
            { label: "Amazon", value: formatPrice(prices.amazon_price) },
            { label: "CoolStuffInc", value: formatPrice(prices.coolstuff_price) },
          ]}
        />
      ) : (
        <p className="dc-detail__muted">No reference price available for this card.</p>
      ),
    },
  ]

  return (
    <article className="dc-detail">
      <button type="button" className="dc-detail__back" onClick={onBack}>
        <span aria-hidden="true">←</span> Back to catalog
      </button>

      <div className="dc-detail__layout">
        <div className="dc-detail__media">
          {image ? (
            <img className="dc-detail__image" src={image} alt={card.name} />
          ) : (
            <div className="dc-detail__image dc-detail__image--fallback">
              <span aria-hidden="true">◈</span>
              <span>No image available</span>
            </div>
          )}
        </div>

        <div className="dc-detail__content">
          <header className="dc-detail__header">
            <h2 className="dc-detail__name">{card.name}</h2>
            <ul className="dc-detail__badges">
              <li className="dc-detail__badge">{card.type}</li>
              {card.attribute ? (
                <li className="dc-detail__badge">{card.attribute}</li>
              ) : null}
              {card.race ? <li className="dc-detail__badge">{card.race}</li> : null}
            </ul>
          </header>

          <SectionPanel sections={sections} ariaLabel="Card information" />
        </div>
      </div>
    </article>
  )
}
