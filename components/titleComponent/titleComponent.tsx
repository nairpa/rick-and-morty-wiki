import { Title } from "./titleStyles"

export const TitleComponent:React.FC<{title: string}> = ({title}):JSX.Element => {
    return (
        <>
            <Title>{title}</Title>
        </>
    )

}