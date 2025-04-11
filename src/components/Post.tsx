import Image from 'next/image'
import { IPost } from '@/services/api'

export default function Post(postData: IPost) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        <Image 
          src={postData.userAvatarURL} 
          alt={postData.userName} 
          width={40} 
          height={40} 
          className="rounded-full" 
        />

        <h2 className="ml-2 font-bold">{postData.userName}</h2>
      </div>

      <p>{postData.text}</p>
    </div>
  )
}