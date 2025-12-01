export interface Route {
  name: string
  path: string
}

export interface Routes {
  [key: string]: Route | Route[]
}