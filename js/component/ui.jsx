function Recording({ title, children }) {
	return (
		<div className="size__group">
			<label className="size__label">
				<Text>{title}</Text>
			</label>
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
	return <Input type="number" {...props} />;
}
function InpRange(props) {
	return <input type="range" {...props} />;
}
function Total({ total, suffix }) {
	return (
		<>
			<Title level={2}>
				Итого:
				<br />
				<span className="total">
					{total} {suffix}
				</span>
			</Title>
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
					<div className="title-group">
						<Text mark>Укажите стоимость посылки в грн.:</Text>
					</div>
					<Recording title="Стоимость:">
						<GroupInputRange
							placeholder="Укажите стоимость в грн."
							max="1000"
							suffix="грн."
							{...inpCostCargoControlled}
						/>
					</Recording>
					<div className="title-group">
						<Text mark>Укажите вес посылки:</Text>
					</div>
					<Recording title="Вес:">
						<GroupInputRange
							placeholder="Укажите вес в кг."
							max="1500"
							suffix="кг"
							{...inpWeightControlled}
						/>
					</Recording>
					<div className="title-group">
						<Text mark>Укажите габариты посылки:</Text>
					</div>

					<Recording title="Высота">
						<GroupInputRange
							placeholder="Укажите высоту в см"
							min="1"
							max="200"
							suffix="см"
							{...inpSizeHeigthControlled}
						/>
					</Recording>

					<Recording title="Ширина">
						<GroupInputRange
							placeholder="Укажите ширину в см"
							min="1"
							max="200"
							suffix="см"
							{...inpSizeWeightControlled}
						/>
					</Recording>
					<Recording title="Длина">
						<GroupInputRange
							placeholder="Укажите длину в см"
							min="1"
							max="200"
							suffix="см"
							{...inpSizeLengthControlled}
						/>
					</Recording>
				</div>
			</div>
		</>
	);
}
