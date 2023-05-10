import { useContext } from "react";
import { MainSpace, ImageSpace, FormSpace } from "./styles";
import { Button } from "@mui/material";
import Form from "./Form";
import { CounterContext } from "./Context";

function App() {
  const conterData = useContext(CounterContext);
  console.log(conterData);

  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <div>
          <Button onClick={ () => conterData.resta() }> - </Button>
          <Button onClick={ () => conterData.suma() }> + </Button>
        </div> 
      </FormSpace>
    </MainSpace>
  );
}

export default App;
