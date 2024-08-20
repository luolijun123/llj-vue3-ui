export interface RouteItem {
  path: string
  name?: string
  meta?: {
    title?: string
  }
  component?: () => Promise<typeof import('*.vue')>
  redirect?: string | { name: string }
  children?: RouteItem[]
}

export interface RouteNavItem {
  path: string
  fullPath: string
  name?: string
  title?: string
  children?: RouteNavItem[]
}
