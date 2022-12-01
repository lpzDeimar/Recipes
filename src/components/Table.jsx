import PropTypes from 'prop-types';

export const Table = ({ children }) => {
	return (
		<div className='table'>
			<table>
				<thead>
					<tr>
						<th>Recipe name</th>
						<th>Reviews</th>
						<th>Cooked before</th>
						<th>Peso</th>
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
		</div>
	);
};
Table.protoType = {
	children: PropTypes.any.isRequired,
};
