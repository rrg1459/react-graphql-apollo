import React from "react";
import { useQuery, gql } from "@apollo/client";
import './App.css';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(GET_LOCATIONS);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id} className="App">
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <p className="App-text">{description}</p>
      <br />
    </div>
  ));
}