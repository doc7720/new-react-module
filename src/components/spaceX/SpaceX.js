import {useEffect, useState} from "react";
import Space from "../space/Space";


const SpaceX = (item) => {

    let [space, setSpace] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(value => {
                setSpace(value)
            })
    }, [])


    return (
        <div>
            {space.map((index, item ) => <Space key={index} item={} />)}
        </div>
    )

}

export default SpaceX;