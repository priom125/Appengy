import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import AppDetailsCard from '../components/AppDetailsCard';

function AppDetails() {
  const AppData = useLoaderData();
  // console.log(AppData)
  const {id} = useParams()
  // console.log(params)
  const app = AppData.find(a => String(a.id)=== id)

  console.log(app)

  return (
    <div>
      <AppDetailsCard app={app}/>
    </div>
  )
}

export default AppDetails