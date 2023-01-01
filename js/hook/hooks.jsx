function useInputControlled(initialValue) {
	const [value, setValue] = useState(initialValue);
	const attr = { value, onChange: (e) => setValue(e.target.value) };
	const reset = () => setValue(initialValue);
	return [attr, reset];
}
