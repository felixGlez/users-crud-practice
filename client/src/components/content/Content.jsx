import { useEffect, useState } from 'react';
import Form from '../form/Form';
import UsersContainer from '../users-container/UsersContainer';
import { StyledContent } from './styles';
import { URLS } from '../../constants/urls';
import { fetchData } from '../../utils/fetchData';
import { METHODS } from '../../constants/methods';

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
	const data = await fetchData(URLS.USER_API, { method: METHODS.GET });
	setUsers(data);
};

export default Content;
