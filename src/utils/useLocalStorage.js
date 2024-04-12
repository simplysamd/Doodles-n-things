export default function useLocalStorage () {
  const getItem = (key) => {
    let value = localStorage.getItem(key)
    return JSON.parse(value)
  }

  const setItem = (key, value) => {
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
      localStorage.setItem(key, stringVal)
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
      localStorage.removeItem(key)
    } catch (error) {
      console.error(error)
    }
  }

  return {getItem, setItem, clearItem}
}
