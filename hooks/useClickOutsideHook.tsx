import { MutableRefObject, useEffect, useRef } from "react";

export const useClickOutside = (handler):MutableRefObject<HTMLElement>  => {
    let domNode = useRef<HTMLElement>();
    
    useEffect(() => {
        let newHandler = (event) => {
            if(!domNode.current.contains(event.target)) {
                handler();
            }
        }

        document.addEventListener('mousedown', newHandler)

        return () => {
            document.removeEventListener('mousedown', newHandler)
        }
    })

    return domNode
}