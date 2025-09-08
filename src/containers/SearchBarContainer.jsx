import SearchComp from "../components/Search";
import ButtonDef from "../components/Button";
import { useState } from "react";
import ErrorAlert from "../components/ErrorAlert";

export default function SearchBarContainer(props) {
	const [text, setText] = useState("");
	const [error, setError] = useState(false);

	const baseURL = "https://pokeapi.co/api/v2/";
	let pokeObj = {};

	const handleTextChange = (event) => {
		setText(event.target.value);
	};

	const GetPokemonByName = async (pokemonName) => {
		const pokeName = pokemonName;
		const endpoint = `${baseURL}pokemon/${pokeName}`;
		let objs = {};
		let pokeTypes = [];

		try {
			const response = await fetch(endpoint);
			//let name = "";
			if (response.ok) {
				const jsonRes = await response.json();
				//console.log(jsonRes.species);
				pokeObj = jsonRes;
				// name = jsonRes.name;
				console.log(pokeObj);

				objs = {
					id: pokeObj.id,
					name: pokeObj.name,
					types: pokeObj.types,
					weight: pokeObj.weight,
					height: pokeObj.height,
					imageOfficial:
						pokeObj["sprites"]["other"]["official-artwork"]["front_default"],
					imageOfficialShiny:
						pokeObj["sprites"]["other"]["official-artwork"]["front_shiny"],
					cries: pokeObj.cries.latest,
					damages: pokeObj.types,
				};
				//console.log(objs);
				props.addPokeObj(objs);
			}
		} catch (error) {
			console.log(error);
		}

		pokeTypes = objs["types"]?.map((type) => type.type.name);
		//console.log(pokeTypes);
		GetDamageRelation(pokeTypes);
	};
	//let pokeTypes = pokeObj["types"]?.map((type) => type.type.name);
	//console.log(pokeObj)
	const GetDamageRelation = async (types) => {

		let damageObj = [];
		let objDamage = [];
		const arrType = types;
		const promises = arrType.map(
			(type) =>
				fetch(`${baseURL}type/${type}`)
					.then((res) => {
						if (!res.ok) {
							console.log(res.status);
						} else {
							return res.json();
						}
					})
					.catch((error) => {
						console.error("Error fetching data:", error);
					})
			
		);
		const pokemons = await Promise.all(promises);
		//console.log(pokemons)
		pokemons.map((pokemon,index) => {
			
			objDamage ={
				id: index,
				name: pokemon.name,
				doubleDamageFrom:pokemon['damage_relations']['double_damage_from'],
				doubleDamageFromLength: pokemon['damage_relations']['double_damage_from'].length,
				doubleDamageTo: pokemon['damage_relations']['double_damage_to'],
				doubleDamageToLength: pokemon['damage_relations']['double_damage_to'].length,
				halfDamageFrom: pokemon['damage_relations']['half_damage_from'],
				halfDamageFromLength: pokemon['damage_relations']['half_damage_from'].length,
				halfDamageTo: pokemon['damage_relations']['half_damage_to'],
				halfDamageToLength: pokemon['damage_relations']['half_damage_to'].length,
				noDamageFrom : pokemon['damage_relations']['no_damage_from'],
				noDamageFromLength : pokemon['damage_relations']['no_damage_from'].length,
				noDamageTo: pokemon['damage_relations']['no_damage_to'],
				noDamageToLength: pokemon['damage_relations']['no_damage_to'].length

			}
			damageObj.push(objDamage);

			
		})
		//console.log(damageObj)
		props.addDamageRelation(damageObj)
		
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		//alert(text);

		if (text.length > 0) {
			GetPokemonByName(text);

		} else {
			setError(true);
		}
	};
	/*const Item = styled(Paper)(({ theme }) => ({

        padding: theme.spacing(1),
        textAlign: 'center',
        border:'none',
        boxShadow:'none',
        backgroundColor:'#FEE8B6'

    })); */

	return (
		<>
			<form onSubmit={handleSubmit}>
				<SearchComp
					label="Search for pokemon"
					value={text}
					handleTextOnChange={handleTextChange}
				/>
				<br />
				<ButtonDef text="Search!" />
			</form>

			{error === true && (
				<ErrorAlert alertMssg="Please insert a pokemon name" />
			)}
		</>
	);
}
