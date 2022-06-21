import './Simpsons.css';

function Simpsons(props) {
    let {name, desc, photo} = props;

    return (<div className={'container'}>
        <h2>{name}</h2>
        <p>{desc}</p>
        <img src={photo} alt="Picture"/>
    </div>)
}

export default Simpsons;