import React from "react";
import { getNombre } from "./nombresService";

export const NombresComponent: React.FC = () => {
  const [nombre, setNombre] = React.useState<string>("Vera");

  React.useEffect(() => {
    setNombre(getNombre(Math.floor(Math.random() * 4)));
  }, []);

  return (
    <div>
      <span className="rainbow-color">
        Wellcome to the Rainbow Kingdom: {nombre}
      </span>
    </div>
  );
};
