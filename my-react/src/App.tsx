import * as React from 'react';
import './App.css';
import './profile.css';
import Profile from './Profile';

class App extends React.Component {
  profile = new Profile();

  render() {
    const {
      top,
      picture,
      friends,
      photos,
      firstName,
      lastName,
      title,
      email,
      phone,
      instagram,
      age,
      bio
    } = this.profile;

    const linkMailTo = `mailto:${email}`;

    return (
      <div className="App">
        <div className="profile-body">
          <div className="profile-top">
            <img src={top} />
          </div>
          <div className="profile-left">
            <img src={picture} className="profile-picture" />
            <p className="profile-data-title">{friends}</p>
            <p className="profile-data-text">Friends</p>
            <p className="profile-data-title">{photos}</p>
            <p className="profile-data-text">Photos</p>
          </div>
          <div className="profile-right">
            <h1>
              {firstName} <strong>{lastName}</strong>
            </h1>
            <h2>{title}</h2>
            <p className="profile-data-text black">
              <i className="fa fa-phone" /> {phone}
            </p>
            <p className="profile-data-text black">
              <i className="fa fa-envelope" /> <a href={linkMailTo}>{email}</a>
            </p>
            <p className="profile-data-text black">
              <i className="fa fa-instagram" /> {instagram}
            </p>
            <p className="profile-data-text black">
              <i className="fa fa-calendar" /> {age} anos
            </p>
          </div>
          <div className="profile-bio">{bio}</div>
        </div>
      </div>
    );
  }
}

export default App;
