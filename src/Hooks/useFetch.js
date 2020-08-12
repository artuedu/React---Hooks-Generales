import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
    
    const isMounted = useRef(true);

    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            loading:true,
            error: null,
            data: null
        });

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch(url, requestOptions)
            .then(resp => resp.json())
            .then(data => {
                //Validacion usada solo para pruebas del useRef
                if(isMounted.current){
                    setState({
                        loading:false,
                        error: null,
                        data
                    });
                }else{
                    console.log('setState no se llamo');
                }
            })
            .catch(error => console.log('error', error));

    }, [url]);

    return state;


}
