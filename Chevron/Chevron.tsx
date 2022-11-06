import React from 'react'
import {ChevronWrapper, getChevronStyle} from './Chevron.styles'

export type ChevronDirection = 'up' | 'right' | 'down' | 'left'

interface ChevronProps {
  direction?: ChevronDirection
  reversed?: boolean
  className?: string
}

type ChevronPathRecord = Record<ChevronDirection, string>

const Chevron: React.FC<ChevronProps> = ({direction = 'right',
                                           reversed,
                                           className}) => {

  const viewBox = direction === 'up' || direction === 'down'
    ? '0 0 120.5 66.8 '
    : '0 0 66.8 120.5'

  const chevronPath: ChevronPathRecord = {
    up: 'M118.58,64.88h0a6.55,6.55,0,0,1-9.27,0L60.25,15.82,11.19,64.88a6.55,6.55,0,0,1-9.27,0h0a6.54,6.54,0,0,1,0-9.26l53.7-53.7a6.55,6.55,0,0,1,9.27,0l53.69,53.7A6.54,6.54,0,0,1,118.58,64.88Z',
    right: 'M1.92,118.58h0a6.55,6.55,0,0,1,0-9.27L51,60.25,1.92,11.19a6.55,6.55,0,0,1,0-9.27h0a6.55,6.55,0,0,1,9.27,0l53.69,53.7a6.55,6.55,0,0,1,0,9.27L11.19,118.58A6.55,6.55,0,0,1,1.92,118.58Z',
    down: 'M1.92,1.92h0a6.55,6.55,0,0,1,9.27,0L60.25,51,109.31,1.92a6.55,6.55,0,0,1,9.27,0h0a6.55,6.55,0,0,1,0,9.27L64.89,64.88a6.55,6.55,0,0,1-9.27,0L1.92,11.19A6.55,6.55,0,0,1,1.92,1.92Z',
    left: 'M64.88,1.92h0a6.55,6.55,0,0,1,0,9.27L15.82,60.25l49.06,49.06a6.55,6.55,0,0,1,0,9.27h0a6.54,6.54,0,0,1-9.26,0L1.92,64.89a6.55,6.55,0,0,1,0-9.27l53.7-53.7A6.54,6.54,0,0,1,64.88,1.92Z'
  }

  return (<span className={`chevron-wrapper ${className || ''}`} style={ChevronWrapper}>
    <svg
      className={ `chevron-${ direction } ${reversed ? 'reversed' : ''}` }
      xmlns="http://www.w3.org/2000/svg"
      viewBox={ viewBox }
      style={ getChevronStyle(direction, reversed) }
    >
    <g>
      <g>
        <path d={ chevronPath[direction] }/>
      </g>
    </g>
  </svg>
  </span>)

}

export default Chevron
