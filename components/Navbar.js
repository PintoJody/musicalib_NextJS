import Link from 'next/link';

const Navbar = () => (
    <nav className='navbar'>
        <Link href="/">
            <a className='navbar-brand'>Musicalib</a>
        </Link>
        <Link href="/new">
            <a className='create'>Add Song</a>
        </Link>
    </nav>
)

export default Navbar;