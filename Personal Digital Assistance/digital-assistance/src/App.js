import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard"
import alexa from "./images/alexa.png"
import cortana from "./images/cortana.png"
import siri from "./images/siri.png"

function App (){

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
               <ProfileCard 
               title="Alexa" 
               handle="@alexa99" 
               image={alexa} 
               description="Alexa was created by Amazon and helps you buy things"/>
            </div>
            <div className="column is-3">
              <ProfileCard
               title="Cortana"
                handle="@cortana32" 
                image={cortana}
                description="Cortana was made by Microsoft and guides to work with windows"/>
            </div>
            <div className="column is-3">
              <ProfileCard 
              title="siri" 
              handle="@siri01" 
              image={siri} 
              description="Siri was created by Apple and helps us working around with Iphones"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App;