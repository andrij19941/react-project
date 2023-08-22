import './CostForm.css';

const CostForm = () => {
	return (
		<form>
			<div className="new-cost__controls">
				<div className="new-cost__control">
					<label>Назва</label>
					<input type="text" />
				</div>
				<div className="new-cost__control">
					<label>Сума</label>
					<input type="number" min="0.01" step="0.01" />
				</div>
				<div className="new-cost__control">
					<label>Дата</label>
					<input type="date" min="2020-01-01" step="2023-12-31" />
				</div>
				<div className="new-cost__actions">
					<button type="submit">Добавити Видатки</button>
				</div>
			</div>
		</form>
	);
};

export default CostForm;