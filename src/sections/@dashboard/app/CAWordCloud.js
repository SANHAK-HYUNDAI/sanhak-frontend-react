import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Card, CardHeader } from '@mui/material';

import CAwords from "./CAwords";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export default function CAWordCloud({title, list}) {

  const options = {
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [5, 90],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };  

    return (
        <Card>
          <CardHeader title={title}/>
          <ReactWordcloud options={options} words={CAwords} />
        </Card>
      );
    }