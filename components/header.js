import React from 'react'
import styles from './home.module.css';

export default function Header() {
  return (
    <div>
        <div className={styles['title']}>
            <h1>Journal 365</h1>
        </div>
    </div>
  )
}
