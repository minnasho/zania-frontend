import React from 'react'
import { TOverlayProps } from '../../types'
import styles from './overlay.module.scss'

export const Overlay: React.FC<TOverlayProps> = ({
  selectedImage,
  closeOverlay,
}) => {
  return (
    <div className={styles.overlay} onClick={closeOverlay}>
      <div
        className={styles.overlayContent}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={selectedImage} alt="Document" />
      </div>
    </div>
  )
}
