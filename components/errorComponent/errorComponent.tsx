import { ErrorContainer, ErrorText } from "./errorStyles"

export const ErrorComponent:React.FC<{errorText: string}> = ({errorText}): JSX.Element => {
    return (
        <>  
            <ErrorContainer>
                <ErrorText>{errorText}</ErrorText>
            </ErrorContainer>
        </>
    )
}