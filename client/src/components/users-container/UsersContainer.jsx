import { StyledUser, StyledUsersContainer } from './styles';

const UsersContainer = ({ users }) => {
	return (
		<StyledUsersContainer>
			{users.map(user => (
				<StyledUser key={user.userId}>
					<p>{user.name}</p>
					<p>{user.email}</p>
				</StyledUser>
			))}
		</StyledUsersContainer>
	);
};

export default UsersContainer;
