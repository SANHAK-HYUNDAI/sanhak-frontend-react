import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Card, CardHeader } from '@mui/material';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
/* import ROwords from './ROwords' */

export default function ROWordCloud({title}) {

  const [data, setData] = useState([]);
  	
  	useEffect(() => {
		const fetchData = async() => {
          const res = await fetch('https://kw-dormitory.k-net.kr/api/ROs/statistics');
          const result = res.json();
          return result;
        }	
        
        fetchData().then(res => setData(res));
    }, []);

  const ROwords = [
    { text : "시트", value : 13557 }, 
    { text : "소음", value : 7326 }, 
    { text : "운전", value : 6550 },
     { text : "발생", value : 6048 }, 
     { text : "교환", value : 5216 }, 
     { text : "불량", value : 4841 }, 
  ]

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