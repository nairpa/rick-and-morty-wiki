import Link from 'next/link'
import { Aside } from './sidebarStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { IconContainer, ImageContainer, Image, Container } from './sidebarStyles'
import { useState } from 'react'
import { useClickOutside } from '../../hooks/useClickOutsideHook'

export const SidebarComponent:React.FC = ():JSX.Element => {
    const [show, setShow] = useState(false)

    const handleOpen = (): void => {
        setShow(!show)
    }        

    let domNode = useClickOutside((): void => {
        setShow(false);
    })

    return(
        <>
            <Container visible>
                <IconContainer>
                    <FontAwesomeIcon onClick={() => handleOpen()} icon={show ? faTimes : faBars} />
                </IconContainer>
                <ImageContainer visible>
                    <Image src='/logoWhite.png' alt='logo'></Image> 
                </ImageContainer>    
            </Container>
               
            <Aside ref={domNode} visible={show} >
                <Link href='/dashboard'>
                    <a>Dashboard</a>
                </Link>
                <Link href='/characters'>
                    <a>Characters</a>
                </Link>
                <Link href='/episodes'>
                    <a>Episodes</a>
                </Link>
                <Link href='/locations'>
                    <a>Locations</a>
                </Link>
            </Aside>
        </>
    )
}