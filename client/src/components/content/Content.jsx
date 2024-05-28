import { useEffect, useState } from 'react';
import Form from '../form/Form';
import UsersContainer from '../users-container/UsersContainer';
import { StyledContent } from './styles';

const Content = () => {
	const [users, setUsers] = useState([]);
	console.log(users);

	useEffect(() => {
		fetchUsers(setUsers);
	}, []);

	return (
		<StyledContent>
			<UsersContainer users={users} />
			<Form />
		</StyledContent>
	);
};

const fetchUsers = async setUsers => {
	const response = await fetch('http://localhost:3000/api/users/');
	const data = await response.json();
	setUsers(data);
};

export default Content;
