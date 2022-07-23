import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "Stephen",
			image: "https://media-exp1.licdn.com/dms/image/C4D03AQH1DvxNmEd_MQ/profile-displayphoto-shrink_800_800/0/1628693712151?e=1663804800&v=beta&t=UWgIcHlEI6haOoo0YqLWGwQUwjLFIx_BwQFD5e7GLD0",
			places: 3,
		},
	];

	return <UsersList items={USERS} />;
};

export default Users;
