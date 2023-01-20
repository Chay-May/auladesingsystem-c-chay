import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Card from "./Components/Card/Card";

function App() {
  const [card, setCard] = useState([
    { nome: "sebastião", profissao: "médico", seguidores: 13, seguindo: 15 },
    { nome: "sebastião", profissao: "médico", seguidores: 13, seguindo: 15 },
    { nome: "sebastião", profissao: "médico", seguidores: 13, seguindo: 15 },
  ]);

  const mapLista = card.map((card) => {
    return (
      <Card
      key={card.nome}
        nome={card.nome}
        profissao={card.profissao}
        seguidores={card.seguidores}
        seguindo={card.seguindo}
      />
    );
  });

 
  return (
    <ChakraProvider resetCSS>
      <Flex gap={"16px"} wrap={"wrap"} justifyContent={"center"} >
      {mapLista}
      </Flex>
    </ChakraProvider>
  )
 
}

export default App;
