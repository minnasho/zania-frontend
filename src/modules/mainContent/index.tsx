import styles from './mainContent.module.scss'
import Grid from '@material-ui/core/Grid'
import { TDocument } from './types'
import { DraggableItem } from './components/draggableItem'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useMainContent } from './hooks'
import { Overlay } from './components/overlay'
import { useOverlay } from './hooks/useOverlay'

export const MainContent = () => {
  const { isLoading, items, moveItem } = useMainContent()
  const { selectedImage, closeOverlay, openOverlay } = useOverlay()

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
                onClick={() => openOverlay({ imageSrc: `/${doc.type}.png` })}
              />
            ),
          )}
        </Grid>
      </DndProvider>
      {/* Overlay for displaying the selected image */}
      {selectedImage && (
        <Overlay selectedImage={selectedImage} closeOverlay={closeOverlay} />
      )}
    </div>
  )
}
