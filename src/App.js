import './App.css';
import Simpsons from "./components/Simpsons/Simpsons";
import Persons from "./components/Persons/Persons";


function App() {

    return (
        <div>
            <div className={'wrap'}>
                <Simpsons
                    name={'Homer'}
                    desc={'Homer is a sweet and funny, but sometimes rude and impolite father of the family.'}
                    photo={'https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/200px-Homer_Simpson_2006.png'}
                />
                <Simpsons
                    name={'Bart'}
                    desc={'Bart is the eldest child of Homer and Marge Simpson.'}
                    photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
                />
                <Simpsons
                    name={'Marge'}
                    desc={'One of the main characters in the animated series The Simpsons, the wife of Homer Simpson, the mother of Fox and Bart.'}
                    photo={'https://upload.wikimedia.org/wikipedia/ru/thumb/0/0b/Marge_Simpson.png/217px-Marge_Simpson.png'}
                />
                <Simpsons
                    name={'Lisa'}
                    desc={'Lisa is an extremely smart eight-year-old girl, one of the smartest in the series'}
                    photo={'data:image/jpeg;base64,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'}
                />
                <Simpsons
                    name={'Burns'}
                    desc={'Colorful character of the animated series The Simpsons.'}
                    photo={'https://upload.wikimedia.org/wikipedia/ru/5/56/Mr_Burns.png'}
                />
            </div>
            <div className={'target'}>
                <Persons
                    id={'48'}
                    name={'Black Rick'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/48.jpeg'}
                />
                <Persons
                    id={'135'}
                    name={'Garment District Rick'}
                    status={'Dead'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/135.jpeg'}
                />
                <Persons
                    id={'260'}
                    name={'Phillip Jacobs'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/260.jpeg'}
                />
                <Persons
                    id={'440'}
                    name={'Veterinary Nurse'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/440.jpeg'}
                />
                <Persons
                    id={'630'}
                    name={'Morty Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/630.jpeg'}
                />
                <Persons
                    id={'660'}
                    name={'Morty’s Mother-in-law'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                    image={'https://rickandmortyapi.com/api/character/avatar/660.jpeg'}
                />
            </div>
        </div>
    );
}

export default App;
