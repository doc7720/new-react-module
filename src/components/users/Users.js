import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";

export default function Users({list}) {

    let [users, setUsers] = useState([]);

    useEffect(() => {

        getUsers().then(({data}) => setUsers([...data]));

    }, []);

    return (<div>
        {

            users.map(item => <User item={item} key={item.id} list={list}/>)

        }

    </div>);
}
