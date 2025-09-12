import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export default function SearchComp(props) {
	const { label, handleTextOnChange } = props;

	const TextFieldStyle = styled(TextField)(({ theme }) => ({
		backgroundColor: "white",
		borderRadius: 20,
	}));

	return (
		<TextField
			label={label}
			onChange={handleTextOnChange}
			className="inputRounded"
			sx={{
				backgroundColor: "white",
				borderRadius: 20,
				border: 0,
				width: 500,
			}}></TextField>
	);
}
