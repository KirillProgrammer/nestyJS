import { IsNumber, IsString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { CreateCatDto } from './create-cat.dto'

export class UpdateMovieDto extends PartialType(CreateCatDto) {}
// Have to download 'npm i @nestjs/mapped-types'

//Another way to Validate UpdateMovieDto
// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }
