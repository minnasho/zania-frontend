export default class StorageService {
  static setObject<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static mergeObject<T>(key: string, value: T) {
    const oldObject = this.getObject<T>(key) ?? {}
    const newObject = {
      ...oldObject,
      ...value,
    }
    this.setObject(key, newObject)
  }

  static getObject<T>(key: string) {
    const object = localStorage.getItem(key)
    return object ? <T>JSON.parse(object) : null
  }


  static clear() {
    localStorage.clear()
  }
}
