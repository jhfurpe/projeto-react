import {React} from "react";
import { FormWrapper, Label, Input } from "./filtersStyle";

export const Filters = () => {
    return (
      
        <FormWrapper>
          <Label htmlFor="valorMaximo">Valor Máximo:</Label>
          <Input type="text" name="valorMaximo" />
  
          <Label htmlFor="valorMinimo">Valor Mínimo:</Label>
          <Input type="text" name="valorMinimo" />
  
          <Label htmlFor="nomeBusca">Buscar Nome:</Label>
          <Input type="text" name="nomeBusca" />
        </FormWrapper>
      
    );
  };