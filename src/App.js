import React, { useState } from 'react'; // Доданий імпорт Reac
import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/Costs';

const INITTAL_COSTS = [
	{
		id: 'c1',
		date: new Date(2023, 6, 8),
		description: 'Samsung',
		amount: 199.99,
	},

	{ id: 'c2', date: new Date(2023, 3, 12), description: 'Джинси', amount: 49.99 },

	{ id: 'c3', date: new Date(2022, 7, 3), description: 'Холодильник', amount: 999.99 },
];

const App = () => {
	const [costs, setCosts] = useState(INITTAL_COSTS);
	// return React.createElement('div', {}, React.createElement('h1', {}, 'Начнемо вивчати React'), React.createElement(Costs, { costs: costs }));
	const addCostHandler = (costs) => {
		setCosts((preCosts) => {
			return [costs, ...preCosts];
		});
	};
	return (
		<div>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costs} />
		</div>
	);
};

export default App;
