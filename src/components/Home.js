import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './About.css'
import aboutimg from '../assets/aboutus.jpg';import './Service.css';

const services = [
  {
    title: 'Online Courses and Classes',
    description: 'Avail the best of the online classes and courses for a headstart in the field you desire. Packed and loaded with nothing less than the best.',
    imageUrl: 'https://source.unsplash.com/400x300/?courses',
  },
  {
    title: 'Live Webinars and Workshops',
    description: 'Fuse in with the best of the best in their fileds with our live sessions and webinars. Also register yourself for a trial to avail one to one mentorship. ',
    imageUrl: 'https://source.unsplash.com/400x300/?webinars',
  },
  {
    title: 'Personalized Learning Experience',
    description: 'No need to hurry! Complete the courses at your own pace with the self-paced learning resources available 24*7 over the protal after successful registration.',
    imageUrl: 'https://source.unsplash.com/400x300/?personalized',
  },
];



const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to E-Learning App platform! </h1>
      <center><h3><b>As an experienced educator and lifelong learner, I am thrilled to share my knowledge <br></br>and expertise with students from around the world.</b></h3></center>  <br></br>
      <button className="button">
        <Link to="/course" className="link">
          Start Learning
        </Link>
      </button><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>


      <div className="About-section"><br></br>
            <div className="About-container">
                <div className="About-text">
                    <h1 className="title">About Me</h1>
                    
                    <p>
                    With 4 years of experience in React Js, I have had the privilege of working with diverse learners across different age groups and backgrounds. I am deeply passionate about fostering a love for learning and empowering students to reach their full potential.
                    </p>
                    <p>
                    Throughout my teaching career, I have developed a strong understanding of various learning styles and effective instructional strategies. My courses are designed to be engaging, interactive, and tailored to meet the unique needs of each student. I firmly believe that education should be a transformative experience that not only imparts knowledge but also inspires critical thinking, creativity, and problem-solving skills.
                    </p></div>
                <div className="About-image">
                    <img src={aboutimg}
                        alt="About Us" />
                </div><br></br><br></br>
            </div>
        </div><br></br><br></br><br></br>

        <div>
      {services.map((service, index) => (
        <div className={`Service-section-${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
          <div className="Service-container">
            <div className="Service-image">
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <div className="Service-text">
              <h1 className="title">{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
