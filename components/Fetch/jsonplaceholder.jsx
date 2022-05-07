import React, {Fragment, useState, useEffect} from "react";
import {flattenObject} from "../Function/flatten-object";

const JSONPlaceholder = () => {

    const [retryBeacon, setRetryBeacon] = useState(Symbol());
    const [abortController, setAbortController] = useState(new AbortController());
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [entity, setEntity] = useState("posts");
    const [rows, setRows] = useState([]);
    const [headers, setHeaders] = useState([]);

    const entities = [
    {
        id: 1,
        value: "users",
        text: "Users"
    },
    {
        id: 2,
        value: "posts",
        text: "Posts"
    },
    {
        id: 3,
        value: "albums",
        text: "Albums"
    },
    {
        id: 4,
        value: "todos",
        text: "Todos"
    },
    {
        id: 5,
        value: "photos",
        text: "Photos"
    },
    {
        id: 6,
        value: "comments",
        text: "Comments"
    }
    ];

    const updateEntity = (event) => {
    setEntity(event.currentTarget.value);
    };

    const retry = () => {
    setRetryBeacon("posts");
    };

    const abort = () => {
    abortController.abort();
    };

    useEffect(() => {
    const currentAbortController = new AbortController();

    setLoading(true);
    setError("");
    setRows([]);
    setHeaders([]);
    setAbortController(currentAbortController);

    fetch(`https://jsonplaceholder.typicode.com/${entity}`, {
        signal: currentAbortController.signal
    }).then(response => {
        return response.json();
    }).then((rows) => {
        setHeaders(Object.keys(flattenObject(rows[0])));
        setRows(rows.map(row => flattenObject(row)));
    }).catch((error) => {
        setError(error.message);
    }).finally(() => {
        setLoading(false);
    });
    }, [entity, retryBeacon]);

    if (loading) {
    return (
        <Fragment>
        <h1>Loading</h1>
        <p>Please wait until the request has finished loading.</p>
        <button onClick={abort}>Abort</button>
        </Fragment>
    );
    }

    if (error) {
    return (
        <Fragment>
        <h1>Error</h1>
        <p>An erorr occurred: {error}</p>
        <button onClick={retry}>Retry?</button>
        </Fragment>
    );
    }

    return (
    <Fragment>
        <select value={entity} onChange={updateEntity}>
        {entities.map(({text, value, id}) => (
            <option key={id} value={value}>
            {text}
            </option>
        ))}
        </select>
        <table>
        <thead>
            <tr>
            {headers.map((header, key) => (
                <th key={key}>{header}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, rowKey) => (
            <tr key={rowKey}>
                {Object.values(row).map((column, columnKey) => (
                <td key={columnKey}>{column}</td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    </Fragment>
    );
};

export default JSONPlaceholder;