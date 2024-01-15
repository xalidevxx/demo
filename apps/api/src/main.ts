import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

async function bootstrap() {
	const logger = new Logger()
	const port = process.env['PORT'] || 3000
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')
	app.enableCors({
		origin: true,
		methods: 'GET,PUT,PATCH,POST,DELETE',
		credentials: true,
	})
	app.listen(port, () => logger.log(`Nest listening on http://localhost:${port}`))
}

bootstrap().then()
