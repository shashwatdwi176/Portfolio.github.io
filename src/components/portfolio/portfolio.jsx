import React from 'react'
import './portfolio.css'
import weather from '../../assests/weather.png'
import todo from '../../assests/Todo.png'
import ecomerce from '../../assests/ecommerce.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent Work
      </h5>
      <h2>Projects</h2>

      <div className='container project_container'>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={weather} alt=''></img>
          </div>
          <h3>Weather App</h3>
          <div className='project_item-cta'>
          <a href='https://github.com/shashwatdwi176/Weather-App-React' className='btn' target='_blank'>GitHub</a>
          <a href='https://shashwatdwi176.github.io/Weather-App-React/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={todo} alt=''></img>
          </div>
          <h3>Todo App</h3>
          <div className='project_item-cta'>
          <a href='https://github.com/shashwatdwi176/Todo-List' className='btn' target='_blank'>GitHub</a>
          <a href='https://shashwatdwi176.github.io/Todo-List/' className='btn btn-primary' target='_blank'>Live Demo</a></div>
        </article>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={ecomerce} alt=''></img>
          </div>
          <h3>Ecommerce App</h3>
          <div className='project_item-cta'>
          <a href='https://github.com/shashwatdwi176/Ecommerce-App-Flutter' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/shashwatdwi176/Ecommerce-App-Flutter' className='btn btn-primary' target='_blank'>Live Demo</a></div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
