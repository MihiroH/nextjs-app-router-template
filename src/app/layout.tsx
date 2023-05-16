import '@/styles/base/index.scss'
import { notoSansJP } from '@/utils/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.variable}>{children}</body>
    </html>
  )
}
