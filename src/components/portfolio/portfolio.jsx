import React from 'react'
import './portfolio.css'
import pinaakEdutechImg from '../../assests/PINAAK_Edutech.png'
import pinaakPrepMasterImg from '../../assests/PINAAK_PrepMaster.png'
import pinaakWheelsImg from '../../assests/Pinaak_Wheels.png'

const Portfolio = () => {
return ( <section id='portfolio'> <h5>My Recent Work</h5> <h2>Projects</h2>

```
  <div className='container project_container'>

    {/* PINAAK Edutech (LMS) */}
    <article className='project_item'>
      <div className='project_item-image'>
        <img src={pinaakEdutechImg} height={250} alt='PINAAK Edutech LMS Screenshot' />
      </div>
      <h3>PINAAK Edutech (LMS)</h3>
      <p>
        Next.js, Node.js, AWS, Clerk, Stripe, Docker, Shadcn, DynamoDB, Lambda
      </p>
      <div className='project_item-cta'>
        <a
          href='https://github.com/shashwatdwi176/Learning-Management-System-NextJS-Aws'
          className='btn'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
        <a
          href='https://learning-management-system-next-js-aws.vercel.app/'
          className='btn btn-primary'
          target='_blank'
          rel='noreferrer'
        >
          Live Demo
        </a>
      </div>
    </article>

    {/* PINAAK PrepMaster (AI Mock Interview) */}
    <article className='project_item'>
      <div className='project_item-image'>
        <img src={pinaakPrepMasterImg} alt='PINAAK PrepMaster Screenshot' />
      </div>
      <h3>PINAAK PrepMaster (AI Mock Interview)</h3>
      <p>
        Next.js, Firebase, Vapi AI, Google Gemini, Zod, Shadcn, Tailwind CSS
      </p>
      <div className='project_item-cta'>
        <a
          href='https://github.com/shashwatdwi176/PINAAK-PrepMaster'
          className='btn'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
        <a
          href='https://github.com/shashwatdwi176/PINAAK-PrepMaster'
          className='btn btn-primary'
          target='_blank'
          rel='noreferrer'
        >
          Live Demo
        </a>
      </div>
    </article>

    {/* PINAAK Wheels (Cab Microservice) */}
    <article className='project_item'>
      <div className='project_item-image'>
        <img src={pinaakWheelsImg} alt='PINAAK Wheels Screenshot' />
      </div>
      <h3>PINAAK Wheels (Cab Microservice)</h3>
      <p>
        Node.js, Express.js, MongoDB, RabbitMQ
      </p>
      <div className='project_item-cta'>
        <a
          href='https://github.com/shashwatdwi176/pinaak-wheels'
          className='btn'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
        <a
          href='https://github.com/shashwatdwi176/pinaak-wheels'
          className='btn btn-primary'
          target='_blank'
          rel='noreferrer'
        >
          Live Demo
        </a>
      </div>
    </article>

  </div>
</section>


)
}

export default Portfolio
