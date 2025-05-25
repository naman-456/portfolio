import myImage from "../assets/mypic2.jpg"
const Home = () => {
    return (
      <>
         <div>
            <img src={myImage} className="mypic"/>
            <div className="about-me">
               <p>Hello, my name is</p>
               <h1>Naman Mamodia</h1>
               <p className="desc">
                  I'm a Senior Full-stack developer specialised in both frontend and backend development for complex scalable web apps.
                  I have 4 years of experience in Software development, currently working in healthcare based startup company Maren Solutions
                  pvt Ltd at <span className="locname">Hyderabad</span> location. 
               </p>
            </div>
         </div>
      </>
    )
}

export default Home;
