import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  MesaVerde();
  RMFunctions.wildlife();
  console.log(RMFunctions.trees);
  RMFunctions.elevation();

  return (
    <div>
      <MesaVerde />
      <h1>Colorado State Parks!</h1>
    </div>
  );
}

export default ColoradoStateParks;
