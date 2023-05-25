export type NewsObj = {
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