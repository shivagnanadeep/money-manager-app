import './index.css';

const TransactionItem = (props) => {
	const { onDelete, transactionDetails } = props;
	const { id, title, amount, type } = transactionDetails;
	const onClickDelete = () => {
		onDelete(id, amount, type);
	};
	return (
		<li className="history-item">
			<p>{title}</p>
			<p>{amount}</p>
			<p>{type}</p>
			{/* <button
				className="button"
				type="button"
				onClick={onClickDelete}
			>
				<img
					src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
					alt="delete"
					className="delete-icon"
				/>
			</button> */}
		</li>
	);
};
export default TransactionItem;
