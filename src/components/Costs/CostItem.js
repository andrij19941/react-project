import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';

const CostItem = (props) => {
	const changeDescription = () => {
		console.log('Click');
	};
	return (
		<Card className="cost-item">
			<CostDate date={props.date} />
			<div className="cost-item__description">
				<h2>{props.description}</h2>
				<div className="cost-item__price">${props.amount}</div>
			</div>
			<button onClick={changeDescription}>Поміняти Опис</button>
		</Card>
	);
};

export default CostItem;
