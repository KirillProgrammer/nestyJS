import {
	Controller,
	Get,
	HttpCode,
	Post,
	Query,
	Redirect,
} from '@nestjs/common'

@Controller('myu')
export class MyuController {
	@Get()
	@HttpCode(204) // замена статуса http метода поумолчанию
	myuGat() {
		// нест автоматически сериализует данные, отправленные в виде массива или объекта, в json
		return {
			a: 23,
			b: 342,
			'doggy m': 'myu mur, gue',
		}
	}
	@Post()
	@Redirect('https://nestjs.com', 301) // перенаправление запроса
	getDocs(@Query('version') version) {
		if (version && version === '5') {
			return { url: 'https://docs.nestjs.com/v5/' } // возвращаемое значение в виде объекта перезаписывает изначальную ссылку перенаправления
		}
	}
}
