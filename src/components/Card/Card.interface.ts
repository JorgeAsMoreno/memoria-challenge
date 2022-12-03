export interface ICard {
  name: string
  frontFace: string
  id: number
  handleFlipCard: (name: string, number: number) => 0 | 1
  unFlippedCards: (number | undefined)[]
  disabledCards: (number | undefined)[]
}
