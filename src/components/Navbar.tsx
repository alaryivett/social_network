import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  const isActive = (path: string) => {
    return router.pathname === path
  }

  return (
    <nav className="bg-teal-500 text-white">
      <div className="max-w-screen-lg py-4 px-8 mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SocialNetwork</h1>
        <div className="flex space-x-4">
          <Link 
            href="/" 
            className={'hover:text-gray-200' + (isActive('/') ? ' font-bold' : '')}
          >Лента</Link>
          <Link 
            href="/messages" 
            className={'hover:text-gray-200' + (isActive('/messages') ? ' font-bold' : '')}
          >Сообщения</Link>
        </div>
      </div>
    </nav>
  )
}