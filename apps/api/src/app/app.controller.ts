import { IPost } from '@demo/interfaces'
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private appService: AppService) {}

	@Get()
	async getPosts(): Promise<IPost[]> {
		return await this.appService.getPosts()
	}
}
