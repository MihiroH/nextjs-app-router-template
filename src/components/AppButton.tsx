'use client'

import styles from '@/components/AppButton.module.scss'

interface Props {
  children: React.ReactNode
}

function AppButton({ children, ...props }: Props) {
  // alert when on click
  const handleClick = () => {
    alert('Hello, world!')
  }

  return (
    <>
      <button className={styles.appButton} onClick={handleClick} {...props}>
        {children}
      </button>
    </>
  )
}

export default AppButton
