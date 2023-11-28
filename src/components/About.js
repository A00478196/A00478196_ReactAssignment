import profile from '../assets/profile_2.jpg'
import "../styles/About.css"

const About = () => {
    return (
       <div id="aboutSection">
          

            <div className="aboutMe">
            <div className="profile">
                <img src={profile} alt={"my_profile_picture"}/>
                <h2>Kritika Koirala - This is DEV</h2>

            </div>
                <p> I am from Kathmandu, Nepal. I graduated with BSc (Hons) Computing degree in 2021 from Nepal and worked as a web developer for almost 2.5 years. 
                    Outside of work, I love reading books (ficton, though). I am not very outgoing and love to stay indoors.
                </p>

                    <p>
                    Having completed my undergratude degree in 2021, I worked as a web developer for almost 2.5 years
                    before deciding I needed a Master's degree. I started researching on what I'd like to study and
                    stumbled upon the MCDA program of Saint Mary's Univerisity. I decided to go for it because it was
                    a combination of both computing and data analytics, at least one of which I was familiar with. What
                    I liked most about this course is that it is a perfect mixure of academic and industry knowledge because
                    of which, I think I will have a easier time to blend into the industry after my studies.
                    </p>
                 
            
                <div>
               
            </div>
            </div>

           
       </div>
    );
   };
   
   
export default About;

