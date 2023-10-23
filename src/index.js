import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./components/Nav";
import { Subjects } from "./components/Subjects";
import { Home } from "./components/Home";
import { UserQuestion } from "./components/UserQuestion";
import PreguntaComponent from "./components/AnswaresUsers";
import ReplyModal from "./components/ReplyModal";
// import "conexion.php";

const App = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);

  return (
    <React.StrictMode>
      <Nav />
      <Home />
      <Subjects />
      <UserQuestion />
      <PreguntaComponent
        preguntaData={{
          titulo: "Sintaxis de JavaScript",
          descripcion:
            "¿Pueden explicarme la sintaxis básica de JavaScript? Estoy interesado en aprenderlo.",
          usuario: "Carlos",
        }}
        estadoModal={estadoModal}
        cambiarEstadoModal={cambiarEstadoModal}
      />
      <PreguntaComponent
        preguntaData={{
          titulo: "Sintaxis de JavaScript",
          descripcion:
            "¿Pueden explicarme la sintaxis básica de JavaScript? Estoy interesado en aprenderlo.",
          usuario: "ariel",
        }}
        estadoModal={estadoModal}
        cambiarEstadoModal={cambiarEstadoModal}
      />
      <ReplyModal
        estadoModal={estadoModal}
        cambiarEstadoModal={cambiarEstadoModal}
      />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
