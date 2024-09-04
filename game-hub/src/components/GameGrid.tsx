import { Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";




const GameGrid = () => {
    const {games , error} = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games && games.map(game => <li key={game.id}>{game.name}</li>)}
        {!games && <p>No data found</p>}
      </ul>
    </>
  );
}

export default GameGrid