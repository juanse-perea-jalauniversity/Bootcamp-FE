import axios from "axios"
import type { YgoprodeckApiData } from "../types/card"

const YGOPRODECK_API = "https://db.ygoprodeck.com/api/v7/cardinfo.php"

export function fetchCards() {
	return axios.get<YgoprodeckApiData>(YGOPRODECK_API,
		{
			params: {
				num: 12,
				offset: 0
			}
		}
	)
}