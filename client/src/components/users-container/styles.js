import styled from 'styled-components';

const StyledUsersContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

const StyledUser = styled.div`
	width: 100%;
	display: flex;
	gap: 1rem;
	background-color: lightblue;
	border-radius: 10px;
	padding: 0.5rem 1rem;
`;

export { StyledUsersContainer, StyledUser };
