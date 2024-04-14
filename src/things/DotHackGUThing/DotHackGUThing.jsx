import {useState, useMemo, useEffect, Fragment} from 'react'
import itemsData from '../../lists/dothackgu/volumeThree/items'
import weaponsData from '../../lists/dothackgu/volumeThree/weapons'
import armorData from '../../lists/dothackgu/volumeThree/armor'
import monstersData from '../../lists/dothackgu/volumeThree/monsters'
import accessoriesData from '../../lists/dothackgu/volumeThree/accessories'
import Checklist from '../../components/Checklist'
import useLocalStorage from '../../utils/useLocalStorage.js'
import Button from '../../components/Button/index.js'
import Toggle from '../../components/Toggle.jsx'

export default function DotHackGUThing() {
  const {setItem, getItem, clearItem} = useLocalStorage()
  const key = '/things/dothackgu'
  const [ls, setLs] = useState(getItem(key) ?? {})
  const [visibilities, setVisibilities] = useState({})
  const hideChecked = false

  useEffect(() => {
    setItem(key, ls)
  }, [ls])

  const onChange = (e) => {
    const {checked, id} = e.target
    setLs((prev) => ({...prev, [id]: checked}))
  }

  const data = useMemo(() => {
    const processData = (values) => {
      let completed = 0
      const total = values.length
      return {
        items: values.map((each) => {
          each.defaultChecked = ls[each.name] ?? false
          if (each.defaultChecked) completed++
          return each
        }),
        completion: `${completed} / ${total}`,
      }
    }

    return [
      {title: 'Items', ...processData(itemsData)},
      {title: 'Weapons', ...processData(weaponsData)},
      {title: 'Armor', ...processData(armorData)},
      {title: 'Accessories', ...processData(accessoriesData)},
      {title: 'Monsters', ...processData(monstersData)},
    ]
  }, [ls])

  const checklists = []

  return (
    <>
      <p className={'mb-4'}>.hack GU "Book of 1000"</p>

      <div className={'flex justify-between'}>
        <div className={'flex gap-2'}>
          {data.map((each) => {
            const isVisible = visibilities[each.title] ?? true
            if (isVisible) checklists.push(each)
            return (
              <Toggle
                key={each.title}
                label={each.title}
                isActive={isVisible}
                onToggle={() => setVisibilities((prev) => ({...prev, [each.title]: !isVisible}))}
              />
            )
          })}
        </div>
        <Button secondary onClick={() => clearItem(true)}>
          Clear Saved Values
        </Button>
      </div>

      {checklists.map((each) => {
        return (
          <Fragment key={'checklist' + each.title}>
            <h3 className={'mt-4 mb-2 text-2xl underline capitalize'}>
              {each.title} ({each.completion})
            </h3>
            <Checklist onChange={onChange} items={each.items} hideChecked={hideChecked} />
          </Fragment>
        )
      })}
    </>
  )
}
