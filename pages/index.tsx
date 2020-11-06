import { Page } from '@/components'
import { NextRouter, useRouter } from 'next/router'
import { ReactElement } from 'react'
import styles from './index.module.scss'

export default function Home(): ReactElement {
  const router: NextRouter = useRouter()
  const viewDetail = (): void => {
    router.push('/detail')
  }
  return (
    <Page
      navigationBarProps={{
        title: 'Home'
      }}
    >
      <div className={styles.container}>
        <h1 className={styles.title} onClick={viewDetail}>
          Welcome to Next Mobile!
        </h1>
        <div className={styles.desc}>
          <p>A next.js template for mobile!</p>
          <p>
            <a href="./">Get Start!</a>
          </p>
        </div>
      </div>
    </Page>
  )
}
