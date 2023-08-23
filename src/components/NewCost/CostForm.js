import React, { useState } from 'react';
import './CostForm.css';
// import './NewCost.css';
const CostForm = () => {
	const [inputName, setInputName] = useState('');
	const [inputAmount, setInputAmount] = useState('');
	const [inputDate, setInputDate] = useState('');
	// const [userInput, setUserInput] = useState({
	// 	name: '',
	// 	amount: '',
	// 	date: '',
	// });
	const nameChangeHandler = (event) => {
		setInputName(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	name: event.target.value,
		// });
		// setUserInput((previousState) => {
		// 	return {
		// 		...previousState,
		// 		name: event.target.value,
		// 	};
		// });
	};
	const amountChangeHandler = (event) => {
		setInputAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	amount: event.target.value,
		// });
	};

	const datetChangeHandler = (event) => {
		setInputDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	date: event.target.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const costDate = {
			name: inputName,
			amount: inputAmount,
			date: new Date(inputDate),
		};
		console.log(costDate);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-cost__controls">
				<div className="new-cost__control">
					<label>Назва</label>
					<input type="text" onChange={nameChangeHandler} />
				</div>
				<div className="new-cost__control">
					<label>Сума</label>
					<input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" />
				</div>
				<div className="new-cost__control">
					<label>Дата</label>
					<input onChange={datetChangeHandler} type="date" min="2020-01-01" step="2023-12-31" />
				</div>
				<div className="new-cost__actions">
					<button type="submit">Добавити Видатки</button>
				</div>
			</div>
		</form>
	);
};

export default CostForm;
