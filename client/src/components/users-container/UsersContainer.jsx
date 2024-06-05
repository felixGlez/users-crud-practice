import { useState } from 'react';
import { StyledUser, StyledUsersContainer } from './styles';
import { URLS } from '../../constants/urls';
import { deleteData } from '../../utils/api';
import UpdateUser from '../update-user/UpdateUser';

const UsersContainer = ({ users, setUsers }) => {
	const [userToEdit, setUserToEdit] = useState();

	return (
		<StyledUsersContainer>
			{users.map(user => (
				<StyledUser key={user.userId}>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<button onClick={() => setUserToEdit(user)}>Editar</button>
					<button onClick={() => deleteUser(user, setUsers)}>Eliminar</button>
				</StyledUser>
			))}
			{userToEdit && <UpdateUser userToEdit={userToEdit} setUserToEdit={setUserToEdit} setUsers={setUsers} />}
		</StyledUsersContainer>
	);
};

const deleteUser = async (user, setUsers) => {
	const { userId } = user;
	const updatedUsers = await deleteData(`${URLS.USER_API}/${userId}`);
	setUsers(updatedUsers);
};

export default UsersContainer;
