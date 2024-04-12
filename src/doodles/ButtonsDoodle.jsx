import Button from '../components/Button'
import Toggle from '../components/Toggle'
import {useCallback, useState} from "react";

const sizes = {sm: 1, md: 2, lg: 3}

export default function ButtonsDoodle () {
  const [isDisabled, setDisabled] = useState(false)
  const [size, setSize] = useState(2) // 1, 2, 3 == sm, md, lg

  const onToggle = useCallback(label => {
    if (label === 'Disabled') setDisabled(prev => !prev)
    else setSize(sizes[label])
  }, [])

  return (
    <>
      <h3 className={'text-2xl mb-4'}>Toggles</h3>
      <div className={'flex gap-4 mb-16 items-baseline'}>
        <div className={'flex border border-gray-700 rounded'}>
          <Toggle start type={2} label={'sm'} isActive={size === 1} onToggle={onToggle} />
          <Toggle type={2} label={'md'} isActive={size === 2} onToggle={onToggle} />
          <Toggle end type={2} label={'lg'} isActive={size === 3} onToggle={onToggle} />
        </div>
        <Toggle type={1} label={'Disabled'} isActive={isDisabled} onToggle={onToggle} />
      </div>
      <h3 className={'text-2xl mb-4'}>Filled</h3>
      <div className={'flex gap-4 mb-16'}>
        <Button size={size} disabled={isDisabled} filled>Maybe?</Button>
        <Button size={size} disabled={isDisabled} secondary filled>Secondary</Button>
        <Button size={size} disabled={isDisabled} primary filled>Primary</Button>
      </div>
      <h3 className={'text-2xl mb-4'}>Unfulfilled</h3>
      <div className={'flex gap-4'}>
        <Button size={size} disabled={isDisabled}>Possibly?</Button>
        <Button size={size} disabled={isDisabled} secondary>Secondary</Button>
        <Button size={size} disabled={isDisabled} primary>Primary</Button>
      </div>
    </>
  )
}
