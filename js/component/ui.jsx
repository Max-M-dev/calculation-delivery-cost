function Recording({ title, children }) {
	return (
		<div className="size__group">
			<label className="size__label">{title}</label>
			{children}
		</div>
	);
}

function GroupInputRange(props) {
	const { id, placeholder, ...otherProps } = props;
	return (
		<div className="group_inp">
			<InpNumber placeholder={placeholder} {...otherProps} />
			<InpRange id={id} {...otherProps} />
		</div>
	);
}

function InpNumber(props) {
	return <input type="number" {...props} />;
}
function InpRange(props) {
	return <input type="range" {...props} />;
}
function Total({ total, suffix }) {
	return (
		<>
			Итого:
			<span className="total">
				{total} {suffix}
			</span>
		</>
	);
}

function ContainerUi(props) {
	const {
		total,
		inpCostCargoControlled,
		inpWeightControlled,
		inpSizeHeigthControlled,
		inpSizeWeightControlled,
		inpSizeLengthControlled,
	} = props;

	return (
		<>
			<div className="left">
				<Total total={total} suffix="грн." />
			</div>
			<div className="right">
				<div className="content">
					<div className="title-group">Укажите стоимость посылки в грн.:</div>
					<Recording title="Стоимость:">
						<GroupInputRange
							placeholder="Укажите стоимость в грн."
							max="1000"
							{...inpCostCargoControlled}
						/>
					</Recording>
					<div className="title-group">Укажите вес посылки:</div>
					<Recording title="Вес:">
						<GroupInputRange
							placeholder="Укажите вес в кг."
							max="1500"
							{...inpWeightControlled}
						/>
					</Recording>
					<div className="title-group">Укажите габариты посылки:</div>

					<Recording title="Высота">
						<GroupInputRange
							placeholder="Укажите высоту в см"
							min="1"
							max="200"
							{...inpSizeHeigthControlled}
						/>
					</Recording>

					<Recording title="Ширина">
						<GroupInputRange
							placeholder="Укажите ширину в см"
							min="1"
							max="200"
							{...inpSizeWeightControlled}
						/>
					</Recording>
					<Recording title="Длина">
						<GroupInputRange
							placeholder="Укажите длину в см"
							min="1"
							max="200"
							{...inpSizeLengthControlled}
						/>
					</Recording>
				</div>
			</div>
		</>
	);
}
