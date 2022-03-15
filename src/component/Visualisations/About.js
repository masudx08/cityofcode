import { Memory } from '@mui/icons-material'
import React from 'react'

function About() {
  return (
    <div className="dashboardTop__rightAboutContainer">
    <h4>
      <span>About</span>
      <Memory />
    </h4>
    <p>
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a
      type specimen book.
      <span>Click here</span>
    </p>
  </div>
  )
}

export default About