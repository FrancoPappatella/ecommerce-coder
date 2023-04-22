import React, { useEffect, useState } from "react";
import "./pika.css";

export const Pika = () => {
  const [pokemon, setPokemon] = useState("");

  const [id, setId] = useState(1);

  const [busqueda, setBusqueda] = useState("");

  const [number, setNumber] = useState(1);

  const cambiar = () => {
    setNumber(Math.floor(Math.random() * (27 - 1 + 1) + 1));
    setId(number);
  };

  const buscar = (e) => {
    setBusqueda(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (busqueda.length > 2) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemon({
            numero: data.id,
            nombre: data.name,
            img: data.sprites.front_default,
          });
        });
    }
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          numero: data.id,
          nombre: data.name,
          img: data.sprites.front_default,
        });
      });
  }, [number]);

  return (
    <>
      <hr />

      <div>
        <div className="pika">
          <h3>{pokemon.numero}</h3>
          <h3>{pokemon.nombre}</h3>
          <img src={pokemon.img} />
        </div>

        <div id="btn-container">
          <form onSubmit={submit}>
            <input type="text" onChange={buscar} />
            <input type="submit" value="buscar" />
          </form>
          <button onClick={cambiar} className="btn btn-primary">
            Cambiar pokemon
          </button>
        </div>
      </div>
    </>
  );
};
