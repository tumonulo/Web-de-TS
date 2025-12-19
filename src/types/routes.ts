export interface Route {
  name: string
  path: string
  children?: Route[]
}

export interface Routes {
  [key: string]: Route
}