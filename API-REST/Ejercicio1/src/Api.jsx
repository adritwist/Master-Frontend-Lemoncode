import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Api = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(r => {return r.json()})
            .then(r => {setPersonajes(r)})
    },[])

    const {results} = personajes;

    return (
        <>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Imágen</th>
                        <th>Nombre</th>
                        <th>Status</th>
                        <th>Species</th>
                        <th>Detalle</th>
                    </tr>
                </thead>
                {
                    results?.map(personaje => {
                        return (
                            <tbody key={personaje.id}>
                                <tr>
                                    <td><img src={personaje.image} alt="" className="rounded" /></td>
                                    <td>{personaje.name}</td>
                                    <td>{personaje.status}</td>
                                    <td>{personaje.species}</td>
                                    <td><Link to={`/character/${personaje.id}`} className='btn btn-outline-primary'>ver detalle</Link></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </>
    )
}