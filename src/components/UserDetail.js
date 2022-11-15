import {useParams} from "react-router-dom";

function UserDetail(props) {

    let {userId} = useParams();


    return (
        <div>
            Jsem v user detailu {userId}
        </div>
    );
}
export default UserDetail;