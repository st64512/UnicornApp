function Table(props) {

    const data = props.data;
    const cols = props.columns;

    return (
        <div>
            <table>
                <thead>
                <tr>
                    {cols.map( col => (
                        <th key={"th" + col.attribute}>{col.attribute}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map( d => (
                    <tr key={"tr" + d.id}>
                        {cols.map( col => (
                            <td key={"td" + d.id + col.attribute}>{(col?.component && col.component(d)) ?? d[col.attribute]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default Table;