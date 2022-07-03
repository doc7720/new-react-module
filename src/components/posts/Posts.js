export default function Posts({post}) {
    return (<div>

        {post.map(value => <div key={value.id}>{value.body}</div>)}

    </div>);
}