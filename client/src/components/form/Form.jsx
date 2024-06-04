import { StyledForm } from './styles';
import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api';

const Form = ({ setUsers }) => {
	return (
		<StyledForm onSubmit={event => handleSubmit(event, setUsers)}>
			<h2>Create User</h2>
			<div>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' placeholder='name' />
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' id='email' placeholder='email' />
			</div>
			<div>
				<label htmlFor='man'>
					<input type='radio' name='gender' id='man' value='man' />
					Man
				</label>
				<label htmlFor='woman'>
					<input type='radio' name='gender' id='woman' value='woman' />
					Woman
				</label>
			</div>
			<input type='submit' value='Crear' />
		</StyledForm>
	);
};

const createUser = async (name, email, setUsers) => {
	const newUser = { name, email };
	const updatedUsers = await postData(URLS.USER_API, newUser);
	setUsers(updatedUsers);
};

const handleSubmit = (event, setUsers) => {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;
	event.target.reset();

	if (!name || !email) return;

	createUser(name, email, setUsers);
};

export default Form;
