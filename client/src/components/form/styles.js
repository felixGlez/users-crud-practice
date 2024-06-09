import styled from 'styled-components';

const StyledForm = styled.form`
	width: 40%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	opacity: 0;
	animation: appear 2s forwards;

	@keyframes appear {
		to {
			opacity: 1;
		}
	}
`;

export { StyledForm };
