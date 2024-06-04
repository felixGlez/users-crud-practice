import { useEffect, useState } from 'react';
import Form from '../form/Form';
import UsersContainer from '../users-container/UsersContainer';
import { StyledContent } from './styles';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api';

const Content = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers(setUsers);
	}, []);

	if (users.length === 0) return <h1>LOADING...</h1>;

	return (
		<StyledContent>
			<UsersContainer users={users} setUsers={setUsers} />
			<Form setUsers={setUsers} />
		</StyledContent>
	);
};

const fetchUsers = async setUsers => {
	try {
		const data = await getData(URLS.USER_API);
		setUsers(data);
	} catch (error) {
		console.log(error);
	}
};

export default Content;
