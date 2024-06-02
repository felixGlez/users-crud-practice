import { useState } from 'react';
import { StyledForm } from './styles';
import { postData } from '../../utils/fetchData';
import { URLS } from '../../constants/urls';

const Form = ({ setUsers }) => {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		gender: ''
	});

	return (
		<StyledForm onSubmit={event => createUser(event, formValues, setUsers)}>
			<h2>Create User</h2>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					placeholder='name'
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					name='email'
					id='email'
					placeholder='email'
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
			</div>
			<div>
				<label htmlFor='man'>
					<input
						type='radio'
						name='gender'
						id='man'
						value='man'
						onChange={event => saveValues(event, formValues, setFormValues)}
					/>
					Man
				</label>
				<label htmlFor='woman'>
					<input
						type='radio'
						name='gender'
						id='woman'
						value='woman'
						onChange={event => saveValues(event, formValues, setFormValues)}
					/>
					Woman
				</label>
			</div>
			<input type='submit' value='Crear' />
		</StyledForm>
	);
};

const createUser = async (event, formValues, setUsers) => {
	event.preventDefault();
	const updatedUsers = await postData(URLS.USER_API, formValues);
	setUsers(updatedUsers);
};

const saveValues = (event, formValues, setFormValues) => {
	const { name, value } = event.target;
	setFormValues({ ...formValues, [name]: value });
};

export default Form;
