// SDK利用準備
import { createClient, type MicroCMSQueries } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? '',
  apiKey: process.env.MICROCMS_API_KEY ?? '',
})

// 型定義
export interface Blog {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  mainVisual: string
}
export interface BlogResponse {
  totalCount: number
  offset: number
  limit: number
  contents: Blog[]
}

// APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: 'blogs', queries })
}
export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
  })
}
