import React, { useEffect, useState } from 'react';
import Card from './Card';
import { stockContainer } from '../../Containers/StockContainer';

export default function CardBar() {
  const card = stockContainer.useContainer();

  return (
    <div className="row">
      {card &&
        card.map((cardItems) => {
          return (
            <Card
              symbol={cardItems.symbol}
              price_increment={cardItems.price_increment}
            />
          );
        })}
    </div>
  );
}
