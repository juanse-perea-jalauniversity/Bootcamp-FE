import { useState } from "react"
import { Header } from "./Header"
import { SearchBar } from "./SearchBar"
import { CardGrid } from "./CardGrid"
import { sampleCards } from "../mock/sampleCards"
import "./Home.css"

export function Home() {
  const [term, setTerm] = useState("")

  return (
    <div className="dc-page">
      <Header />
      <main className="dc-page__main">
        <SearchBar value={term} onChange={setTerm} onClear={() => setTerm("")} />
        <CardGrid cards={sampleCards} onSelectCard={() => {}} />
      </main>
    </div>
  )
}
