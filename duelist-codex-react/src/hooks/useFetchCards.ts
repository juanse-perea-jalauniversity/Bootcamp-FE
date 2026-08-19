import type { Card } from "../types/card";
import { useEffect, useState } from "react";
import { fetchCards } from "../api/fetchCards";

export function useFetchCards() {
	const [cards, setCards] = useState<Card[]>([])
	useEffect(() => {
		fetchCards().then(res => {
			setCards(res.data.data)
		})
	}, [])
	return cards
}