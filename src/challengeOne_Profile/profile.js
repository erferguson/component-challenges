import axios from "axios";
import { useState, useEffect } from "react";
import locationPin from "./assets/pinIcon.svg";
import msgIcon from "./assets/messageIcon.svg";
import terminalIcon from "./assets/terminalIcon.svg";

const Profile = () => {
  // state setting the data too
  const [person, setPerson] = useState(null);

  const [friends, setFriends] = useState(null);

  const addFriend = () => {
    setFriends(friends + 1);
  };

  const deleteFriend = () => {
    setFriends(friends - 1);
  };

  useEffect(() => {
    // calling api
    axios
      .get("https://api.github.com/users/erferguson")
      // do something with data >
      .then(res => {
        setPerson(res.data);
        setFriends(res.data.followers);
        console.log("data", res);
      })
      // if error >
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ border: "3px solid red" }}>
      Header
      <div style={{ border: "3px solid blue" }}>
        <img src={person.avatar_url} alt="profile photo" /> <br />
        <p>{person.name}</p>
        <p>
          <img src={locationPin} alt="location pin" />
          {person.location}
        </p>
      </div>
      <div style={{ border: "3px solid blue" }}>
        <div>
          <h3>Friends</h3>
          <p>{person.followers}</p>
        </div>
        <div>
          <h3>Repo</h3>
          <p>{person.public_repos}</p>
        </div>
        <div>
          <h3>Bugs</h3>
          <p>{person.public_gists}</p>
        </div>
      </div>
      <div style={{ border: "3px solid yellow" }}>
        <button
          onClick={() => {
            addFriend();
          }}
        >
          <img src={terminalIcon} />
          <p>Code Together</p>
        </button>
        <button
          onClick={() => {
            deleteFriend();
          }}
        >
          <img src={terminalIcon} />
          <p>Code Together</p>
        </button>
        <img src={msgIcon} alt="chat icon" />
      </div>
    </div>
  );
};

export default Profile;

// const someText = 'Code Together'

// 	const [friends, setFriends] = useState(0)

// 	const increase = e => {
// 		setFriends(friends + 1)
// 	}
{
  /* <div>Friends: <span>{friends}</span></div>
		<button onClick={increase}>{someText}</button> */
}
