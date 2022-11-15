import {useEffect, useState} from "react";
import Table from "./Table";

function MySecondTable({baseUri, columns}) {

    const [data, setData] =  useState([]);
    const [page, setPage] = useState(1);
    const limit = 3;
    const fetchData = async () => {
        const response = await fetch(baseUri  + "?_page=" + page + "&_limit=" + limit)
        if(!response.ok) {
            throw new Error("Data could not fetch data");
        }
        setData(await response.json());
    };

    useEffect( () => {
        fetchData()
    }, [page]);

    return (
        <div>
            <Table data={data} columns={columns}/>
            <div className="pagination">
                <button onClick={() => setPage(page+1)}>NextPage</button>
                <p>{page}</p>
                <button onClick={() => setPage(page-1)}>PreviousPage</button>
            </div>
        </div>
    );
}
export default MySecondTable;