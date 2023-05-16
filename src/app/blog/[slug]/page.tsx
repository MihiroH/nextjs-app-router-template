import Link from 'next/link'

import { getBlogs } from '@/libs/microcms'

export async function generateStaticParams() {
  const posts = await getBlogs()
  return posts.contents.map((post) => ({
    slug: post.id,
  }))
}

export default async function Home({ params }: { params: { slug: string } }) {
  return (
    <main>
      <p>slug: {params.slug}</p>
      <Link href="/">Back to home</Link>
    </main>
  )
}
