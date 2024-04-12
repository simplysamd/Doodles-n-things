import {useRef} from 'react'
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  filled: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.number,
}

export default function Button (props) {
  const {children, onClick, primary, secondary, filled, disabled, size} = props

  const bref = useRef(null)
  let bwait = useRef({timeout: null, ready: false})
  const clickVisual = useRef(null)
  // let ele = useRef(null)

  let className = 'rounded-sm border border-slate-400 px-2 transition duration-100 z-1 relative overflow-visible disabled:opacity-50'
  // const hovers = ' hover:border-teal-200 hover:text-teal-200'

  const fillClass = ' border-transparent text-gray-900 '
  const nofillClass = ' bg-gray-900'

  // className += hovers

  if (filled) className += fillClass
  if (!filled) className += nofillClass

  const primaryFill = ' bg-teal-400 text-gray-900 enabled:hover:bg-teal-500'
  const secondaryFill = ' bg-slate-400 text-gray-900 enabled:hover:bg-slate-500'
  const defaultFill = ' bg-pink-400 text-gray-900 enabled:hover:bg-pink-500'

  const primaryEmpty = ' border-teal-400 text-teal-400 hover:border-teal-500 hover:text-teal-500'
  const secondaryEmpty = ' border-slate-400 text-slate-400 hover:border-slate-500 hover:text-slate-500'
  const defaultEmpty = ' border-pink-400 text-pink-400 hover:border-pink-500 hover:text-pink-500'

  if (primary) className += filled ? primaryFill : primaryEmpty
  else if (secondary) className += filled ? secondaryFill : secondaryEmpty
  else className += filled ? defaultFill : defaultEmpty

  if (size === 1) className += ' text-sm px-0.5'
  if (size === 3) className += ' text-xl px-4 py-1'

  const onMouseDown = e => {
    const {target} = e
    target.style.transform = 'scale(1.05)'
    bwait.current.timeout = setTimeout(() => {
      if (bwait.current.ready) {
        bwait.current.ready = false
        target.style.transform = 'scale(1)'

      }
      bwait.current.timeout = null
    }, 100)
    // animateClick()
  }

  const onMouseUp = e => {
    const {target} = e
    if (bwait.current.timeout) {
      bwait.current.ready = true
      return
    }
    target.style.transform = 'scale(1.0)'
  }

  // const animateClick = () => {
  //   ele.current = document.createElement('DIV')
  //   ele.current.style.pointerEvents = 'none'
  //   ele.current.style.position = 'absolute'
  //   ele.current.style.left = '0'
  //   ele.current.style.top = '0'
  //   ele.current.style.width = '100%'
  //   ele.current.style.height = '100%'
  //   // ele.current.style.border = 'solid 1px white'
  //   ele.current.style.boxShadow = '1px 1px 1px 1px white'
  //   ele.current.style.transition = '100ms'
  //   ele.current.style.transitionTimingFunction = 'linear'
  //   ele.current.style.zIndex = '0'
  //   ele.current.style.borderRadius = '0.25rem'
  //   // ele.current.style.transform = 'scale(1)'
  //   ele.current.style.boxShadow = 'white 0 0 0 0'
  //   clickVisual.current.appendChild(ele.current)
  //
  //   setTimeout(() => {
  //     // ele.current.style.transform = 'scale(1.2)'
  //     // ele.current.style.borderColor = 'transparent'
  //     ele.current.style.boxShadow = 'transparent 0 0 10px 3px'
  //   }, 0)
  //
  //   setTimeout(() => {
  //     clickVisual.current.removeChild(ele.current)
  //   }, 100)
  // }

  const handleClick = (e) => {
    if (onClick) onClick(e)

    // clickVisual.current.style.transform = 'scale(1.2)'
    // clickVisual.current.style.borderColor = 'transparent'
    // setTimeout(() => {
    //   clickVisual.current.style.transition = 'none'
    //   setTimeout(() => {
    //     clickVisual.current.style = {
    //       ...clickVisual.current.style,
    //       transform: 'scale(1)',
    //       borderColor: 'white'
    //     }
    //   }, 500)
    //   // setTimeout(() => {
    //   //   clickVisual.current.style.transitionDuration = '500ms'
    //   // }, 0)
    // }, 500)
  }


  return (
    <div className={'relative overflow-visible'} ref={clickVisual}>
      {/*<div*/}
      {/*  ref={clickVisual}*/}
      {/*  className={'rounded absolute left-0 top-0 h-full w-full !z-0 !text-transparent !bg-transparent !outline-transparent shadow-none drop-shadow-none border border-white transition duration-500'}*/}
      {/*/>*/}
      <button
        disabled={disabled}
        ref={bref}
        className={className}
        // className={'text-sm p-0'}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  )
}
