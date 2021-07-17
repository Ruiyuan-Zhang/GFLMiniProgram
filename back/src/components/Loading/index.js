import React from 'react'
import styles from './index.less'

export default function Loading({ loading }) {
  return (
    loading && (
      <div className={styles.loader}>
        <div className={styles.loaderInner}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  )
}