import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'fallback',
})
export class FallBackPipe implements PipeTransform {
	transform(value: any, defaultValue: string = 'N/A'): any {
		if (value === null || value === undefined || value === '') {
			return defaultValue
		}
		return value
	}
}