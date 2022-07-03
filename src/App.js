import Users from "./components/users/Users";
import {getUsersPosts} from "./services/user.service";
import {useState} from "react";
import Posts from "./components/posts/Posts";

export default function App() {

    let [post, setPost] = useState([]);

    const list = (id) => {

        getUsersPosts(id).then(({data}) => {

            setPost([...data]);
        })

    }

    return (<div>

        <Users list={list}/>
        <Posts post={post}/>

    </div>);
}
