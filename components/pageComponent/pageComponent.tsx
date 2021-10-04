import { PageContainer, PageIndex, PageIndexContainer } from "./pageStyles"

const PageComponent:React.FC<{pagination: {totalPage: number}, handleClick: (cPage: number, nPage: number, pPage: number, tPage?: number) => void}> = ({pagination, handleClick}):JSX.Element => {
    const { totalPage } = pagination

    const pages = Array.from(Array(totalPage), (_, x) => x + 1)

    return (
        <PageContainer>
            {pages.map(el => <PageIndexContainer key={el}><PageIndex onClick={() => handleClick(el, el + 1, el - 1)}>{el}</PageIndex></PageIndexContainer>)}
        </PageContainer>
    )
}

export default PageComponent