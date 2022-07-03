export default function User({item, list}) {

    const detail = () => {
        list(item.id);

    }
    return (<div>

        <h3>{item.id}. {item.name}  <button onClick={detail}>details</button></h3>

    </div>);
}