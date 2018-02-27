import * as React from 'react';
import './App.css';
import './profile.css';
import Profile from './Profile';

class App extends React.Component {

  Profile = new Profile;

  render() {

    return (
      <div className="App">
        <div className="profile-body">
          <div className="ProfileTop"><img src={this.Profile.Top} /></div>
          <div className="profile-left">
            <img src={this.Profile.Picture} className="profile-picture" />
            <p className="profile-data-title">{this.Profile.Friends}</p>
            <p className="profile-data-text">Friends</p>
            <p className="profile-data-title">{this.Profile.Photos}</p>
            <p className="profile-data-text">Photos</p>
          </div>
          <div className="profile-right">
            <h1>{this.Profile.FirstName} <strong>{this.Profile.LastName}</strong></h1>
            <h2>{this.Profile.Title}</h2>
            <p className="profile-data-text black"><i className="fa fa-phone" /> {this.Profile.Phone}</p>
            <p className="profile-data-text black">
              <i className="fa fa-envelope" /> <a href="mailto:{this.Profile.Email}">{this.Profile.Email}</a>
            </p>
            <p className="profile-data-text black"><i className="fa fa-instagram" /> {this.Profile.Instagram}</p>
            <p className="profile-data-text black"><i className="fa fa-calendar" /> {this.Profile.Age} anos</p>
          </div>
          <div className="profile-bio">{this.Profile.Bio}</div>
        </div>
      </div>
    );
  }
}

export default App;
