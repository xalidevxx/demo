import { IPost } from '@demo/interfaces'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class AppService {
	private url = 'https://jsonplaceholder.typicode.com/'

	async getPosts(): Promise<IPost[]> {
		try {
			const { data } = await axios.get<IPost[]>(this.url + 'posts?_limit=5')
			return data
		} catch (e) {
			throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
		}
	}
}
