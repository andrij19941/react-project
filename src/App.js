import React from 'react'; // Доданий імпорт Reac
import Costs from './components/Costs';

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
			<Costs costs={costs} />
		</div>
	);
}

export default App;
