import React from 'react';
import App from './components/App';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
render(
  <BrowserRouter>
<App />  </BrowserRouter>, document.getElementById('app'));

const data = [{
  "id": 1,
  "first_name": "Giulio",
  "last_name": "Alliban",
  "email": "galliban0@sun.com",
  "gender": "Male",
  "ip_address": "30.129.85.236"
}, {
  "id": 2,
  "first_name": "Brett",
  "last_name": "Woolfoot",
  "email": "bwoolfoot1@si.edu",
  "gender": "Female",
  "ip_address": "79.145.229.54"
}, {
  "id": 3,
  "first_name": "Rich",
  "last_name": "Hourican",
  "email": "rhourican2@vkontakte.ru",
  "gender": "Male",
  "ip_address": "119.33.236.189"
}, {
  "id": 4,
  "first_name": "Catharine",
  "last_name": "De Gowe",
  "email": "cdegowe3@qq.com",
  "gender": "Female",
  "ip_address": "99.121.230.200"
}, {
  "id": 5,
  "first_name": "Duncan",
  "last_name": "Blouet",
  "email": "dblouet4@deviantart.com",
  "gender": "Male",
  "ip_address": "25.196.171.147"
}]

const nodeCB = (data, cb) => {
  const errorMessage = 'no data to be found'
  if(!data) cb(errorMessage, null)

  cb(null, data)
}

nodeCB(data, (err, success) => {
  if(err) console.log(err)

  let mapDataForNames = success.map(data => {
    console.log(data.first_name)
  })
  return mapDataForNames
})

const controller = (request, response) => {
  model(request, (error, success) => {
    if(error) console.log(error)

    console.log(success)
  })
}

const model = (request, cb) => {
  if(!request) cb('error', null)

  cb(null, console.log('success'))
}