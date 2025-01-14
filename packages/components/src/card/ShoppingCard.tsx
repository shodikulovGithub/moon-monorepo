import React from 'react';

type ShoppingCardProps = {
  name: string;
  price: number;
  onAdd: () => Promise<void>; // Now `onAdd` is asynchronous
};

const ShoppingCard = (props: ShoppingCardProps) => {
  const handleAdd = async () => {
    await props.onAdd();
  };

  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ShoppingCard;
