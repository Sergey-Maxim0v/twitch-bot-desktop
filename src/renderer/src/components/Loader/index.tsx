import { FC } from 'react'
import { ILoader } from './types'
import styles from './styles.module.scss'
import cn from 'classnames'

const Loader: FC<ILoader> = ({ className }) => {
  return (
    <div className={cn(styles.row, className)}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loader
