import React, {useState} from 'react';

const Profile = (props) => {
	const someText = 'Code Together'

	const [friends, setFriends] = useState(0)

	const increase = e => {
		setFriends(friends + 1)
	}

	return (
	<div style={{border: '3px solid red'}}> Header 
		<div style={{border: '3px solid blue'}}>
			image <br/>
			name <br/>
			location <br/>
		</div>
		<div style={{border: '3px solid blue'}}>
			<h3>Friends</h3>
			<p>some number</p>
			<h3>Repo</h3>
			<p>other number</p>
			<h3>Bugs</h3>
			<p>third number</p>
		</div>
		<div style={{border: '3px solid yellow'}}>
			<button>
				<p>small image</p>
				<p>button title</p>
			</button>
			<p>chat image</p>
		</div>
	</div>
	)
};

export default Profile;

{/* <div>Friends: <span>{friends}</span></div>
		<button onClick={increase}>{someText}</button> */}