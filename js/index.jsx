const { useState, useMemo, useEffect, useCallback, useContext } = React;

function Container() {
	const [sizes, setSizes] = useState([]);

	const [inpWeightControlled, resetInpValueWeight] = useInputControlled(0);
	const [inpCostCargoControlled, resetInpValueCostCargo] =
		useInputControlled(1);

	const [inpSizeHeigthControlled, resetInpSizeValueHeigth] =
		useInputControlled(1);
	const [inpSizeLengthControlled, resetInpSizeValueLength] =
		useInputControlled(1);
	const [inpSizeWeightControlled, resetInpSizeValueWeight] =
		useInputControlled(1);
	let cm3Dimension =
		inpSizeHeigthControlled.value *
		inpSizeLengthControlled.value *
		inpSizeWeightControlled.value;

	const defaultSum = 50;
	const cm3DimensionCost = +(cm3Dimension / 3000).toFixed();
	function calcWeightToCost(weight) {
		if (weight >= 1100) {
			return 2000;
		} else if (weight >= 750) {
			return 1700;
		} else if (weight >= 500) {
			return 1300;
		} else if (weight >= 30) {
			return 60;
		} else if (weight >= 10) {
			return 40;
		} else if (weight >= 2) {
			return 20;
		} else if (weight < 2) {
			return 10;
		}
	}
	const costCargoCalc = +((inpCostCargoControlled.value * 5) / 100).toFixed();
	const total =
		defaultSum +
		calcWeightToCost(inpWeightControlled.value) +
		cm3DimensionCost +
		costCargoCalc;

	const propsForUi = {
		total,
		inpCostCargoControlled,
		inpWeightControlled,
		inpSizeHeigthControlled,
		inpSizeWeightControlled,
		inpSizeLengthControlled,
	};
	return <ContainerUi {...propsForUi} />;
}

function App() {
	return <Container />;
}
ReactDOM.render(<App />, document.getElementById("root"));
