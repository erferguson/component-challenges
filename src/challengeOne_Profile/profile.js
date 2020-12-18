import axios from "axios";
import { useState, useEffect } from "react";
import locationPin from "./assets/pinIcon.svg";
import msgIcon from "./assets/messageIcon.svg";
import terminalIcon from "./assets/terminalIcon.svg";
import { motion } from 'framer-motion'

const Profile = () => {
  // state setting the data too
  const [person, setPerson] = useState(null);

  const [friends, setFriends] = useState(null);

  const [buttonOn, setButtonOn] = useState(true);

  const addFriend = () => {
    setFriends(friends + 1);
    setButtonOn(!buttonOn);
  };

  const deleteFriend = () => {
    setFriends(friends - 1);
    setButtonOn(!buttonOn)
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

  if(!person){
    return <p>loading...</p>
  }

  return (
    <motion.div
    animate={{ scale: [1,2,2,1,1] }}
    transition={{ duration: 0.5 }}
    >
    <div className="mainDiv">
      <div className='headerDiv'>
        <img className="profileImage" src={person.avatar_url} alt="profile photo" /> <br />
        <p className='name'>{person.name}</p>
        <p className='location'>
          <img className='locationPin' src={locationPin} alt="location pin" />
          {person.location}
        </p>
      </div>
      <div className='friendsDiv'>
        <div className='friendsMiniDiv'>
          <h3>Friends</h3>
          <p className="friendsNums">{person.followers}</p>
        </div>
        <div className='friendsMiniDiv'>
          <h3>Repo</h3>
          <p className="friendsNums">{person.public_repos}</p>
        </div>
        <div className='friendsMiniDiv'>
          <h3>Bugs</h3>
          <p className="friendsNums">{person.public_gists}</p>
        </div>
      </div>
      <div className='buttonWrapper'>
		{buttonOn ? 
		 <button
		 className='upButton codeTogether'
          onClick={() => {
            addFriend();
          }}
        >
          <img className="buttonImage" src={terminalIcon} />
          Code Together
        </button>
		:
        <button
		className='downButton codeTogether'
          onClick={() => {
            deleteFriend();
          }}
        >
          <img className="buttonImage" src={terminalIcon} />
          Code Together
        </button>
    }
    { buttonOn ?
      <div className='msgWrapper'>
			<img src={msgIcon} alt="chat icon" />
		  </div>
    : 
    <div className="newFriends">
    <h4>Friends</h4>
    <p className="friendsNum">{friends}</p>
    </div>
    }
      </div>
    </div>
    </motion.div>
  );
};

export default Profile;
