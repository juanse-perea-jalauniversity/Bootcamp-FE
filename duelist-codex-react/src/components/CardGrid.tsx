import { useFetchCards } from "../hooks/useFetchCards"

export function CardGrid() {
  const cards = useFetchCards()
  return (
    <>
      {
        cards.map(card => <img key={card.id} src={card.card_images[0].image_url_small} alt="card" />)
      }
    </>
  )
}