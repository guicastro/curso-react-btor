import * as React from 'react';
import './App.css';
import './profile.css';
import Profile from './Profile';

class App extends React.Component {

  profile = new Profile();

  render() {

    return (
      <div className="App">
        <div className="profile-body">
          <div className="profile-top"><img src={this.profile.top} /></div>
          <div className="profile-left">
            <img src={this.profile.picture} className="profile-picture" />
            <p className="profile-data-title">{this.profile.friends}</p>
            <p className="profile-data-text">Friends</p>
            <p className="profile-data-title">{this.profile.photos}</p>
            <p className="profile-data-text">Photos</p>
          </div>
          <div className="profile-right">
            <h1>{this.profile.firstName} <strong>{this.profile.lastName}</strong></h1>
            <h2>{this.profile.title}</h2>
            <p className="profile-data-text black"><i className="fa fa-phone" /> {this.profile.phone}</p>
            <p className="profile-data-text black">
              <i className="fa fa-envelope" /> <a href="mailto:{this.profile.email}">{this.profile.email}</a>
            </p>
            <p className="profile-data-text black"><i className="fa fa-instagram" /> {this.profile.instagram}</p>
            <p className="profile-data-text black"><i className="fa fa-calendar" /> {this.profile.age} anos</p>
          </div>
          <div className="profile-bio">{this.profile.bio}</div>
        </div>
      </div>
    );
  }
}

export default App;
