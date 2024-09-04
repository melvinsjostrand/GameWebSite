import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/Nav/NavBar";
import GameGrid from "./components/GameDisplay/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`, //1024 px
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
