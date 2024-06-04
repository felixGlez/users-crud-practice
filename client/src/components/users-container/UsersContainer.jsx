import { useId, useState } from 'react';
import { StyledUser, StyledUsersContainer } from './styles';
import { URLS } from '../../constants/urls';
import { deleteData, patchData } from '../../utils/api';

const UsersContainer = ({ users, setUsers }) => {
	const [editValues, setEditValues] = useState(false);
	const [updatedUser, setUpdatedUser] = useState({
		name: '',
		email: ''
	})

	return (
		<StyledUsersContainer>
			{users.map(user => (
				<StyledUser key={user.userId}>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<button
						onClick={() => handleEditUser(editValues, setEditValues, user, setUsers, updatedUser)}
					>
						Editar
					</button>

					<button onClick={() => deleteUser(user, setUsers)}>Eliminar</button>
				</StyledUser>
			))}
								{editValues && (
						<>
							<input onChange={(event)=>saveValues(event,updatedUser, setUpdatedUser)} type='text' name='name' id='name' placeholder='Name'></input>
							<input type='text' name='email' id='email' placeholder='Email' onChange={(event)=>saveValues(event,updatedUser, setUpdatedUser)}></input>
							<button type='submit'>Guardar</button>
						</>
					)}
		</StyledUsersContainer>
	);
};

const saveValues = (event, updatedUser, setUpdatedUser) => {
	const {name, value} = event.target
	setUpdatedUser({...updatedUser, [name]: value})
}

const deleteUser = async (user, setUsers) => {
	const { userId } = user;
	const updatedUsers = await deleteData(`${URLS.USER_API}/${userId}`);
	setUsers(updatedUsers);
};

const handleEditUser = async (editValues, setEditValues, user, setUsers, updatedUser) => {
	setEditValues(!editValues);
	const { userId, name } = user;
	console.log(userId, name);

	const updateUser = await patchData(`${URLS.USER_API}/${userId}`, updatedUser)
	setUsers(updateUser)
};

export default UsersContainer;
