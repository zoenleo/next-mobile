import styles from './index.module.scss'
import NavigationBar, { NavigationBarProp } from '../navigation-bar'
import { ReactElement } from 'react'

export interface PageProps {
  navigationBarProps?: NavigationBarProp
  children: ReactElement | Array<ReactElement>
  footer?: ReactElement
}

export default function Page(props: PageProps): ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <NavigationBar {...props.navigationBarProps}></NavigationBar>
      </div>
      <div className={styles.content}>{props.children}</div>
      <div className={styles.footer}>{props.footer}</div>
    </div>
  )
}
