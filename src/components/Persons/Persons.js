import './Persons.css';

function Persons(props) {
    let {id, name, status, species, gender, image} = props;

    return (<div className={'person'}>
        <h2>{id}. {name}</h2>
        <p>{status}</p>
        <p>{species}</p>
        <p>{gender}</p>
        <img src={image} alt="Photo"/>
    </div>)
}

export default Persons;