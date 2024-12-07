import MoneyDetails from '../MoneyDetails';
import TransactionItem from '../TransactionItem';
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';

const transactionTypeOptions = [
	{
		optionId: 'INCOME',
		displayText: 'Income',
	},
	{
		optionId: 'EXPENSES',
		displayText: 'Expenses',
	},
];
class MoneyManager extends Component {
	state = {
		income: 0,
		expenses: 0,
		title: '',
		amount: '',
		type: transactionTypeOptions[0].optionId,
		historyList: [],
	};

	createNewHistoryElement = (e) => {
		e.preventDefault();
		let { title, amount, type, income, expenses } = this.state;
		if (title !== '' && amount !== 0 && type !== '') {
			const newHistoryElement = {
				id: uuidv4(),
				title,
				amount,
				type,
			};
			if (type === 'INCOME') {
				income = income + amount;
			} else if (type === 'EXPENSES') {
				expenses = expenses + amount;
			}
			this.setState((prevState) => ({
				historyList: [...prevState.historyList, newHistoryElement],
				income,
				expenses,
				title: '',
				amount: '',
				type: transactionTypeOptions[0].displayText,
			}));
		}
	};

	onDelete = (id, amount, type) => {
		this.setState(
			(prevState) => ({
				historyList: prevState.historyList.filter((each) => each.id !== id),
			}),
			() => {
				if (type === transactionTypeOptions[0].optionId) {
					this.setState((prevState) => ({
						income: prevState.income - parseInt(amount),
					}));
				} else {
					this.setState((prevState) => ({
						expenses: prevState.expenses - parseInt(amount),
					}));
				}
			}
		);
	};

	updateTitle = (e) => {
		this.setState({ title: e.target.value });
	};

	updateAmount = (e) => {
		this.setState({ amount: parseInt(e.target.value) });
	};

	updateType = (e) => {
		this.setState({ type: e.target.value });
	};

	render() {
		const { income, expenses, title, amount, type, historyList } = this.state;
		const moneyDetails = { income, expenses };
		return (
			<div className="money-manager-container">
				<div className="money-manager-container-head">
					<h1 className="money-manager-container-head-title">Hi, Shiva</h1>
					<p>
						Welcome back to your <span>Money Manager</span>
					</p>
				</div>
				<MoneyDetails moneyDetails={moneyDetails} />
				<div className="money-manager-container-bottom">
					<form
						className="money-manager-left"
						onSubmit={this.createNewHistoryElement}
					>
						<h1>Add Transaction</h1>
						<label>
							TITLE
							<input
								placeholder="TITLE"
								value={title}
								onChange={this.updateTitle}
							/>
						</label>
						<label>
							AMOUNT
							<input
								placeholder="AMOUNT"
								value={amount}
								onChange={this.updateAmount}
							/>
						</label>
						<label>
							TYPE
							<select
								value={type}
								onChange={this.updateType}
							>
								{transactionTypeOptions.map((each) => (
									<option
										value={each.optionId}
										key={each.optionId}
									>
										{each.displayText}
									</option>
								))}
							</select>
						</label>
						<button type="submit">Add</button>
					</form>
					<div className="money-manager-right">
						<h1>History</h1>
						<ul className="history-list">
							<li className="history-item-head">
								<p>Title</p>
								<p>Amount</p>
								<p>Type</p>
							</li>
							{historyList.map((each) => (
								<TransactionItem
									transactionDetails={each}
									key={each.id}
									onDelete={this.onDelete}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default MoneyManager;
