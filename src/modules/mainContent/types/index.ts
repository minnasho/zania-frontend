export type TDocument = {
  type: string
  title: string
  position: number
}

export type TTileProps = {
  doc: TDocument
}

export type TDraggableItemProps = {
  doc: TDocument
  index: number
  moveItem: (dragIndex: number, hoverIndex: number) => void
}
