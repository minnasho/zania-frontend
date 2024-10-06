import React from 'react'
import { TOverlayProps } from '../../types'
import styles from './overlay.module.scss'
import { CircularProgress } from '@mui/material'

export const Overlay: React.FC<TOverlayProps> = ({
  selectedImage,
  onClick,
  moode,
}) => {
  return (
    <div className={styles.overlay} onClick={onClick}>
      <div
        className={styles.overlayContent}
        onClick={(e) => e.stopPropagation()}
      >
        {moode === 'image' ? (
          <img src={selectedImage} alt="Document" />
        ) : moode === 'saving' ? (
          <CircularProgress size="5rem" />
        ) : null}
      </div>
    </div>
  )
}
