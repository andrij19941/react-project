import CostItem from './CostItem';
import './CostList.css';
const CostList = (props) => {
	if (props.costs.length === 0) {
		return <h2 className="cost-list_fallback">У цьому році немає видатків</h2>;
	}
	return (
		<ul className="cost-list">
			{props.costs.map((costs) => (
				<CostItem key={costs.id} date={costs.date} description={costs.description} amount={costs.amount} />
			))}
			;
		</ul>
	);
};

export default CostList;
