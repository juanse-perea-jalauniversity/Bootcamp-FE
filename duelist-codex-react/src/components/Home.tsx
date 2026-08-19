import { useState } from "react"
import { Header } from "./Header"
import { SearchBar } from "./SearchBar"
import { CardGrid, CardGridSkeleton } from "./CardGrid"
import "./Home.css"
import { useFetchCards } from "../hooks/useFetchCards"

export function Home() {
  const [term, setTerm] = useState("")
  const { cards, isLoading } = useFetchCards()

  return (
    <div className="dc-page">
      <Header />
      <main className="dc-page__main">
        <SearchBar value={term} onChange={setTerm} onClear={() => setTerm("")} />
        {isLoading
          ?
          <CardGridSkeleton />
          :
          <></>
        }
        {
          cards.length === 0
            ?
            <p>No cards to show</p>
            :
            <CardGrid cards={cards} onSelectCard={() => { }} />
        }
      </main>
    </div>
  )
}
