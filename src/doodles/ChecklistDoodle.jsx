import Checklist from '../components/Checklist'
import Button from '../components/Button'
import {useState} from "react";

export default function ChecklistDoodle () {
  const [hideChecked] = useState(false)
  const [listItems, setListItems] = useState([
    {name: 'Sugar'},
    {name: 'Butter, softened'},
    {name: 'Egg yolk'},
    {name: 'Almond extract'},
    {name: 'Flour, all-purpose'},
    {name: 'Unsweetened cocoa powder'}
  ])

  const options = [
    // {
    //   name: 'Hide Checked',
    //   id: 'hideChecked',
    //   cb: () => setHideChecked(hideChecked => !hideChecked)
    // }
  ]

  const submitOnEnter = e => {
    if (e.key === 'Enter') {
      const value = e.target.value
      setListItems(items => [...items, {name: value}])
      e.target.value = ''
    }
  }

  return (
    <>
      <p className={'mb-4'}>
        Custom checkboxes. Static size right now, should probably look at how to make the actual size of the box dynamic.
        Currently using the <code>input</code> tag with <code>before</code> and <code>after</code> pseudo classes, not sure how that compares to alternative methods. Felt kind of wonky to implement.
      </p>

      {options.length > 0 && (
        <div className={'mb-4'}>
          {options.map(option => (
            <Button onClick={option.cb} key={option.id} id={option.id}>{option.name}</Button>
          ))}
        </div>
      )}

      <input
        className={'mb-4 bg-slate-400 text-gray-900 placeholder-slate-600 placeholder:italic indent-1 border-2 border-transparent focus:outline-0 focus:border-teal-400 focus:ring-0'}
        placeholder={'Add checklist item'}
        onKeyDown={submitOnEnter}
      />

      <Checklist items={listItems} hideChecked={hideChecked} />
    </>
  )
}
