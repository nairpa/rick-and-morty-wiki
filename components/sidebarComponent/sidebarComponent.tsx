import Link from 'next/link'
export const SidebarComponent:React.FC = ():JSX.Element => {
    return(
        <>
            <aside>
                <Link href='/dashboard'>
                    <a>Dashboard</a>
                </Link>
                <Link href='/characters'>
                    <a>Personajes</a>
                </Link>
                <Link href='/episodes'>
                    <a>Episodios</a>
                </Link>
                <Link href='/characters'>
                    <a>Lugares</a>
                </Link>
            </aside>
        </>
    )
}