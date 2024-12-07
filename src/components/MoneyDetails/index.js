import './index.css';

const MoneyDetails = (props) => {
	const { moneyDetails } = props;
	const { income, expenses } = moneyDetails;
	return (
		<div className="money-details-container">
			<div className="money-details-card balance">
				<div className="money-image-container ">
					<img
						src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
						alt="balance"
						className="money-image"
					/>
				</div>
				<div className="money-description">
					<p>Your Balance</p>
					<p>{`Rs ${income - expenses}`}</p>
				</div>
			</div>
			<div className="money-details-card income ">
				<div className="money-image-container">
					<img
						src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
						alt="income"
						className="money-image"
					/>
				</div>
				<div className="money-description">
					<p>Your Income</p>
					<p>{`Rs ${income}`}</p>
				</div>
			</div>
			<div className="money-details-card expenses">
				<div className="money-image-container">
					<img
						src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
						alt="expenses"
						className="money-image"
					/>
				</div>
				<div className="money-description">
					<p>Your Expenses</p>
					<p>{`Rs ${expenses}`}</p>
				</div>
			</div>
		</div>
	);
};
export default MoneyDetails;
