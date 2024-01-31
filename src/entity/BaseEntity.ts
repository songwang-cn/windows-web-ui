export class BaseEntity {
  id!: number

  name?: string

  setName(name: string) {
    this.name = name
    return this
  }

  setId(id: number) {
    this.id = id
    return this
  }
}
