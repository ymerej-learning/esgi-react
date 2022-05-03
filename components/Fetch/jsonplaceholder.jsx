import React, { useEffect, useState } from "react";

const JSONPlaceholder = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            response.json();
        })
        .then((data) => {
            setIsLoading(false);
            setData(data);
        })
        .catch((error) => {
            setIsLoading(false);
            setIsError(true);
            console.log(error);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);
      
    return (
        <>
            {isLoading
                ?
                    <div>Loading...</div>
                :
            }
        </>
    );
};

export default JSONPlaceholder;