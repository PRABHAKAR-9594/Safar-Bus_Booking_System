import React from 'react';
import { useSelector } from 'react-redux';

function TicketDetails() {

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

  const pass1name = passengers[0]['name']
  const pass1age = passengers[0]['age']
  const pass1gender = passengers[0]['gender']
  const pass1seatNum = passengers[0]['seatNum']
  const pass1mobNum = passengers[0]['mobNum']
  const pass1add = passengers[0]['address']

  if( !passengers[1]){
    return ;
  }else if( !passengers[1]){
    const pass2name = passengers[0]['name']
    const pass2age = passengers[0]['age']
    const pass2gender = passengers[0]['gender']
    const pass2seatNum = passengers[0]['seatNum']
    const pass2mobNum = passengers[0]['mobNum']
    const pass2add = passengers[0]['address']
  }else if( !passengers[2]){
    const pass2name = passengers[0]['name']
    const pass2age = passengers[0]['age']
    const pass2gender = passengers[0]['gender']
    const pass2seatNum = passengers[0]['seatNum']
    const pass2mobNum = passengers[0]['mobNum']
    const pass2add = passengers[0]['address']

    const pass3name = passengers[0]['name']
    const pass3age = passengers[0]['age']
    const pass3gender = passengers[0]['gender']
    const pass3seatNum = passengers[0]['seatNum']
    const pass3mobNum = passengers[0]['mobNum']
    const pass3add = passengers[0]['address']
  }else if( !passengers[3]){
    const pass2name = passengers[0]['name']
    const pass2age = passengers[0]['age']
    const pass2gender = passengers[0]['gender']
    const pass2seatNum = passengers[0]['seatNum']
    const pass2mobNum = passengers[0]['mobNum']
    const pass2add = passengers[0]['address']

    const pass3name = passengers[0]['name']
    const pass3age = passengers[0]['age']
    const pass3gender = passengers[0]['gender']
    const pass3seatNum = passengers[0]['seatNum']
    const pass3mobNum = passengers[0]['mobNum']
    const pass3add = passengers[0]['address']

    const pass4name = passengers[0]['name']
    const pass4age = passengers[0]['age']
    const pass4gender = passengers[0]['gender']
    const pass4seatNum = passengers[0]['seatNum']
    const pass4mobNum = passengers[0]['mobNum']
    const pass4add = passengers[0]['address']
}else if( !passengers[4]){
  const pass2name = passengers[0]['name']
    const pass2age = passengers[0]['age']
    const pass2gender = passengers[0]['gender']
    const pass2seatNum = passengers[0]['seatNum']
    const pass2mobNum = passengers[0]['mobNum']
    const pass2add = passengers[0]['address']

    const pass3name = passengers[0]['name']
    const pass3age = passengers[0]['age']
    const pass3gender = passengers[0]['gender']
    const pass3seatNum = passengers[0]['seatNum']
    const pass3mobNum = passengers[0]['mobNum']
    const pass3add = passengers[0]['address']

    const pass4name = passengers[0]['name']
    const pass4age = passengers[0]['age']
    const pass4gender = passengers[0]['gender']
    const pass4seatNum = passengers[0]['seatNum']
    const pass4mobNum = passengers[0]['mobNum']
    const pass4add = passengers[0]['address']

    const pass5name = passengers[0]['name']
    const pass5age = passengers[0]['age']
    const pass5gender = passengers[0]['gender']
    const pass5seatNum = passengers[0]['seatNum']
    const pass5mobNum = passengers[0]['mobNum']
    const pass5add = passengers[0]['address']
}
    return (
        <>
        </>
    )
}

export default TicketDetails
