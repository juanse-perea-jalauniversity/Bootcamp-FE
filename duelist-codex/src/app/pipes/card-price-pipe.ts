import { CurrencyPipe } from "@angular/common";
import { LOCALE_ID, Pipe, PipeTransform, inject } from "@angular/core";

const NOT_LISTED = "Not listed"

@Pipe({
	name: "cardPrice",
})
export class CardPricePipe implements PipeTransform {
	readonly #currency = new CurrencyPipe(inject(LOCALE_ID))

	transform(value: string | number | null | undefined, currencyCode = "USD"): string {
		const numeric = Number(value)
		if (value == null || value === "" || Number.isNaN(numeric) || numeric <= 0) {
			return NOT_LISTED
		}

		return this.#currency.transform(numeric, currencyCode) ?? NOT_LISTED
	}
}
