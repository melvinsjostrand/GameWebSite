import { Text } from "@chakra-ui/react";
import apiClient from '../services/api-client';
import { useEffect, useState } from 'react'


interface Game {
    id: number;
    name: string;
    rating: number;
}

interface FetchGames {
    count: number;
    result: Game[];
}
const GameGrid = () => {

    const [games, setGames ]= useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect (() => {
        apiClient.get<FetchGames>("/games")
        .then(res => setGames(res.data.result))
        .catch(err => setError(err.message));
    })

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
}

export default GameGrid