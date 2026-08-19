import type { Card } from "../types/card";
import { useEffect, useState } from "react";
import { fetchCards } from "../api/fetchCards";

export function useFetchCards() {
	const [cards, setCards] = useState<Card[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		setIsLoading(true)
		fetchCards().then(res => {
			setCards(res.data.data)
			setIsLoading(false)
		})
			.catch(err => console.log("Something happened fetching the cards ", err))
	}, [])
	return {
		cards,
		isLoading
	}
}