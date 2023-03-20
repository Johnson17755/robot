import React from 'react'
import Card from './Card'

const Robotlist = ({ roboFilter }) => {
   
  return (
    <section>
      {roboFilter.map((robot) => {
        return (
          <Card key={robot.id} {...robot} />
        )
      })} 
    </section>
  )
}

// robots.filter((robot => {
//   robot.name.toLowerCase().includes(searchField.toLowerCase()) 
// })


export default Robotlist