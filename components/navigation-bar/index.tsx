import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { LeftOutlined } from '@ant-design/icons'

import styles from './index.module.scss'

interface LeftIconProps {
  icon?: ReactElement
}

function LeftIcon({ icon }: LeftIconProps): ReactElement {
  const router = useRouter()
  if (icon) {
    return icon
  }
  const backHandler = (): void => {
    router.back()
  }
  return <LeftOutlined className={styles.leftArrow} onClick={backHandler} />
}

export interface NavigationBarProp {
  left?: ReactElement
  title?: ReactElement | string
  right?: ReactElement
}

export default function NavigationBar(props: NavigationBarProp): ReactElement {
  return (
    <div className={styles.navigationBar}>
      <div className={styles.left}>
        <LeftIcon icon={props.left} />
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.right}>{props.right}</div>
    </div>
  )
}
