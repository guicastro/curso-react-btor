import * as React from 'react';
import './App.css';
import './Profile.css';
import Profile from './Profile';

class App extends React.Component {

  Profile = new Profile;

  render() {

    return (
      <div className="App">
        <div className="ProfileBody">
          <div className="ProfileTop"><img src={this.Profile.Top} /></div>
          <div className="ProfileLeft">
            <img src={this.Profile.Picture} className="ProfilePicture" />
            <p className="ProfileDataTitle">{this.Profile.Friends}</p>
            <p className="ProfileDataText">Friends</p>
            <p className="ProfileDataTitle">{this.Profile.Photos}</p>
            <p className="ProfileDataText">Photos</p>
          </div>
          <div className="ProfileRight">
            <h1>{this.Profile.FirstName} <strong>{this.Profile.LastName}</strong></h1>
            <h2>{this.Profile.Title}</h2>
            <p className="ProfileDataText black"><i className="fa fa-phone" /> {this.Profile.Phone}</p>
            <p className="ProfileDataText black">
              <i className="fa fa-envelope" /> <a href="mailto:{this.Profile.Email}">{this.Profile.Email}</a>
            </p>
            <p className="ProfileDataText black"><i className="fa fa-instagram" /> {this.Profile.Instagram}</p>
            <p className="ProfileDataText black"><i className="fa fa-calendar" /> {this.Profile.Age} anos</p>
          </div>
          <div className="ProfileBio">{this.Profile.Bio}</div>
        </div>
      </div>
    );
  }
}

export default App;
