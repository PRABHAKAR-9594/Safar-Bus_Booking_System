import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function TicketDetails() {
const token=localStorage.getItem("token")
  const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'x-access-token': token,
    },
  });



  const pnr = localStorage.getItem('pnr')
  const ticketId = localStorage.getItem('ticketId')
  const userName = localStorage.getItem('username');
  const passengers = useSelector((state) => state.passengers.passengers);
  const userId = localStorage.getItem('ID')
  const busNumber = useSelector((state) => state.businfo.busNumber)
  const busName = useSelector((state) => state.businfo.busName)
  const busType = useSelector((state) => state.businfo.busType)
  const busClass = useSelector((state) => state.businfo.busClass)
  const busSource = useSelector((state) => state.businfo.busSource)
  const busSouceTime = useSelector((state) => state.businfo.busSouceTime)
  const busDestination = useSelector((state) => state.businfo.busDestination)
  const busDestinationTime = useSelector((state) => state.businfo.busDestinationTime)
  const foodFacility = useSelector((state) => state.businfo.foodFacility)
  const source = useSelector((state) => state.filter.source)
  const destination = useSelector((state) => state.filter.destination)
  const date = useSelector((state) => state.filter.date)
  const totalPrice = useSelector((state) => state.seatNumPrice.totalPrice)
  const payemntMode = useSelector((state) => state.paymentMode.paymentMode)
  console.log(ticketId,userName,userId,busNumber,source,busDestinationTime)
  const pass1 = {
    name: passengers[0]?.name,
    age: passengers[0]?.age,
    gender: passengers[0]?.gender,
    seatNum: passengers[0]?.seatNum,
    mobNum: passengers[0]?.mobNum,
    address: passengers[0]?.address
  };
  
  // Create an empty array to hold passenger objects
  let passengerDetails = [];
  
  // Add the first passenger to the array
  passengerDetails.push(pass1);
  
  // Check and create objects for other passengers if they exist
  if (passengers[1]) {
    const pass2 = {
      name: passengers[1].name,
      age: passengers[1].age,
      gender: passengers[1].gender,
      seatNum: passengers[1].seatNum,
      mobNum: passengers[1].mobNum,
      address: passengers[1].address
    };
    passengerDetails.push(pass2);  // Add to the array
  }
  
  if (passengers[2]) {
    const pass3 = {
      name: passengers[2].name,
      age: passengers[2].age,
      gender: passengers[2].gender,
      seatNum: passengers[2].seatNum,
      mobNum: passengers[2].mobNum,
      address: passengers[2].address
    };
    passengerDetails.push(pass3);  // Add to the array
  }
  
  if (passengers[3]) {
    const pass4 = {
      name: passengers[3].name,
      age: passengers[3].age,
      gender: passengers[3].gender,
      seatNum: passengers[3].seatNum,
      mobNum: passengers[3].mobNum,
      address: passengers[3].address
    };
    passengerDetails.push(pass4);  // Add to the array
  }
  
  if (passengers[4]) {
    const pass5 = {
      name: passengers[4].name,
      age: passengers[4].age,
      gender: passengers[4].gender,
      seatNum: passengers[4].seatNum,
      mobNum: passengers[4].mobNum,
      address: passengers[4].address
    };
    passengerDetails.push(pass5);  // Add to the array
  }
  
  const fetchBusData = async () => {
    try {
    
      const response = await api.post('/bookticket', {userid:userId,userName:userName,BusNumber:busNumber,totalPrice:totalPrice,"Bus_Type":busType,"Bus_class":busClass,"SourceTiming":busSouceTime,"DestinationTiming":busDestinationTime,"FoodFacility":foodFacility,"Source":source,"Date":Date,"Destination":busDestination,"PnrNumber":pnr,"PaymentType":payemntMode,"PassangerDetails":{"PassangerDetails":passengerDetails}});
       console.log(passengerDetails)
    } catch (error) {
      console.error('Error fetching bus data:', error);
    }
  };
  fetchBusData()

}

export default TicketDetails
