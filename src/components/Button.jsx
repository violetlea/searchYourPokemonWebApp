import { Button } from "@mui/material";
import styled from "@emotion/styled";

export default function ButtonDef(props) {
	const { text, handleAction } = props;

	const CustomBtn = styled(Button)(() => ({
		background: "#3466AF",
		borderRadius: 20,
		width: 150,
		marginTop: 20,
		marginBottom: 20,
		"&:hover": {
			backgroundImage: "url('src/images/pngimg.com - pokemon_PNG38.png')",
			backgroundRepeat: "no-repeat",
			backgroundSize: 40,
		},
	}));

	return (
		<>
			<CustomBtn variant="contained" onClick={handleAction} type="submit">
				{text}
			</CustomBtn>
		</>
	);
}
