import React, {useState} from 'react';

const Profile = () => {
	const someText = 'Button'

	const [friends, setFriends] = useState(0)

	const increase = e => {
		setFriends(friends + 1)
	}

	return (
	<div> Do the Thing 
		<div>New Friends: <span>{friends}</span></div>
		<button onClick={increase}>{someText}</button>
	</div>
	)
};

export default Profile;
// <button onClick={ () => submitForm(data) } />