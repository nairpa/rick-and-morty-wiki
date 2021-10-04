import Link from 'next/link'
import { Aside } from './sidebarStyles'

export const SidebarComponent:React.FC = ():JSX.Element => {
    return(
        <>
            <Aside>
                <Link href='/dashboard'>
                    <a>Dashboard</a>
                </Link>
                <Link href='/characters'>
                    <a>Personajes</a>
                </Link>
                <Link href='/episodes'>
                    <a>Episodios</a>
                </Link>
                <Link href='/locations'>
                    <a>Lugares</a>
                </Link>
            </Aside>
        </>
    )
}