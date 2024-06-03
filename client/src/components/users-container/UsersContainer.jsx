import { useState } from 'react';
import { StyledUser, StyledUsersContainer } from './styles';
import { URLS } from '../../constants/urls';
import { deleteData } from '../../utils/api';

const UsersContainer = ({ users, setUsers }) => {
	const [editValues, setEditValues] = useState(false);

	return (
		<StyledUsersContainer>
			{users.map(user => (
				<StyledUser key={user.userId}>
					<p>{user.name}</p>
					<p>{user.email}</p>
					{editValues && (
						<>
							<input type='text'></input> <input type='text'></input>
						</>
					)}
					<button
						onClick={() => editUser(editValues, setEditValues, user, setUsers)}
					>
						{!editValues ? 'Editar' : 'Cancelar'}
					</button>

					<button onClick={() => deleteUser(user, setUsers)}>Eliminar</button>
				</StyledUser>
			))}
		</StyledUsersContainer>
	);
};

const deleteUser = async (user, setUsers) => {
	const { userId } = user;
	const updatedUsers = await deleteData(`${URLS.USER_API}/${userId}`);
	setUsers(updatedUsers);
};

const editUser = async (editValues, setEditValues, user, setUsers) => {
	setEditValues(!editValues);
	const { userId } = user;
	console.log(userId);
	// const updateUser = await patchData()
};

export default UsersContainer;
