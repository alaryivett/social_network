import { IMessage } from "@/services/api"
  
  export default function Message({userName, userAvatarURL, text}: IMessage) {
    return (
      <div className="flex items-start mb-4">
        <img src={userAvatarURL} alt={userName} className="w-10 h-10 rounded-full" />
        <div className="ml-2">
          <h3 className="font-bold text-teal-500">{userName}</h3>
          <p className="bg-gray-100 p-2 rounded-lg">{text}</p>
        </div>
      </div>
    )
  }