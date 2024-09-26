import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
    return (
        <main>
            <header>
                <ul className='md:flex justify-between w-1/2'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/vehicles">Vehicles</Link>
                    </li>
                </ul>
            </header>
            <article>{children}</article>
        </main>
    )
}
