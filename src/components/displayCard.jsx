import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import PlayCries from "./Cries";
import DamageRelationCard from "./DamageRelationCard";
const meterSymbol = "m";
const kilogramSymbol = "kg";

export default function DisplayCard(props) {
	const { pokeObject, damage, speciesInfo } = props;

	let display = pokeObject["types"]?.map((type) => type.type.name).join(", ");

	const handleCries = (event) => {
		event.preventDefault();
		const sound = new Audio(pokeObject.cries);

		sound.play();
	};

	const DemoPaper = styled(Paper)(({ theme }) => ({
		width: 600,
		height: "auto",
		padding: theme.spacing(2),
		...theme.typography.body2,
		borderRadius: 20,
		margin: 0,
		borderStyle: "hidden",
	}));
	const Item = styled(Paper)(({ theme }) => ({
		...theme.typography.body2,
		marginTop: -20,
		padding: theme.spacing(0),
		textAlign: "center",
		color: (theme.vars ?? theme).palette.text.secondary,
		...theme.applyStyles("dark", {
			backgroundColor: "#1A2027",
		}),
	}));

	const Item2 = styled(Paper)(({ theme }) => ({
		backgroundColor: "transparent",
		...theme.typography.body2,
		padding: theme.spacing(0),
		textAlign: "center",
		border: "none",
		boxShadow: "none",
		color: (theme.vars ?? theme).palette.text.secondary,
		...theme.applyStyles("dark", {
			backgroundColor: "#1A2027",
		}),
	}));

	return (
		<>
			<DemoPaper square={false}>
				<div>
					<h2 className="pokeHeadName">
						{pokeObject["name"]} <PlayCries PlayAudio={handleCries} />{" "}
					</h2>
					{speciesInfo["names"].map((info) => (
						<p className="japName">{info.name}</p>
					))}
					{speciesInfo["generalName"].map((genName) => (
						<p className="genus">{genName.genus}</p>
					))}
				</div>
				<br />
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2} columns={16}>
						<Grid size={8}>
							<Item>
								<Chip
									label="Default"
									variant="outlined"
									color="primary"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
								<br />
								<img
									src={pokeObject["imageOfficial"]}
									alt={`default pokemon picture for ${pokeObject["name"]}`}
									className="imgPokemon"
								/>
							</Item>
						</Grid>
						<Grid size={8}>
							<Item>
								<Chip
									label="Shiny"
									variant="outlined"
									color="secondary"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
								<br />
								<img
									src={pokeObject["imageOfficialShiny"]}
									alt={`default pokemon picture for ${pokeObject["name"]}`}
									className="imgPokemon"
								/>
							</Item>
						</Grid>
						<Grid size={16}>
							<Item2>
								<Chip
									label="Type"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
								<p className="pokeName">{display}</p>
								<Chip
									label="Height"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
								<p className="pokeName">{pokeObject.height} </p> <span className="symbolFont">{meterSymbol}</span>
								<Chip
									label="Weight"
									sx={{ margin: 2, paddingLeft: 1, paddingRight: 1 }}
								/>
								<p className="pokeName">{pokeObject.weight}  </p> <span className="symbolFont">{kilogramSymbol}</span>
							</Item2>
						</Grid>
						<Grid size={16}>
							<DamageRelationCard arrDamage={damage} />
						</Grid>
					</Grid>
				</Box>
			</DemoPaper>
		</>
	);
}
