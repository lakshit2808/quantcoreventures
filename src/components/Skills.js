import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tech Stack & Technology we use</h2>
                        <p>We provide the Full Stack Application Solution for you. Our developers have developed countless projects successfully and have extensive knowledge of HTML5, CSS Frameworks(Tailwind, BootStrap), JS Frameworks (React JS, Express, NextJs,Angular), Python (Django, Flask, FastAPI), Java, and Node JS for the front end. For the creation of cross-platform mobile apps, React Native is our primary coding language. We operate with most non-relational databases like Firebase, MongoDB and DynamoDB as well as traditional ones like PostgreSQL, MSSQL, etc. Our team has experience with Devops using Docker, Nginx, and other tools on AWS, Google Cloud, etc.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="img" />
                                <h3>Algorithmic Trading</h3>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="img" />
                                <h3>Full Stack Application Development</h3>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img" />
                                <h3>AI Powered Solutions</h3>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="img" />
                                <h3>Business Automation</h3>
                            </div>                            
                            <div className="item">
                                <img src={meter1} alt="img" />
                                <h3>Trading Bot as a Service</h3>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="img" />
                                <h3>MVP Development</h3>
                            </div>  
                            <div className="item">
                                <img src={meter2} alt="img" />
                                <h3>DApp Development</h3>
                            </div>                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  )
}
