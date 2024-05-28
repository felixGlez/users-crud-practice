import { StyledForm } from './styles';

const Form = () => {
	return (
		<StyledForm>
			<h2>Create User</h2>
			<div>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' placeholder='name' />
			</div>
			<div>
				<label htmlFor='man'>
					<input type='radio' name='gender' id='man' />
					Man
				</label>
				<label htmlFor='woman'>
					<input type='radio' name='gender' id='woman' />
					Woman
				</label>
			</div>
		</StyledForm>
	);
};

export default Form;
