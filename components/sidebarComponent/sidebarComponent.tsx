import Link from 'next/link'
import { Aside } from './sidebarStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { IconContainer, ImageContainer, Image, Container } from './sidebarStyles'
import { useState } from 'react'

export const SidebarComponent:React.FC = ():JSX.Element => {
    const [show, setShow] = useState(false)

    const handleOpen = () => {
        setShow(!show)
    }

    return(
        <>
            <Container>
                <IconContainer>
                    <FontAwesomeIcon onClick={() => handleOpen()} icon={show ? faTimes : faBars} />
                </IconContainer>
                <ImageContainer>
                    <Image src='/logoWhite.png' alt='logo'></Image> 
                </ImageContainer>    
            </Container>
               
            <Aside visible={show} >
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