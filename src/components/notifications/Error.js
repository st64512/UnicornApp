function Error({error, message}) {
    return <div style={{backgroundColor: "darksalmon"}}>
        <h1>{error}</h1>
        <p>{message}</p>
    </div>;
}

export default Error;