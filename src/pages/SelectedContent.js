import React, { useState, useEffect } from 'react';
import axios from 'axios';
import host from '../api/host';

const hostName = host;

export default function SelectedContent({selectId}) {

    console.log("selectedContent page : ", Number(selectId));

  // API 호출
  const [row, setRow] = useState([]);
  useEffect(() => {
    const fetchOneRow = async () => {
        const response = await axios.get(`${hostName}/api/CAs/${Number(selectId)}`);
        setRow(response.data);
    };
    fetchOneRow();
  }, []);

return (
    <>
            <h4 style={{color : "#6E6E6E" , marginLeft:'20px', marginTop:'20px'}}>content</h4>   
            <hr style={{width : 60, color: '#BCBCBC' , marginLeft:'20px', marginBottom:'20px'}}/>
            <div style={{color:'#000000', letterSpacing:'0.01em', margin:'20px'}}>
            {row.content}
              </div>
    </>
);
}