import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

export default function DamageRelationCard(props) {
	const { arrDamage } = props;

	console.log(arrDamage);

	let doubleDamageFromLengthTotal = 0;
	arrDamage.map((damage) => {
		doubleDamageFromLengthTotal =
			doubleDamageFromLengthTotal + damage["doubleDamageFromLength"];
	});
	let doubleDamageToLengthTotal = 0;
	arrDamage.map((damage) => {
		doubleDamageToLengthTotal =
			doubleDamageToLengthTotal + damage["doubleDamageToLength"];
	});
	let halfDamageFromLengthTotal = 0;
	arrDamage.map((damage) => {
		halfDamageFromLengthTotal =
			halfDamageFromLengthTotal + damage["halfDamageFromLength"];
	});
	let halfDamageToLengthTotal = 0;
	arrDamage.map((damage) => {
		halfDamageToLengthTotal =
			halfDamageToLengthTotal + damage["halfDamageToLength"];
	});
	let noDamageFromLengthTotal = 0;
	arrDamage.map((damage) => {
		noDamageFromLengthTotal =
			noDamageFromLengthTotal + damage["noDamageFromLength"];
	});
	let noDamageToLengthTotal = 0;
	arrDamage.map((damage) => {
		noDamageToLengthTotal = noDamageToLengthTotal + damage["noDamageToLength"];
	});

	// let displayDamage = arrDamage.map((damage) => damage['damage_relations']['double_damage_from'] )

	const Item = styled(Paper)(({ theme }) => ({
		///border: '2px solid #FFC7A7',
		...theme.typography.body2,
		marginTop: -20,
		padding: theme.spacing(0),
		textAlign: "center",
		color: (theme.vars ?? theme).palette.text.secondary,
		...theme.applyStyles("dark", {
			backgroundColor: "#1A2027",
		}),
	}));

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Item>
					<Chip
						label="Damages"
						sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
					/>
					<br />
					{doubleDamageFromLengthTotal > 0 && (
						<Chip
							label="Double Damage From"
							variant="outlined"
							color="error"
							sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
						/>
					)}
					{doubleDamageFromLengthTotal > 0 && <br />}
					{arrDamage.map((damage) =>
						damage["doubleDamageFrom"]?.map((dam, index) => (
							<span className="containerType">
								<img
									className={`imgIcon ${dam.name}`}
									src={`src/images/${dam.name}.svg`}
								/>
								<p className="typeName" key={index}>
									{dam.name}
								</p>
							</span>
						))
					)}
					{doubleDamageFromLengthTotal > 0 && <br />}
					{doubleDamageToLengthTotal > 0 && (
						<Chip
							label="Double Damage To"
							variant="outlined"
							color="error"
							sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
						/>
					)}
					{doubleDamageToLengthTotal > 0 && <br />}
					{arrDamage.map((damage) =>
						damage["doubleDamageTo"]?.map((dam, index) => (
							<span className="containerType">
								<img
									className={`imgIcon ${dam.name}`}
									src={`src/images/${dam.name}.svg`}
								/>
								<p className="typeName" key={index}>
									{dam.name}
								</p>
							</span>
						))
					)}
					{doubleDamageToLengthTotal > 0 && <br />}
					{halfDamageFromLengthTotal > 0 && (
						<Chip
							label="Half Damage From"
							variant="outlined"
							color="warning"
							sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
						/>
					)}
					{halfDamageFromLengthTotal > 0 && <br />}
					{arrDamage.map((damage) =>
						damage["halfDamageFrom"]?.map((dam, index) => (
							<span className="containerType">
								<img
									className={`imgIcon ${dam.name}`}
									src={`src/images/${dam.name}.svg`}
								/>
								<p className="typeName" key={index}>
									{dam.name}
								</p>
							</span>
						))
					)}
					{halfDamageFromLengthTotal > 0 && <br />}
					{halfDamageToLengthTotal > 0 && (
						<Chip
							label="Half Damage To"
							variant="outlined"
							color="warning"
							sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
						/>
					)}
					{halfDamageToLengthTotal > 0 && <br />}
					{arrDamage.map((damage) =>
						damage["halfDamageTo"]?.map((dam, index) => (
							<span className="containerType">
								<img
									className={`imgIcon ${dam.name}`}
									src={`src/images/${dam.name}.svg`}
								/>
								<p className="typeName" key={index}>
									{dam.name}
								</p>
							</span>
						))
					)}
					{noDamageFromLengthTotal > 0 && <br />}
					{noDamageFromLengthTotal > 0 && (
						<Chip
							label="No Damage From"
							variant="outlined"
							color="default"
							sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
						/>
					)}
					{noDamageFromLengthTotal > 0 && <br />}
					{arrDamage.map((damage) =>
						damage["noDamageFrom"]?.map((dam, index) => (
							<span className="containerType">
								<img
									className={`imgIcon ${dam.name}`}
									src={`src/images/${dam.name}.svg`}
								/>
								<p className="typeName" key={index}>
									{dam.name}
								</p>
							</span>
						))
					)}
					{noDamageToLengthTotal > 0 && <br />}
					{noDamageToLengthTotal > 0 && (
						<Chip
							label="No Damage To"
							variant="outlined"
							color="default"
							sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
						/>
					)}
					{noDamageToLengthTotal > 0 && <br />}
					{arrDamage.map((damage) =>
						damage["noDamageTo"]?.map((dam, index) => (
							<span className="containerType">
								<img
									className={`imgIcon ${dam.name}`}
									src={`src/images/${dam.name}.svg`}
								/>
								<p className="typeName" key={index}>
									{dam.name}
								</p>
							</span>
						))
					)}
				</Item>
			</Box>
		</>
	);
}
