import { useState, Suspense, lazy } from "react";
const DisplayCard = lazy(() => delayLazy(import("./components/displayCard")));
import "./App.css";
import "@fontsource/roboto/500.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import HeaderDefault from "./components/Header";
import SearchBarContainer from "./containers/SearchBarContainer";
import DisplayFooter from "./components/Footer";
import DisplayLoading from "./components/Loading";

function App() {
	const [pokeObj, setPokeObj] = useState({});
	const [display, setDisplay] = useState(false);
	const [damageRelation, setDamageRelation] = useState([]);
	const [pokemonSpecies, setPokemonSpecies] = useState({});

	const addPokeObj = (obj) => {
		setPokeObj(obj);

		if (obj != {}) {
			setDisplay(true);
		}
	};

	const addDamageRelation = (damage) => {
		setDamageRelation(damage);
	};

	const addPokemonSpeciesInfo = (info) => {
		setPokemonSpecies(info);
	};

	const Item = styled(Paper)(({ theme }) => ({
		padding: theme.spacing(1),
		border: "none",
		boxShadow: "none",
		backgroundColor: "#FEE8B6",
	}));

	return (
		<>
			<Box sx={{ width: "100%" }}>
				<Stack
					spacing={0}
					sx={{
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Item>
						<header>
							<HeaderDefault title="Search Your Pokemon!" />
						</header>
					</Item>
					<main>
						<Item>
							<SearchBarContainer
								addPokeObj={addPokeObj}
								addDamageRelation={addDamageRelation}
								addPokemonSpeciesInfo={addPokemonSpeciesInfo}
							/>
						</Item>
						{display === true && (
							<Item>
								<Suspense fallback={<DisplayLoading />}>
									<DisplayCard
										pokeObject={pokeObj}
										damage={damageRelation}
										speciesInfo={pokemonSpecies}
									/>
								</Suspense>
							</Item>
						)}
					</main>
				</Stack>
			</Box>

			{display === true && (
				<footer>
					<DisplayFooter />
				</footer>
			)}
		</>
	);
}
async function delayLazy(promise) {
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
	return promise;
}

export default App;
