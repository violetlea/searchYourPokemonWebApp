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

	const Item = styled(Paper)(({ theme }) => ({
		textTransform: "capitalize",
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
						<div>
							<div>
								<Chip
									label="Double Damage From"
									variant="outlined"
									color="error"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
							</div>
							{arrDamage.map((damage) =>
								damage["doubleDamageFrom"]?.map((dam, index) => (
									<span className="containerType" key={index}>
										<img
											className={`imgIcon ${dam.name}`}
											src={`/images/${dam.name}.svg`}
										/>
										<p className="typeName">{dam.name}</p>
									</span>
								))
							)}
						</div>
					)}
					{doubleDamageToLengthTotal > 0 && (
						<div>
							<div>
								<Chip
									label="Double Damage To"
									variant="outlined"
									color="error"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
							</div>
							{arrDamage.map((damage) =>
								damage["doubleDamageTo"]?.map((dam, index) => (
									<span className="containerType" key={index}>
										<img
											className={`imgIcon ${dam.name}`}
											src={`/images/${dam.name}.svg`}
										/>
										<p className="typeName">{dam.name}</p>
									</span>
								))
							)}
						</div>
					)}
					{halfDamageFromLengthTotal > 0 && (
						<div>
							<div>
								<Chip
									label="Half Damage From"
									variant="outlined"
									color="warning"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
							</div>
							{arrDamage.map((damage) =>
								damage["halfDamageFrom"]?.map((dam, index) => (
									<span className="containerType" key={index}>
										<img
											className={`imgIcon ${dam.name}`}
											src={`/images/${dam.name}.svg`}
										/>
										<p className="typeName">{dam.name}</p>
									</span>
								))
							)}
						</div>
					)}
					{halfDamageToLengthTotal > 0 && (
						<div>
							<div>
								<Chip
									label="Half Damage To"
									variant="outlined"
									color="warning"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
							</div>
							{arrDamage.map((damage) =>
								damage["halfDamageTo"]?.map((dam, index) => (
									<span className="containerType" key={index}>
										<img
											className={`imgIcon ${dam.name}`}
											src={`/images/${dam.name}.svg`}
										/>
										<p className="typeName">{dam.name}</p>
									</span>
								))
							)}
						</div>
					)}
					{noDamageFromLengthTotal > 0 && (
						<div>
							<div>
								<Chip
									label="No Damage From"
									variant="outlined"
									color="default"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
							</div>
							{arrDamage.map((damage) =>
								damage["noDamageFrom"]?.map((dam, index) => (
									<span className="containerType" key={index}>
										<img
											className={`imgIcon ${dam.name}`}
											src={`/images/${dam.name}.svg`}
										/>
										<p className="typeName">{dam.name}</p>
									</span>
								))
							)}
						</div>
					)}
					{noDamageToLengthTotal > 0 && (
						<div>
							<div>
								<Chip
									label="No Damage To"
									variant="outlined"
									color="default"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
							</div>
							{arrDamage.map((damage) =>
								damage["noDamageTo"]?.map((dam, index) => (
									<span className="containerType" key={index}>
										<img
											className={`imgIcon ${dam.name}`}
											src={`/images/${dam.name}.svg`}
										/>
										<p className="typeName">{dam.name}</p>
									</span>
								))
							)}
						</div>
					)}
				</Item>
			</Box>
		</>
	);
}
