import React from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'


export const Header:React.FC<HeaderProps> = ({...props}) => {
  return (
	 <div {...props}>
		Header
	 </div>
  )
}
