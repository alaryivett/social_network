import Navbar from '../components/Navbar';
import '../styles/globals.css';

interface ILayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: ILayoutProps) {
  return (
    <div className='h-screen bg-gray-100 flex flex-col'>
      <Navbar />
      <div className="max-w-screen-lg mx-auto p-4 flex-1 w-full">
        { children }
      </div>
    </div>
  );
}