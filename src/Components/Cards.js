import React from 'react';
import { Card } from './Style';

const Cards = (props) => {

  return (
    <div>
    <Card
      whileInView={{ opacity: [0, 1] }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
      opacity: { duration: 0.76 },
  }}
  initial={{ opacity: 0 }}
  Background={props.Background} direction={props.direction} direction2={props.direction2} gradient={props.gradient} min={props.min} resize={props.resize}
  height={props.height} style={props.style} hr={props.hr} max={props.max}>
      {props.children}
    </Card>
    </div>
  )
}

export default Cards;