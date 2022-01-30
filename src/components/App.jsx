import React from "react";

import AllPokemon from "./Pokemon/Pokemon";

const App = (props) => {
  return (
    <>
      <AllPokemon itemsPerPage={4} />
    </>
  );
};

export default App;
