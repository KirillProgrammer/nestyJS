import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsController } from './cats/cats.controller'
import { CatsService } from './cats/cats.service'
import { MyuController } from './myu/myu.controller'
@Module({
	imports: [],
	controllers: [AppController, CatsController, MyuController],
	providers: [AppService, CatsService],
})
export class AppModule {}
