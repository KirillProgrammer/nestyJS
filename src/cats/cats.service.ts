import { Injectable, NotFoundException } from '@nestjs/common'
import { Cat } from './cats.entity'
import { CreateCatDto } from './DTO/create-cat.dto'

@Injectable()
export class CatsService {
  private cats: Cat[] = []
  getAll(): Cat[] {
    return this.cats
  }

  getOne(name: string): Cat {
    const cat = this.cats.find((cat) => cat.name === name)
    if (!cat) {
      throw new NotFoundException(`Cat with name ${name} not found.`)
    }
    return cat
  }
  deleteOne(name: string) {
    this.getOne(name)
    this.cats = this.cats.filter((cat) => cat.name !== name)
  }
  create(catData: CreateCatDto) {
    this.cats.push({ ...catData })
  }

  update(name: string, UpdateCatDto) {
    const cat = this.getOne(name)
    this.deleteOne(name)
    this.cats.push({ ...cat, ...UpdateCatDto })
  }
}
