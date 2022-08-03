import React, { useEffect, useState } from 'react';
import Card from './Card';
import { commonStock } from '../Containers/CommonStock';

export default function CardBar() {
  const card = commonStock.useContainer();

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
