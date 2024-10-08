import styles from './mainContent.module.scss'
import Grid from '@material-ui/core/Grid'
import { TDocument } from './types'
import { DraggableItem, Overlay } from './components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useMainContent, useOverlay } from './hooks'
import { CircularProgress } from '@mui/material'

export const MainContent = () => {
  const { isLoading, isSaving, items, moveItem, timeSinceLastSave } =
    useMainContent()
  const { selectedImage, closeOverlay, openOverlay } = useOverlay()

  return (
    <div className={styles.container}>
      <h1>Documents</h1>
      <div className={styles.info}>
        <p>Last update:</p>
        {isSaving ? (
          <>
            <span>Saving</span>
            <CircularProgress size="20px" />
          </>
        ) : (
          <p>{timeSinceLastSave}</p>
        )}
      </div>
      <DndProvider backend={HTML5Backend}>
        <Grid container spacing={3}>
          {(isLoading ? Array.from(new Array(5)) : items)?.map(
            (doc: TDocument, idx: number) => (
              <DraggableItem
                key={doc ? doc.position : idx}
                doc={doc}
                index={idx}
                moveItem={moveItem}
                onClick={() => openOverlay({ imageSrc: `${doc.type}.png` })}
              />
            ),
          )}
        </Grid>
      </DndProvider>
      {/* Overlay for displaying the selected image or saving */}
      {selectedImage && (
        <Overlay
          selectedImage={selectedImage}
          onClick={closeOverlay}
          moode={'image'}
        />
      )}
    </div>
  )
}
