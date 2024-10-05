import { Grid } from '@material-ui/core'
import { Tile } from '../tile'
import { TDraggableItemProps } from '../../types'
import { useDrag, useDrop } from 'react-dnd'

export const DraggableItem = ({
  doc,
  index,
  moveItem,
  onClick,
}: TDraggableItemProps) => {
  const [, ref] = useDrag({
    type: 'card',
    item: { index },
  })
  const [, drop] = useDrop({
    accept: 'card',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveItem(item.index, index)
        item.index = index
      }
    },
  })

  return (
    <Grid
      ref={(node: HTMLDivElement) => ref(drop(node))}
      item
      md={6}
      lg={4}
      onClick={onClick}
    >
      <Tile doc={doc} />
    </Grid>
  )
}
