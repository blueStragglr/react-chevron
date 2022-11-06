import { ChevronDirection } from './Chevron'
import React from 'react'

export const ChevronWrapper: React.CSSProperties = {
  marginLeft: '0.2em',
  marginRight: '0.36em',
  overflow: 'visible'
}

const ChevronWrapper__SVG: React.CSSProperties = {
  verticalAlign: 'baseline',
  transition: '.25s ease-in-out',
  fill: 'currentColor'
}

const ChevronWrapper_SVG__UpDownIcon: React.CSSProperties = {
  width: '.8em'
}

const ChevronWrapper_SVG__Up: React.CSSProperties = {
  marginBottom: '.1em'
}

const ChevronWrapper__SVG_RightLeft: React.CSSProperties = {
  height: '.7em',
  marginRight: '.12em',
  marginBottom: '-.08em'
}

const ChevronWrapper__Reversed: React.CSSProperties = {
  transform: 'rotate(180deg)'
}

export const getChevronStyle = (direction: ChevronDirection, reversed?: boolean): React.CSSProperties => {
  let styleObject = {
    ...ChevronWrapper__SVG
  }

  switch (direction) {
    case 'up':
      styleObject = {
        ...styleObject,
        ...ChevronWrapper_SVG__UpDownIcon,
        ...ChevronWrapper_SVG__Up
      }
      break
    case 'down':
      styleObject = {
        ...styleObject,
        ...ChevronWrapper_SVG__UpDownIcon
      }
      break
    case 'left':
    case 'right':
      styleObject = {
        ...styleObject,
        ...ChevronWrapper__SVG_RightLeft
      }
  }

  if(reversed) styleObject = {...styleObject, ...ChevronWrapper__Reversed}

  return styleObject
}
