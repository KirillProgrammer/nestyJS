import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common'
import { CreateCatDto } from './DTO/create-cat.dto'
import { Cat } from './cats.entity'
import { CatsService } from './cats.service'

@Controller('cats')
export class CatsController {
	constructor(readonly catsService: CatsService) {}

	@Get()
	getAll(): Cat[] {
		return this.catsService.getAll()
	}
	//   @Get('search')
	//   search(@Query('year') searchingYear: string) {
	//     return `We are searching for a cat made after  : ${searchingYear}`;
	//   }
	@Get(':name')
	getOne(@Param('name') catName: string): Cat {
		console.log(typeof catName)
		return this.catsService.getOne(catName)
	}

	@Post()
	create(@Body() catData: CreateCatDto) {
		console.log(catData)
		return this.catsService.create(catData)
	}

	@Delete(':id')
	remove(@Param('id') catName: string) {
		return this.catsService.deleteOne(catName)
	}

	@Patch(':id')
	patch(@Param('id') catName: string, @Body() UpdateCatDto) {
		return this.catsService.update(catName, UpdateCatDto)
	}
}
