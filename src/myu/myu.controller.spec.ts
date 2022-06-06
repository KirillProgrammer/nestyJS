import { Test, TestingModule } from '@nestjs/testing'
import { MyuController } from './myu.controller'

describe('MyuController', () => {
	let controller: MyuController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [MyuController],
		}).compile()

		controller = module.get<MyuController>(MyuController)
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})
})
