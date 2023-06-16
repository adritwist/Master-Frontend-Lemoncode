import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Character = () => {
    const [personaje, setPersonaje] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(r => {return r.json()})
            .then(r => {setPersonaje(r)})
    },[])

    return (
        <div className="card">
            <h1>{personaje?.name}</h1>
            <hr />
            <img src={personaje?.image} alt="" className="rounded" />
            <p className="p-8"><b>Gender: </b>{personaje?.gender}</p>
            <p><b>Specie: </b>{personaje?.species}</p>
            <p><b>Status: </b>{personaje?.status}</p>
            <p><b>Origin: </b>{personaje?.origin.name}</p>
            <p><b>Location: </b>{personaje?.location.name}</p>
            <Link to={"/"} className="btn btn-outline-primary">Volver</Link>
        </div>
    )
}