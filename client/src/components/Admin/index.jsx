import './admin.css'
import {setState, useEffect, useState} from 'react'
import axios from 'axios'
import EventRequest from './EventRequest'


function Admin() {
  // const [eventreqs, setEventreqs] = useState([])
  const incomingRequests = [{
    name: "Dance",
    description: 'dance',
    date: '2021-11-04',
    start_time: '8 PM',
    end_time:   '10 PM',
    is_active:   'false',
    purpose:    'Personal',
    image: 'https://www.danceinforma.com/wp-content/uploads/2019/12/Alvin-Ailey-American-Dance-Theater.-Photo-by-Andrew-Eccles..jpg'
  }]
  useEffect(() => {
    const url = `api/event_bookings/`
    console.log("url....", url)
    const events = {}
    const params = {confirmation: 'false'}
 
    // const confirmation = "pending"
    // if (status) params['status'] = `${moment(startDate).format().slice(0,10)}`
    // axios.get("api/event_bookings" , {params})
    //   .then(res => {     
    //     const data = res.data
    //     console.log("data for admin", data)
    //     const user_id = data[0].user_id
    //     const event_id = data[0].event_id
    //     events['user_id'] = user_id
    //     axios.get(`/api/users/${user_id}`)
    //       .then(res => {
    //         const data = res.data
    //         events['user_name'] = data[0].name
    //           axios.get(`/api/events/${event_id}`)
    //           .then(res => {
    //             const data = res.data
    //             events['user_name'] = data[0].name
    //   })

    }, [])

 
  return (
    <div className="admin-container">
      <div className="container">
        <div className="admin-nav">
          <div className="admin-nav-left"><h5>You are logged in as ADMIN</h5></div>
          <div className="admin-nav-right text-danger">        <h3 className=" ms-3"style={{color: 'tomato'}}><i class="fas fa-envelope"></i></h3></div>
        </div>
      <div class="mt-3 border-top border-light">
      <h4 className="mt-5 mb-5 fst-italic fw-light">Here are some new reaquest</h4>
        {
          incomingRequests.map(eventreq =>  <EventRequest key={eventreq.id} name={eventreq.name} desc={eventreq.description} date={eventreq.date} start_time={eventreq.start_time} end_time={eventreq.end_time}/>)
        }  
      </div>
  
      </div>
    </div>
   
  )

}

export default Admin