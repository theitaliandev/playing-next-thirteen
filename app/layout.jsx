import Link from 'next/link'
import './globals.css'
import getCategories from './lib/getCategories'
import NavItem from './NavItem'

export default async function RootLayout({children}) {
  const data = await getCategories()
  const categories = data.slice(0,4)
  return (
    <html lang="en">
      <head>
        <title>Playing with Next13</title>
        <meta name="description" content="Playing with Next13" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className='font-mono flex flex-col'>
        <header className='flex items-center justify-between w-screen py-4 px-10 border-b-2 border-b-gray-400'>
          <h1 className='font-bold text-xl'><Link href="/">Playing with Next13</Link></h1>
          <nav className='flex space-x-4'>
            {categories.map(category => <NavItem key={category} category={category}>{category}</NavItem>)}
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className='w-screen flex items-center justify-center bg-black text-white py-10'>WITH LOVE THEITALIANDEV</footer>
      </body>
    </html>
  )
}
