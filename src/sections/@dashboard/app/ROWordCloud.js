import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Card, CardHeader } from '@mui/material';
import axios from "axios";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export default function ROWordCloud({title}) {

  const [ROwords, setROwords] = useState([]);

    // API 호출
  useEffect(() => {
  const fetchDatas = async () => {
   
      const response = await axios.get(
        'https://kw-dormitory.k-net.kr/api/ROs/statistics'
      );
      setROwords(response.data.keywords);
  };

  fetchDatas();
}, []);

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
          <ReactWordcloud options={options} words={ROwords} />
        </Card>
      );
    }