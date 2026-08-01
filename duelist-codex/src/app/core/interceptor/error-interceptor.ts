import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http"
import { catchError, Observable, tap } from "rxjs"

export const errorInterceptor = (
	req: HttpRequest<unknown>,
	next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
	console.log("Req >>> ", req);
	return next(req).pipe(
		tap(something => console.log("something >>> ", something)),
		catchError(error => { console.log("error >>>>", error); return new Observable<HttpEvent<unknown>> })
	)
}