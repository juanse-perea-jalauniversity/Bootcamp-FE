import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "highAspect"
})
export class HighglightAspectsPipe implements PipeTransform {
	transform(value: string | number, ...args: any[]): string {
		return `${value} ★`
	}
}