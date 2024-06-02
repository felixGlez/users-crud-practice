import { useEffect, useState } from 'react';
import Form from '../form/Form';
import UsersContainer from '../users-container/UsersContainer';
import { StyledContent } from './styles';
import { URLS } from '../../constants/urls';

const Content = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers(setUsers);
	}, []);

	return (
		<StyledContent>
			<UsersContainer users={users} setUsers={setUsers} />
			<Form setUsers={setUsers} />
		</StyledContent>
	);
};

const fetchUsers = async setUsers => {
	const response = await fetch(URLS.USER_API);
	const data = await response.json();
	setUsers(data);
};

export default Content;
