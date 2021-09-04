import Link from 'next/link'
import { Container } from './page404Styles'
import { H1, Image, Button } from './page404Styles'

const FourOhFourComponent:React.FC = ():JSX.Element => {
    return (
        <Container>
            <Image src='/404.png' alt='404-error'/>
            <H1>404 - Page not Found</H1>
            <Link href='/'>
                <Button>Go back home</Button>
            </Link>
        </Container>
    )
}

export default FourOhFourComponent