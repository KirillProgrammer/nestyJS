import { IsNumber, IsString, IsOptional } from 'class-validator'

export class CreateCatDto {
  @IsString()
  readonly name: string

  @IsNumber()
  readonly weight: number

  @IsString({ each: true })
  @IsOptional()
  readonly color: string
}
