import axios from "axios";
import type { Card } from "../types/card";
import { useEffect, useState } from "react";

export function useFetchCards() {
	const [cards, setCards] = useState<Card[]>([])
	useEffect(() => {
		axios.get(
			"https://db.ygoprodeck.com/api/v7/cardinfo.php",
			{
				params: {
					num: 12,
					offset: 0
				}
			}
		)
			.then(res => {
				console.log("res.data", res.data)
				setCards(res.data.data)
			})
	}, [])
	return cards
}