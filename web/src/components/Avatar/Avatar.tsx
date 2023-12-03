import React, { FC } from 'react'
import { Icon } from '../Icon'
import santaHat from './santa-hat.png'
import styles from './Avatar.module.css'

type AvatarProps = {
  name?: string
  img?: string
  status?: 'error' | 'warning' | 'success'
  isSanta?: boolean
}

const StatusIcon: FC<Pick<AvatarProps, 'status'> & { border: string }> = ({
  status,
  border,
}) => {
  const iconBg =
    status === 'error'
      ? 'bg-orangeRed'
      : status === 'warning'
        ? 'bg-supernova'
        : 'bg-spanishGreen'
  const iconColor = status === 'warning' ? 'black' : 'white'
  const statusIcon =
    status === 'error' ? 'minus' : status === 'warning' ? 'question' : 'check'

  return (
    <div
      className={`${styles.statusIcon} overflow-hidden border-2  ${border} flex items-center justify-center rounded-full ${iconBg} text-${iconColor} text-16 font-sans font-bold`}
    >
      <Icon id={statusIcon} size={16} />
    </div>
  )
}

const AvatarBase: FC<
  Pick<AvatarProps, 'status' | 'isSanta'> & {
    border?: 'vistaBlue' | 'white'
    children
  }
> = ({ border = 'white', isSanta, status, children }) => {
  const borderColor = border === 'white' ? 'border-white' : 'border-vistaBlue';
  return (
    <div className={styles.wrapper}>
      <div
        className={`overflow-hidden border-4 ${borderColor} flex items-center justify-center rounded-full bg-spanishGreen font-sans font-bold text-white ${styles.base}`}
      >
        {children}
      </div>
      {isSanta && (
        <img
          className={styles.santaHat}
          src={santaHat}
          alt={'Santa hat'}
          width={67}
          height={57}
        />
      )}
      {status && <StatusIcon status={status} border={borderColor} />}
    </div>
  )
}

export const Avatar: FC<AvatarProps> = ({ name, img, ...props }) => {
  if (img) {
    return (
      <AvatarBase border={'white'} {...props}>
        <img className={styles.image} src={img} alt={name} width={60} height={60} />
      </AvatarBase>
    )
  }

  if (name) {
    return (
      <AvatarBase border={'white'} {...props}>
        {name[0].toUpperCase()}
      </AvatarBase>
    )
  }

  return (
    <AvatarBase border={'vistaBlue'} {...props}>
      <Icon id={'eyeClosed'} size={32} />
    </AvatarBase>
  )
}
