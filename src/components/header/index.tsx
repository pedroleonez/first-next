import Link from "next/link";

export function Header() {
    return(
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center h-14">
            <h1>Projetinho Next.js</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/contacts">Contacts</Link></li>
                </ul>
            </nav>
        </header>
    )
}