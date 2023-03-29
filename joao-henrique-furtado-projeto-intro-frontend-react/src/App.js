import { React } from 'react';
import { Home } from './Components/Home/Home';
import { Cart } from './ShoppingCart/Cart/Cart';
import { Items } from './ShoppingCart/Items/Item';
import { Filters } from './Components/Filters/Filters';



export default function App() {
  return (
    <div>
      <Home />
      <Filters/>
      <Cart/>
      <Items />
      
      
    </div>
  );
}

