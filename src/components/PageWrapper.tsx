interface IPageWrapperProps {
    children: React.ReactNode
}

export default function PageWrapper ({children}: IPageWrapperProps) {
    return (
        <div className="h-full">
            {children}
        </div>
    )
}