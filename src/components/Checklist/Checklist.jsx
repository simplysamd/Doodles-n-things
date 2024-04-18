import Checkbox from './Checkbox.jsx'
import PropTypes from 'prop-types'

const noFunc = () => {}

export default function Checklist(props) {
  const {items, size, hideChecked, crossout, onChange = noFunc} = props
  // const [getItem, setItem] = useLocalStorage()
  // const [listItems, setListItems] = useState(getItem('checklist') ?? [])
  // const listItems = useRef(getItem('checklist') ?? {})
  // console.log('mounted checklist', listItems)

  // const onChange = e => {
  //   const {checked, id} = e.target
  //   listItems.current[id] = checked
  //   setItem('checklist', listItems.current)
  // }

  return (
    <ul className={'text-2xl leading-10 mt-4'}>
      {items.map((item) => {
        return (
          <Checkbox
            crossout={crossout}
            defaultChecked={item.defaultChecked}
            description={item.source}
            hideChecked={hideChecked}
            id={item.name}
            key={item.name}
            label={item.name}
            onChange={onChange}
            size={size}
          />
        )
      })}
    </ul>
  )
}

Checklist.propTypes = {
  crossout: PropTypes.bool,
  hideChecked: PropTypes.bool,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func,
}
