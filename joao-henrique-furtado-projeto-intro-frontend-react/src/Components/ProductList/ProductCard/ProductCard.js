import React, { useState } from 'react';
import { ProductList } from '../../Assents/ProductList';
import {
  ProductCardWrapper,
  ProductCardItem,
  ProductCardHeader,
} from './productCardStyle';

export const ProductCard = () => {
  const [order, setOrder] = useState('Crescente');
  const [products, setProducts] = useState(ProductList);

  const sortedProducts =
    order === 'Crescente'
      ? products.sort((a, b) => a.value - b.value)
      : products.sort((a, b) => b.value - a.value);

  return (
    <ProductCardWrapper>
      <ProductCardHeader>
        <h2>Lista de Produtos ({products.length})</h2>
        <button
          className="order-btn"
          onClick={() =>
            setOrder(order === 'Crescente' ? 'Decrescente' : 'Crescente')
          }
        >
          {order === 'Crescente' ? 'Ordenar Decrescente' : 'Ordenar Crescente'}
        </button>
      </ProductCardHeader>
      {sortedProducts.map((product) => (
        <ProductCardItem key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Preço: R$ {product.value.toFixed(2)}</p>
          <button>Adicionar Produto</button>
        </ProductCardItem>
      ))}
    </ProductCardWrapper>
  );
};
