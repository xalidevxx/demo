import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { api } from '@demo/constants'
import { IPost } from '@demo/interfaces'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class PostService {
	constructor(private http: HttpClient) {}

	getPosts(): Observable<IPost[]> {
		return this.http.get<IPost[]>(api)
	}
}
