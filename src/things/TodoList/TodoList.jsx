import {memo, useCallback, useEffect, useRef, useState} from 'react'
import useLocalStorage from '../../utils/useLocalStorage.js'
import Button from '../../components/Button/index.js'
import Checklist from '../../components/Checklist/index.js'

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

  const newTodoRef = useRef()

  useEffect(() => {
    document.addEventListener('keydown', watchMod75)
    return () => document.removeEventListener('keydown', watchMod75)
  }, [])

  const watchMod75 = useCallback((e) => {
    console.log(e, e.metaKey, e.key)
    if (e.metaKey && e.key === 'k') newTodoRef.current.focus()
  }, [])

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

  return (
    <div className={'max-w-[600px] mx-auto'}>
      <div className={'flex gap-2 mx-auto w-fit'}>
        <input
          ref={newTodoRef}
          autoFocus
          onChange={onNewTitleChange}
          onKeyDown={watch13}
          value={newTodoTitle}
          id={'title-new-todo'}
          placeholder={'Add Todo'}
        />
        <Button primary filled disabled={newTodoTitle.length === 0} onClick={addTodo}>
          Add
        </Button>
      </div>
      <Checklist items={todos} />
    </div>
  )
})

TodoList.displayName = 'TodoList'

TodoList.propTypes = {}

export default TodoList
