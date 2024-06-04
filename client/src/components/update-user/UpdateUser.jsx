import { URLS } from '../../constants/urls';
import { patchData } from '../../utils/api';
import { StyledForm } from '../form/styles';

const UpdateUser = ({ userToEdit, setUsers }) => {
	return (
		<StyledForm onSubmit={event => handleSubmit(event, setUsers)}>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					placeholder='name'
					defaultValue={userToEdit.name}
				/>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					name='email'
					id='email'
					placeholder='email'
					defaultValue={userToEdit.email}
				/>
			</div>
			<input type='submit' value='Guardar' />
		</StyledForm>
	);
};

const updateUser = async (user, setUsers) => {
	const { userId, name, email } = user;
	const newUser = { name, email };
	const updatedUsers = await patchData(`${URLS.USER_API}/${userId}`, newUser);
	setUsers(updatedUsers);
};

const handleSubmit = (event, setUsers) => {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;

	if (!name || !email) return;

	updateUser(name, email, setUsers);
	event.target.reset();
};

export default UpdateUser;
