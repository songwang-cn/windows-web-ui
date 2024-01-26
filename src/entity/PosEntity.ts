export class PosEntity {
  x?: number = 0

  y?: number = 0

  setX(x: number) {
    this.x = x
    return this
  }

  setY(y: number) {
    this.y = y
    return this
  }
}
