import React from 'react';
import TripList from './TripList'
import TravelCalendar from './TravelCalendar';

function Dashboard() {
  return(
    <>
      <h1>Dashboard</h1>
      <TripList />
      <TravelCalendar />
    </>
  )
}

export default Dashboard;

