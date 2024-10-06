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
  onClick: () => void
  moveItem: (dragIndex: number, hoverIndex: number) => void
}

export type TOverlayProps = {
  selectedImage?: string
  onClick: () => void
  moode?: 'saving' | 'image'
}
