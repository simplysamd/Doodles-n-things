import Checkbox from "./Checkbox.jsx";
import PropTypes from "prop-types";

const noFunc = () => {}

export default function Checklist (props) {
  const {items, hideChecked, crossout, onChange = noFunc} = props
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
    <>
      {items.map(item => {
        return (
          <Checkbox
            crossout={crossout}
            hideChecked={hideChecked}
            defaultChecked={item.defaultChecked}
            onChange={onChange}
            key={item.name}
            id={item.name}
            label={item.name}
            description={item.source}
          />
        )
      })}
    </>
  )
}

Checklist.propTypes = {
  items: PropTypes.array.isRequired,
  hideChecked: PropTypes.bool,
  crossout: PropTypes.bool,
  onChange: PropTypes.func,
}
