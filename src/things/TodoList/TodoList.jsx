import {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import useLocalStorage from '../../utils/useLocalStorage.js'
import Button from '../../components/Button/index.js'
import Checklist from '../../components/Checklist/index.js'
import PropTypes from 'prop-types'

const initialData = [
  {name: 'Create the Todos page at the new route'},
  {name: 'Create a rough draft'},
  {name: 'Make some initial mock data'},
  {name: 'Add local storage'},
  {name: 'Complete rough draft'},
  {name: 'Make smooth draft'},
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

  return (
    <div className={'max-w-[600px] mx-auto'}>
      <div className={'flex gap-2 mx-auto w-fit'}>
        <Input
          focusOnMod75
          autoFocus
          onChange={onNewTitleChange}
          onKeyDown={watch13}
          value={newTodoTitle}
          id={'title-new-todo'}
          placeholder={'Add Todo'}
        />
        <Button size={4} primary filled disabled={newTodoTitle.length === 0} onClick={addTodo}>
          Add
        </Button>
      </div>
      <Checklist items={todos} />
    </div>
  )
})

const Input = memo((props) => {
  const {focusOnMod75, ...rest} = props
  const newTodoRef = useRef()

  useEffect(() => {
    focusOnMod75 && document.addEventListener('keydown', watchMod75)
    return () => document.removeEventListener('keydown', watchMod75)
  }, [focusOnMod75])

  const watchMod75 = useCallback((e) => {
    if (!focusOnMod75) return
    console.log(e, e.metaKey, e.key)
    if (e.metaKey && e.key === 'k') newTodoRef.current.focus()
  }, [])

  return (
    <input
      ref={newTodoRef}
      className={'bg-gray-950 text-slate-400 placeholder:text-gray-700 placeholder:italic indent-2 p-2 text-2xl'}
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
