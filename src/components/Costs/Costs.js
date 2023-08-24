import CostItem from './CostItem';
import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, { useState } from 'react';

const Costs = (props) => {
	const [selectedYear, setSlectedYear] = useState('2022');
	const yearChangeHandler = (year) => {
		setSlectedYear(year);
	};

	return (
		<div>
			<Card className="costs">
				<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
				{props.costs.map((costs) => (
					<CostItem date={costs.date} description={costs.description} amount={costs.amount} />
				))}
			</Card>
		</div>
	);
};

export default Costs;

// Простіший варіант
// <CostItem date={props.costs[0].date} description={props.costs[0].description} amount={props.costs[0].amount} />
// <CostItem date={props.costs[1].date} description={props.costs[1].description} amount={props.costs[1].amount} />
// <CostItem date={props.costs[2].date} description={props.costs[2].description} amount={props.costs[2].amount} />
