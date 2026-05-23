import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

export default function Navbar() {
    return <header className='fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md'>
        <Link to="/">
            <Dumbbell/> 
            Bemanatry
        </Link>
    </header>
}