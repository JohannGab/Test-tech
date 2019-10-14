import React from 'react';
import './style.scss'
import Notification from './components/Notification'

class App extends React.Component {
  state={
    notification: false
  }

  
  notificationOpen = () => {
    this.setState({ notification: true })
    setTimeout(this.notificationClose, 5000);
    console.log("open");
    
  }

  notificationClose = () => {
    this.setState({ notification: false })
    console.log("close");
  }


  render() {
  return (
    <>
    <ul className="nav">
      <li className="nav-item">
      <a className="nav-link" href="http://localhost:3000">RobotDemoApp</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="http://localhost:3000">Accueil<p className="borderBlue"></p></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000">Appeler à l'aide</a>
      </li>
      <li className="nav-item">
      <p onClick={this.notificationOpen} className="nav-link">Demander un café</p>
      </li>
  </ul>

    <header>
      
      <div className="containerHeader">
        <div className="divHeader">
          <h2>
            Test d'intégration HTML / CSS
          </h2>
          <p>Lorem ipsum dolor eratem site</p>
        </div>
      </div>
    </header>

    <section className="sectionArticle">
          <div className="ContainerArticle">
            <div className="borderArticle">
              <h5>
                Les robots domineront le monde ? <p className="borderBlue2"></p>
              </h5>
              <img src="https://via.placeholder.com/300X150/09f/fff.pngC/O" alt=""></img>
              <p>
                Quaestione igitur per multiplices dilatata fortunas cum ambigerentur quaedam,
                non nulla levius actitata constaret, post multorum clades Apollinares ambo 
                pater et filius in exilium acti cum ad locum Crateras nomine pervenissent, 
                villam scilicet suam quae ab Antiochia vicensimo et quarto disiungitur lapide, 
                ut mandatum est, fractis cruribus occiduntur.
              </p>
              <button>Découvrir</button>
            </div>
            <div className="borderArticle">
              <h5>
                Les robots domineront le monde ? <p className="borderBlue2"></p>
              </h5>
              <img src="https://via.placeholder.com/300X150/09f/fff.pngC/O" alt=""></img>
              <p>
                Quaestione igitur per multiplices dilatata fortunas cum ambigerentur quaedam,
                non nulla levius actitata constaret, post multorum clades Apollinares ambo 
                pater et filius in exilium acti cum ad locum Crateras nomine pervenissent, 
                villam scilicet suam quae ab Antiochia vicensimo et quarto disiungitur lapide, 
                ut mandatum est, fractis cruribus occiduntur.
              </p>
              <button>Découvrir</button>
            </div>
            <div className="borderArticle">
              <h5>
                Les robots domineront le monde ? <p className="borderBlue2"></p>
              </h5>
              <img src="https://via.placeholder.com/300X150/09f/fff.pngC/O" alt=""></img>
              <p>
                Quaestione igitur per multiplices dilatata fortunas cum ambigerentur quaedam,
                non nulla levius actitata constaret, post multorum clades Apollinares ambo 
                pater et filius in exilium acti cum ad locum Crateras nomine pervenissent, 
                villam scilicet suam quae ab Antiochia vicensimo et quarto disiungitur lapide, 
                ut mandatum est, fractis cruribus occiduntur.
              </p>
              <button>Découvrir</button>
            </div>
            <div className="borderArticle">
              <h5>
                Les robots domineront le monde ? <p className="borderBlue2"></p>
              </h5>
              <img src="https://via.placeholder.com/300X150/09f/fff.pngC/O" alt=""></img>
              <p>
                Quaestione igitur per multiplices dilatata fortunas cum ambigerentur quaedam,
                non nulla levius actitata constaret, post multorum clades Apollinares ambo 
                pater et filius in exilium acti cum ad locum Crateras nomine pervenissent, 
                villam scilicet suam quae ab Antiochia vicensimo et quarto disiungitur lapide, 
                ut mandatum est, fractis cruribus occiduntur.
              </p>
              <button>Découvrir</button>
            </div>
          </div>
        </section>

        <Notification 
        Notification={this.state.notification}
        />

        <footer>
          <div>
            <p>Pied de page</p>
          </div>
        </footer>
      
    </>
  );
}
}

export default App;
