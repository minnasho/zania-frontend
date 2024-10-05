import styles from './mainContent.module.scss'
import Grid from '@material-ui/core/Grid'
import { TDocument } from './types'
import { DraggableItem } from './components/draggableItem'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useMainContent } from './hooks'

export const MainContent = () => {
  const { isLoading, items, moveItem } = useMainContent()

  return (
    <div className={styles.container}>
      <h1>Documents</h1>
      <DndProvider backend={HTML5Backend}>
        <Grid container spacing={3}>
          {(isLoading ? Array.from(new Array(5)) : items)?.map(
            (doc: TDocument, idx: number) => (
              <DraggableItem
                key={doc ? doc.position : idx}
                doc={doc}
                index={idx}
                moveItem={moveItem}
              />
            ),
          )}
        </Grid>
      </DndProvider>
    </div>
  )
}
