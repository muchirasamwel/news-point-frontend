export type NewsObj = {
  id: string | number
  title: string
  body: string
  date: string
  thumbnail?: string
  category?: string
  author?: string
  source?: string
}

export type NewsFilterObj = {
  category?: string
  author?: string
  source?: string
  date?: string
}

export type NewsArr = Array<NewsObj> | []

export type PrefObj = {
  sources?: Array<string>
  categories?: Array<string>
  authors?: Array<string>
}
