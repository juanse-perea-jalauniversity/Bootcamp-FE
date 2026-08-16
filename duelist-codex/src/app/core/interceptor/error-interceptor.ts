import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http"
import { catchError, Observable, of, throwError } from "rxjs"

const CARD_INFO_ENDPOINT = "cardinfo.php"

export const errorInterceptor = (
	req: HttpRequest<unknown>,
	next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
	return next(req).pipe(
		catchError((error: HttpErrorResponse) => {
			if (error.status === 400 && req.url.includes(CARD_INFO_ENDPOINT)) {
				return of(new HttpResponse({ status: 200, url: req.url, body: { data: [] } }))
			}

			return throwError(() => new Error(messageFor(error)))
		}),
	)
}

function messageFor(error: HttpErrorResponse): string {
	if (error.status === 0) {
		return "We couldn't reach the card database. Check your connection and try again."
	}

	if (error.status >= 500) {
		return "The card database is not responding right now. Please try again in a moment."
	}

	return "Something went wrong while loading the cards."
}
