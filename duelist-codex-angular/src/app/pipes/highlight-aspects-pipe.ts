import { Pipe, PipeTransform } from "@angular/core";
import { FEATURED_THRESHOLDS, FeaturedAspects } from "../features/cards/data/featured";

@Pipe({
	name: "highAspect"
})
export class HighglightAspectsPipe implements PipeTransform {
	transform(value: string | number | null | undefined, aspect: keyof FeaturedAspects): string {
		if (value == null) {
			return ""
		}

		const numeric = Number(value)
		const featured = !Number.isNaN(numeric) && numeric >= FEATURED_THRESHOLDS[aspect]

		return featured ? `${value} ★` : `${value}`
	}
}
