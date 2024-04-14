import {memo, useCallback} from 'react'
import PropTypes from 'prop-types'

const Toggle = memo((props) => {
  const {label, onToggle, isActive, type = 1, start, end} = props

  // types:
  // 1: underline, text
  // 2: background
  // default: text

  let classes = 'cursor-pointer transition duration-150 p-0.5 border-b hover:border-pink-400'

  // let classes = 'text-slate-400 cursor-pointer border-t hover:text-teal-400'
  // if (isActive) classes += ' border-teal-400'
  // else classes += ' border-gray-700'

  const toggle = useCallback(() => {
    onToggle(label, !isActive)
  }, [onToggle, label, isActive])

  if (type === 1) classes += ` ${isActive ? '!text-teal-400 border-b border-teal-400' : 'border-gray-700'}`
  if (type === 2)
    classes += ` px-2${start ? ' rounded-l' : ''}${end ? ' rounded-r' : ''} border-transparent hover:border-pink-400 ${isActive ? 'bg-teal-400 text-gray-900 pointer-events-none' : 'bg-transparent'}`

  return (
    <span className={classes} onClick={toggle}>
      {label}
    </span>
    // <span className={classes} onClick={toggle}>{label}</span>
  )
})

Toggle.displayName = 'Toggle'

Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.number,
  start: PropTypes.bool,
  end: PropTypes.bool,
}

export default Toggle
