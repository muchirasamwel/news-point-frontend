export const getFromStorage = (item: string) => {
  const val = localStorage.getItem(item)
  return val ? JSON.parse(val) : null
}

export const saveToStorage = (key: string, item: string) => {
  localStorage.setItem(key, item)
}
