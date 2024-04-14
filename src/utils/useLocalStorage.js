const keys = {
  a: '/things/dothackgu checklist',
  b: '/things/todos checklist',
}

export default function useLocalStorage(storageKey) {
  try {
    if (!storageKey) throw new Error('A key is required as the first arg for useLocalStorage.')
    if (!keys[storageKey])
      throw new Error(
        'Provided key must correspond to a field in the "keys" object as defined in "useLocalStorage.js".',
      )
  } catch (error) {
    console.error(error.message)
  }

  const getItem = (key) => {
    let value = localStorage.getItem(storageKey + key)
    return JSON.parse(value)
  }

  const setItem = (key, value) => {
    console.log(key)
    let stringVal = value
    if (typeof value !== 'string') {
      try {
        stringVal = JSON.stringify(value)
      } catch (error) {
        console.error(`Unable to save values for "${key}" to local storage - Could not stringify value.`)
        console.error(error)
      }
    }
    try {
      localStorage.setItem(storageKey + key, stringVal)
    } catch (error) {
      console.error(`Something broke while trying to save "${key}" to local storage.`)
      console.error(error)
    }
  }

  const clearItem = (key) => {
    if (key === true) {
      localStorage.clear()
    }
    try {
      localStorage.removeItem(storageKey + key)
    } catch (error) {
      console.error(error)
    }
  }

  return {getItem, setItem, clearItem}
}
