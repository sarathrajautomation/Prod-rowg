import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" >
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" >
       <GenreList/>
        </GridItem>
      </Show>

      <GridItem area="main" >
     <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
