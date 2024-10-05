import styles from './tile.module.scss'
import { Skeleton } from '@mui/material'
import { TTileProps } from '../../types'

export const Tile = ({ doc }: TTileProps) => {
  return (
    <div className={styles.card}>
      {doc ? (
        <img src={`/${doc.type}.png`} alt={doc.title} />
      ) : (
        <Skeleton
          variant="rectangular"
          width={'100%'}
          height={220}
          style={{
            marginBottom: 8,
            borderRadius: 4,
            backgroundColor: '#ffffff20',
          }}
        />
      )}
      {doc ? (
        <p>{doc.title} - position:{doc.position}</p>
      ) : (
        <Skeleton width={'100%'} style={{ backgroundColor: '#ffffff20' }} />
      )}
    </div>
  )
}
