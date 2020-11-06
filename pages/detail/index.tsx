import { Page } from '@/components'
import { ReactElement } from 'react'
import styles from './index.module.scss'

export default function Home(): ReactElement {
  return (
    <Page
      navigationBarProps={{
        title: 'Welcome'
      }}
    >
      <div className={styles.container}>
        <i>Hello Coder</i>
        <p>Next Mobile is a fast framework what based on Next.</p>
        <p>
          Next mobile has all Next power and also contains many engineering
          dependencies for mobile, like typescript, eslint, prettier, mobile
          page component, etc.
        </p>
        <p>Use Next Mobile, you can immediately develop you mobile web app.</p>
        <p>Let's go!</p>
      </div>
    </Page>
  )
}
