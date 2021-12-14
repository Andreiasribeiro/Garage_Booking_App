
import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import { useParams } from 'react-router-dom';
import axios from "axios";




var D = []
const Test = () => {
  const [data, setData] = useState({});
  const [part, setPart] = useState([]);
  const [items, setItem] = useState([]);
  const { id } = useParams();
  var total;
  useEffect(() => {
    axios.post('/api/bookings/get-booking-by-id', { id: id })
      .then(res => {
        console.log(res.data)
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    axios.get('/api/parts/get', { id: id })
      .then(res => {
        console.log(res.data)
        setPart(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  function getRow() {

    let list = [];

    part.map((element, index) => {
      list.push(<option value={index}>{element.name}</option>)

    });


    return list;
  }

  const onselect = (index) => {
    items.push({ name: part[index].name, cost: part[index].cost })
    setItem([...items]);
  }


  const getitem = () => {
    total = parseInt(data.totalamount);
    let list = []
    items.map((element) => {
      total = total + parseInt(element.cost)
      list.push(
        <tr>
          <td style={{  padding: 10 }}>{element.name}</td>
          <td style={{  paddingLeft: 100 }}>€{element.cost}</td>
        </tr>
      )

    })
    return list;
  }

  console.log(items);
  return (
    <div style={{ background: '#fff', textAlign: 'left', margin: 20, padding: 20 }}>
      <table>
       
        <tr>
          <td style={{ fontSize: 40, padding: 10 }}>AR Motor Garage</td>
          <td style={{ fontSize: 40, padding: 20 }}>INVOICE</td>
        </tr>
        <tr>
          <td style={{ fontSize: 30, padding: 5  }}>Customer:</td>
          <td style={{ fontSize: 25 , padding: 5 }}>{data.username}</td>
        </tr>
        <tr>
          <td style={{ fontSize: 30 , padding: 5 }}>Customer Mob no:</td>
          <td style={{ fontSize: 25, padding: 5 }}>{data.userno}</td>
        </tr>
        <tr>
          <td style={{ fontSize: 30, padding: 5  }}>Customer Email:</td>
          <td style={{ fontSize: 25, padding: 5 }}>{data.useremail}</td>
        </tr>
        <tr>
          <td style={{ fontSize: 30 , padding: 5 }}>Service Name:</td>
          <td style={{ fontSize: 25, padding: 5 }}>{data.service}</td>
        </tr>
        <tr>
          <td style={{ fontSize: 30 , padding: 5 }}>Vehicle Type:</td>
          <td style={{ fontSize: 25, padding: 5 }}>{data.vehicle_type}</td>
        </tr>
        <tr>
          <td style={{ fontSize: 30 , padding: 5 }}>Vehicle Licence:</td>
          <td style={{ fontSize: 25, padding: 5 }}>{data.vehicle_license}</td>
        </tr>
        <tr>
          <td style={{ fontSize: 30, padding: 5  }}>Service Cost:</td>
          <td style={{ fontSize: 25, padding: 5 }}>€{data.totalamount}</td>
        </tr>
        <tr>
          <td style={{ fontSize: 30, padding: 5 }}>Parts/Supplies:</td>

        </tr>
        <h4> {getitem()}</h4>
        <h3 style={{  paddingRight:20, paddingTop: 20, paddingBottom: 20 }}>Total Due: €{total}</h3>
        <h3 style={{  paddingRight:20, paddingTop: 20, paddingBottom: 20 }}>Payment due on collection.</h3>
        
        
      </table>


      <h4 style={{ fontSize: 20, color: 'grey'}}>Add Parts/Supplies</h4>
      <select onChange={e => onselect(e.target.value)}>
        {getRow()}
      </select>
      
    </div>
  )
}

class ComponentToPrint extends React.Component {

  componentDidMount() {

  }

  render() {

    return (

      <Test />
    );
  }
}

const Invoice = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div style={{ background: 'grey', margin: 20, padding: 20 }}>
      <ComponentToPrint ref={componentRef} />
      <button className='btn btn-primary' onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
export default Invoice