import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PageWrapper from '@/components/PageWrapper'
import Message from '../../components/Message'
import { getDialogMessages, IMessage } from '@/services/api'

export default function Messages() {
  const router = useRouter()
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    if (router.isReady) {
      const {dialogID} = router.query
      if (!dialogID) {
        return
      }
      
      const loadMessages = async () => {
          try {
              const dialogsMessages = await getDialogMessages(+dialogID)

              setMessages(dialogsMessages)
          } catch (error) {
              console.error('Error loading dialog messages:', error)
          }
      }
  
      loadMessages()
    }
  }, [router.isReady, router.query])

  return (
    <PageWrapper>
      <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <Message {...message} />
            </li>
          ))}
      </ul>

      <div className='flex gap-2'>
        <textarea className='border-gray-300 border rounded flex-1 px-4 py-2'></textarea>

        <button type='button' className='hover:text-teal-700 hover:opacity-80 text-teal-500'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path className='fill-current' d="M15.379,19.1403 L12.108,12.5993 L19.467,5.2413 L15.379,19.1403 Z M4.86,8.6213 L18.76,4.5343 L11.401,11.8923 L4.86,8.6213 Z M3.359,8.0213 C2.923,8.1493 2.87,8.7443 3.276,8.9483 L11.128,12.8733 L15.053,20.7243 C15.256,21.1303 15.852,21.0773 15.98,20.6413 L20.98,3.6413 C21.091,3.2623 20.739,2.9093 20.359,3.0213 L3.359,8.0213 Z"/>
          </svg>
        </button>
      </div>
    </PageWrapper>
  )
}