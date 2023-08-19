import React from 'react'; // Доданий імпорт Reac
import CostItem from './components/CostItem';
function App() {
	const costs = [
		{
			date: new Date(2023, 6, 8),
			description: 'Samsung',
			amount: 199.99,
		},

		{
			date: new Date(2023, 3, 12),
			description: 'Джинси',
			amount: 49.99,
		},

		{
			date: new Date(2023, 7, 3),
			description: 'Холодильник',
			amount: 999.99,
		},
	];
	return (
		<div>
			<h1>Начнемо вивчати React</h1>
			<CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount} />
			<CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount} />
			<CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount} />
		</div>
	);
}

export default App;
