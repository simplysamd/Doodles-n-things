import {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import useLocalStorage from '../../utils/useLocalStorage.js'
import Button from '../../components/Button/index.js'
import Checklist from '../../components/Checklist/index.js'
import PropTypes from 'prop-types'

const date = new Date()

const initialData = [
  {createdDate: date.setSeconds(date.getSeconds() - 1), name: 'Create the Todos page at the new route'},
  {createdDate: date.setSeconds(date.getSeconds() - 1), name: 'Create a rough draft'},
  {createdDate: date.setSeconds(date.getSeconds() - 1), name: 'Make some initial mock data'},
  {createdDate: date.setSeconds(date.getSeconds() - 1), name: 'Add local storage'},
  {createdDate: date.setSeconds(date.getSeconds() - 1), name: 'Complete rough draft'},
  {createdDate: date.setSeconds(date.getSeconds() - 1), name: 'Make smooth draft'},
]

const TodoList = memo(() => {
  const [todos, setTodos] = useState(initialData)
  const [newTodoTitle, setNewTodoTitle] = useState('')

  const {getItem, setItem, clearItem} = useLocalStorage('b')

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, {name: newTodoTitle}])
    setNewTodoTitle('')
  }, [newTodoTitle])

  const onNewTitleChange = useCallback((e) => {
    const {value} = e.target
    setNewTodoTitle(value)
  }, [])

  const watch13 = useCallback(
    (e) => {
      if (e.key === 'Enter') addTodo()
    },
    [addTodo],
  )

  const config = useMemo(
    () => ({
      key: 'k',
    }),
    [],
  )

  const onCheckedChange = useCallback((e) => {
    const {id, checked} = e.target
    setTodos((prev) => {
      const newTodos = []
      for (const each of prev) {
        let {isChecked = false, name} = each
        if (name === id) isChecked = checked
        newTodos.push({isChecked, name})
      }
      return newTodos
    })
  }, [])

  const sortedTodos = useMemo(() => {
    const x = todos.sort((a, b) => {
      const prime = a.isChecked - b.isChecked
      if (prime !== 0) return prime
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    })
    console.log(x)
    return x
  }, [todos])

  return (
    <div className={'max-w-[600px] mx-auto'}>
      <div className={'flex gap-2 mx-auto w-fit'}>
        <Input
          autoFocus
          focusOnMod75
          id={'title-new-todo'}
          onChange={onNewTitleChange}
          onKeyDown={watch13}
          placeholder={'Add Todo'}
          value={newTodoTitle}
        />
        <Button disabled={newTodoTitle.length === 0} filled onClick={addTodo} primary size={4}>
          Add
        </Button>
      </div>
      <Checklist items={sortedTodos} size={4} onChange={onCheckedChange} />
    </div>
  )
})

const Input = memo((props) => {
  const {focusOnMod75, ...rest} = props
  const newTodoRef = useRef()

  const watchMod75 = useCallback(
    (e) => {
      if (!focusOnMod75) return
      console.log(e, e.metaKey, e.key)
      if (e.metaKey && e.key === 'k') newTodoRef.current.focus()
    },
    [focusOnMod75],
  )

  useEffect(() => {
    focusOnMod75 && document.addEventListener('keydown', watchMod75)
    return () => document.removeEventListener('keydown', watchMod75)
  }, [focusOnMod75, watchMod75])

  return (
    <input
      className={'bg-gray-950 text-slate-400 placeholder:text-gray-700 placeholder:italic indent-2 p-2 text-2xl'}
      ref={newTodoRef}
      {...rest}
    />
  )
})

Input.displayName = 'Input'

Input.propTypes = {
  focusOnMod75: PropTypes.bool,
}

TodoList.displayName = 'TodoList'

TodoList.propTypes = {}

export default TodoList
