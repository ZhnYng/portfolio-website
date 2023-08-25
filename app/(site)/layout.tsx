import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Website',
  description: 'Generated with Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-6xl mx-auto py-20 px-10">
        <header className='flex items-center justify-between'>
          <Link 
            href="/"
            className=''
          >
            Lim Zhen Yang
          </Link>
          <div className='flex items-center gap-5 text-sm text-gray-400'>
            {/* {pages.map(page => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
              >
                {page.title}
              </Link>
            ))} */}
            <Link
              key={1}
              href={`/about`}
            >
              About Me
            </Link>
          </div>
        </header>
        <main className='py-10'>{children}</main>
      </body>
    </html>
  )
}
