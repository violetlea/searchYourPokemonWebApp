import { Alert } from "@mui/material";

export default function ErrorAlert(props) {
	const { alertMssg } = props;

	return (
		<span>
			<Alert variant="outlined" severity="error">
				{alertMssg}
			</Alert>
		</span>
	);
}
