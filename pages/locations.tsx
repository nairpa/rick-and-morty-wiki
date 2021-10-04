import ResultContainer from "../containers/resultContainer/resultContainer";
import * as React from "react";
import { useQuery } from "@apollo/client";
import { selectCharacterState, setPagination, getLocations, clearPagination } from "../redux/reducers";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { GET_LOCATIONS } from "../apollo/queries/locations";

export default function Locations() {
    const locations = useAppSelector(selectCharacterState)
    const { loading, error, data } = useQuery(GET_LOCATIONS(locations.pagination.currentPage, `locations`, locations.searchValue))
    const dispatch = useAppDispatch()
    
    let type;

    React.useEffect(() => {
        dispatch(clearPagination())
    }, [])
    
    React.useEffect(() => {
        if(!loading) {
            dispatch(setPagination({...locations.pagination, currentPage: data.locations.info.prev? data.locations.info.prev + 1 : 1, nextPage: data.locations.info.next, prevPage: data.locations.info.prev, totalPage: data.locations.info.pages}))
            dispatch(getLocations(data.locations.results))
        }
    }, [data])

    if(!loading) {
        type = Object.keys(data)[0]
    }
    
    return (
        <>
            {loading ? <h1>Loading</h1> : <ResultContainer type={type} />}
        </>
    )
}
