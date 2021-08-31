import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../apollo/queries/characters";
import CardComponent from '../../components/cardComponent/cardComponent'
import { CardContainer } from './resultStyles'
import PageComponent from "../../components/pageComponent/pageComponent";

interface Pages {
    currentPage: number,
    nextPage: number,
    prevPage: number,
    totalPage: number
}

const ResultContainer = ():JSX.Element => {
    const [pagination, setPagination] = React.useState<Pages>({
        currentPage: 0,
        nextPage: 0,
        prevPage: 0,
        totalPage: 0
    })
    const { loading, error, data } = useQuery(GET_CHARACTERS(pagination.currentPage, `characters`))
    const charData = data? data.characters.results : null
    console.log(charData)
    React.useEffect(() => {
        if(!loading) {
            console.log(data.characters.info)
            setPagination({...pagination, currentPage: data.characters.info.prev? data.characters.info.prev + 1 : 1, nextPage: data.characters.info.next, prevPage: data.characters.info.prev, totalPage: data.characters.info.pages})
        }
    }, [data])

    const handleClick = (cPage:number, nPage:number, pPage:number) => {
        console.log(cPage, nPage, pPage)
        setPagination({...pagination, currentPage: cPage, nextPage: nPage, prevPage: pPage })
    }

    return (
        <>
            {loading ? <div>Loading</div> : 
            <CardContainer>
                <CardComponent charData={charData}/>
            </CardContainer>
            }
            <PageComponent handleClick={handleClick} pagination={pagination}/>
        </>
    )
}

export default ResultContainer