export interface IPost {
    id: number
    userId: number
    userName: string
    userAvatarURL: string
    text: string
}

export interface IDialog {
    id: number
    name: string
    users: number[]
    lastMsg: string
    imgURL: string
}

export interface IMessage {
    id: number
    dialogId: number
    userId: number
    userName: string
    userAvatarURL: string
    text: string
}

export interface IUser {
    id: number
    name: string
}

async function delay (ms?: number) {
    await new Promise((res, rej) => {
        setTimeout(() => {res(true)}, ms || 1000)
    })
}

const users: IUser[] = [
    {
        id: 1,
        name: 'Иван Иванов'
    }, {
        id: 2,
        name: 'Петр Петров'
    }, {
        id: 3,
        name: 'Василий Васильев'
    }
]
  
export async function getPosts (): Promise<IPost[]> {
    await delay()

    const defaultAvatar = '/images/avatar.png'

    const posts: IPost[] = [
        {
            id: 1,
            userId: 1,
            userName: 'User 1',
            userAvatarURL: defaultAvatar,
            text: 'hello'
        }, {
            id: 2,
            userId: 1,
            userName: 'User 1',
            userAvatarURL: defaultAvatar,
            text: 'hello'
        }, {
            id: 3,
            userId: 1,
            userName: 'User 1',
            userAvatarURL: defaultAvatar,
            text: 'hello'
        }
    ]

    return posts
}

export async function getDialogMessages (dialogId: number): Promise<IMessage[]> {
    await delay()

    const defaultAvatar = '/images/avatar.png'

    const getUserName = (userID: number) => users.find(user => user.id === userID)!.name

    const messages: IMessage[] = [
        {
            id: 1,
            dialogId: 1,
            userId: 1,
            userName: getUserName(1),
            userAvatarURL: defaultAvatar,
            text: 'Привет!'
        }, {
            id: 2,
            dialogId: 1,
            userId: 2,
            userName: getUserName(2),
            userAvatarURL: defaultAvatar,
            text: 'Привет!'
        }, {
            id: 3,
            dialogId: 1,
            userId: 1,
            userName: getUserName(1),
            userAvatarURL: defaultAvatar,
            text: 'Привет!'
        }, {
            id: 4,
            dialogId: 2,
            userId: 3,
            userName: getUserName(3),
            userAvatarURL: defaultAvatar,
            text: 'Привет!'
        }, {
            id: 5,
            dialogId: 2,
            userId: 1,
            userName: getUserName(1),
            userAvatarURL: defaultAvatar,
            text: 'Привет!'
        }, {
            id: 6,
            dialogId: 2,
            userId: 3,
            userName: getUserName(3),
            userAvatarURL: defaultAvatar,
            text: 'Привет!'
        }
    ]

    return messages.filter(msg => msg.dialogId === dialogId)
}

export async function getUserDialogs (userId: number): Promise<IDialog[]> {
    await delay()

    const defaultImg = '/images/avatar.png'

    const dialogs: IDialog[] = [
        {
            id: 1, 
            name: 'Чат 1',
            users: [1, 2],
            lastMsg: 'Cupidatat est cupidatat et excepteur nisi proident quis velit est. Cupidatat est cupidatat et excepteur nisi proident quis velit est. Cupidatat est cupidatat et excepteur nisi proident quis velit est.',
            imgURL: defaultImg
        }, {
            id: 2, 
            name: 'Чат 2',
            users: [1, 3],
            lastMsg: 'Cupidatat est cupidatat et excepteur nisi proident quis velit est.',
            imgURL: defaultImg
        }
    ]

    return dialogs.filter(dialog => dialog.users.includes(userId))
}

export async function getCurrentUser (): Promise<IUser> {
    await delay()
    
    const currentUserId = 1

    return users.find(user => user.id === currentUserId)!
}