import React from "react";

//components
import AllPokemon from "./Pokemon/Pokemon";
import BtnBackToTop from "./BtnBackToTop/BtnBackToTop";

const App = (props) => {
  return (
    <>
      <AllPokemon itemsPerPage={4} />
      <BtnBackToTop />
    </>
  );
};

export default App;
