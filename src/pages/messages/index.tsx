import { useEffect, useState } from 'react'
import PageWrapper from '@/components/PageWrapper'
import Loader from '@/components/Loader'
import Link from 'next/link'
import { getUserDialogs, IDialog, getCurrentUser } from '@/services/api'

export default function Dialogs() {
    const [dialogs, setDialogs] = useState<IDialog[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const getDialogs = async () => {
            setIsLoading(true)

            try {
                const currentUser = await getCurrentUser()
                const dialogsData = await getUserDialogs(currentUser.id)

                setDialogs(dialogsData)
            } catch (error) {
                console.error('Error loading dialogs: ', error)
            } finally {
                setIsLoading(false)
            }
        }
    
        getDialogs()
    }, [])

    return (
        <PageWrapper>
            {
                isLoading ? (
                    <Loader/>
                ) : (
                    <ul className='bg-white p-4 rounded-lg shadow-md mb-4'>
                    {dialogs.map((dialog) => (
                        <li key={dialog.id} className="mb-2">
                        <Link href={`/messages/${dialog.id}`}>
                            <div className="p-4 hover:bg-gray-100 hover:opacity-80 cursor-pointer flex rounded-xl gap-4">
                                <img src={dialog.imgURL} alt={dialog.name} className='h-12' />

                                <div className='overflow-hidden'>
                                    <h2 className="font-semibold text-teal-500">{dialog.name}</h2>
                                    <span className='truncate w-full block text-gray-500'>{dialog.lastMsg}</span>
                                </div>
                            </div>
                        </Link>
                        </li>
                    ))}
                    </ul>
                )
            }
        </PageWrapper>
    )
}