
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Intee.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { React, useState, useEffect } from "react";
const { greatCircleDistance } = require("great-circle-distance");

function AmbuDetailsUI() {
  const [nearest, setNearest] = useState([]);
  const [lat, setLat] = useState();
  const [range, setRange] = useState(5);
  const [long, setLong] = useState();
  

  const handleSubmit = () => {
    console.log("qk.h.as>")
  };

  const getData = () => {
    fetch("data1.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setNearest([]);
        for (let i = 0; i < data.length; i++) {
          let coords = {
            // lat1: "17.5389",
            // lng1: "78.3863",
            lat2: data[i].latitude,
            lat1: lat,
            lng2: data[i].longitude,
            lng1: long,
          };
          let distance_calculated = greatCircleDistance(coords) ;
          if (distance_calculated < range) {
            let nearest_data = {
              name: data[i].name,
              phone: data[i].Phone,
              distance: distance_calculated,
              area: data[i].area
            };
            setNearest((nearest) => [...nearest, nearest_data]);
          }
        }
        console.log("nearest data: ", nearest);
      });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    });
    getData();
  }, [lat,range]);
  return (
    <div className='intee'>
        {/* <h1 style={{ fontSize: "50px" }} className="lead text-center text-white">FINDING_AMBULANCES_NEAR_BY</h1> */}
     
        <h1 style={{ fontSize: "50px"}} className="mt-3 lead text-center text-white">Finding Ambulances NearBy</h1>
        
        {/* <h1 style={{ fontSize: "50px"}} className="lead text-center text-white">~We are here to help you~</h1> */}
        <div className='m-4'>
            <h3 className='lead'>Enter range in kms</h3>
            <input
            className="border "
            type="number"
            placeholder="Range"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            />
        </div>
        
        

        <h1 className='lead m-4' ><b>These are your nearest ambulances.</b></h1>
        <div className='m-4'>
        

        
        <Table striped responsive>
                <thead>
                <tr>
                    
                    {/* <th>Hospital Name</th> */}
                    <th>AMBULANCE DRIVER MOBILE NUMBER</th>
                    <th>AMBULANCE DISTANCE(KMS) FROM YOU</th>
                    <th>CURRENT LOCATION OF AMBULANCE</th>
                </tr>
                </thead>
                <tbody>

                
                    {nearest.map((data)=> (
                        <tr>
                                {/* <td>{data.name}</td> */}
                                <td>{data.phone}</td>
                                <td>{data.distance}</td>
                                <td>{data.area}</td>
                        </tr>
                        


                    ))}
                    
                    
                
                
                </tbody>
        </Table>



      


        </div>
      
    </div>
  );
}

export default AmbuDetailsUI;