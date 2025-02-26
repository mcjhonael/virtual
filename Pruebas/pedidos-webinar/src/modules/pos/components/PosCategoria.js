import React, { useContext } from "react";
import PosContext from "../../../context/pos/posContext";
// {
//   "id": 1,
//   "name": "Cofee",
//   "description": "El café es la bebida que se obtiene a partir de los granos tostados y molidos de los frutos de la planta del café (cafeto); es altamente estimulante por su contenido de cafeína,1​ una sustancia psicoactiva. Este producto es uno de los más comercializados del mundo y una de las tres bebidas1​ más consumidas del mundo (junto con el agua y el té). Suele tomarse durante el desayuno, después de éste o incluso como único desayuno, aunque también se suele tomar en la merienda, o después del almuerzo o cena para entablar conversaciones o solo por costumbre. Es una de las bebidas sin alcohol más socializadoras en muchos países. El gusto por el café no es espontáneo, sino que debe cultivarse, puesto que su sabor es fuerte y amargo.",
//   "photo": "https://api-order-tpv.herokuapp.com/media/Plate/cofee.jpg",
//   "state": true
// },
const PosCategoria = ({ objCategoria }) => {
  const { global_categoria_id, setCategoriaActual } = useContext(PosContext);
  return (
    <button
      className={
        global_categoria_id === +objCategoria.id
          ? "btn btn-outline-primary active"
          : "btn btn-outline-primary"
      }
      onClick={() => setCategoriaActual(objCategoria.id)}
    >
      {objCategoria.name}
    </button>
  );
};

export default PosCategoria;
