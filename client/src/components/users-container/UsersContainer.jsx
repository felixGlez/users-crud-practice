import { patchData } from '../../utils/fetchData';
import { StyledUser, StyledUsersContainer } from './styles';

const UsersContainer = ({ users, setUsers }) => {
	return (
		<StyledUsersContainer>
			{users.map(user => (
				<StyledUser key={user.userId}>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<button onClick={() => editUser(user, setUsers)}>Editar</button>
					<button>Eliminar</button>
				</StyledUser>
			))}
		</StyledUsersContainer>
	);
};

const editUser = async (user, setUsers) => {
	const { userId } = user;
	console.log(userId);
	// const updateUser = await patchData()
};

export default UsersContainer;
