import {useRef} from 'react'
import PropTypes from 'prop-types'

export default function Checkbox(props) {
  const {label, description, id, onChange, defaultChecked, hideChecked, crossout} = props
  const labelRef = useRef(null)
  const inputRef = useRef(null)

  // if (labelRef.current && hideChecked) return null

  const handleChange = (e) => {
    const {checked} = e.target
    if (checked && hideChecked) {
      labelRef.current.style.height = '0'
      labelRef.current.style.opacity = '0'
    }
    if (checked && crossout) {
      labelRef.current.style.textDecoration = 'line-through'
      labelRef.current.style.textDecorationColor = 'rgb(45 212 191)'
    }
    onChange(e)
  }

  const inputStyleGen = 'cursor-pointer relative'

  let inputStyleSpec = `
    before:w-4 before:transition before:duration-200 before:border before:border-slate-800 before:checked:border-transparent before:bg-black before:left-0 before:top-0 before:bottom-0 before:absolute
    w-4 h-4 mr-2
    after:absolute after:scale-150 after:checked:scale-100 after:w-5 after:h-2.5 after:top-0.5 after:-rotate-45 after:border-4 after:border-transparent after:checked:border-teal-400 after:border-t-0 after:border-r-0 after:transition after:duration-200
  `

  if (crossout) inputStyleSpec = 'w-0 h-0 before: w-0'

  return (
    <li>
      <label className='flex items-center cursor-pointer w-fit relative hover:text-pink-400' ref={labelRef}>
        <input
          className={inputStyleGen + ' ' + inputStyleSpec}
          defaultChecked={defaultChecked}
          id={id}
          onChange={handleChange}
          ref={inputRef}
          type='checkbox'
        />
        <span>{label}</span>
        {description && (
          <>
            <span className='ml-2'>-</span>
            <span className='ml-2 italic opacity-50'>{description}</span>
          </>
        )}
      </label>
    </li>
  )
}

Checkbox.propTypes = {
  crossout: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  description: PropTypes.string,
  hideChecked: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
