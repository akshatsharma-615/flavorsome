import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { searchEmpty, searchImg } from "../../utils/images";
import recipes from "../../utils/recipes";
import _ from "lodash";
import "./search.css";

const Search = () => {
	const [searchStr, setSearchStr] = useState("");

	const matchesTitle = (title, str) => {
		title = _.kebabCase(title);
		str = _.kebabCase(str);
		return title.includes(str);
	};

	const matchesIngr = (ingredients, str) => {
		for (let i = 0; i < ingredients.length; ++i) {
			let ing = _.kebabCase(ingredients[i]);
			if (ing.includes(_.kebabCase(str))) return true;
		}
		return false;
	};

	const handleChange = (e) => {
		setSearchStr(() => e.target.value);
		setSearchResults(() => []);
		recipes.forEach((recipe) => {
			if (
				matchesTitle(recipe.title, searchStr) ||
				matchesIngr(recipe.ingredients, searchStr)
			)
				setSearchResults((p) => [...p, recipe]);
		});
	};
	const [searchResults, setSearchResults] = useState([]);
	const handleSubmit = (e) => {
		e?.preventDefault();
		setSearchResults(() => []);
		recipes.forEach((recipe) => {
			if (recipe.title.includes(searchStr))
				setSearchResults((p) => [...p, recipe]);
		});
		console.log(searchStr);
	};
	return (
		<main className="search">
			<section className="search-head">
				<h1>Search for more Recipes</h1>
			</section>
			<section className="search-input">
				<form onSubmit={handleSubmit}>
					<Input
						placeholder="Type Here..."
						value={searchStr}
						onChange={handleChange}
						type="text"
						icon="search"
					/>
					<button type="submit" className="dispn">
						submit
					</button>
				</form>
			</section>
			<section className="search-body">
				{searchStr === "" ? (
					<>
						<img
							src={searchImg}
							alt="Search"
							style={{
								margin: "2.5% auto",
							}}
						/>
						<span
							style={{
								fontSize: "1.5rem",
								lineHeight: "2rem",
							}}
						>
							Waiting to Search!
						</span>
					</>
				) : searchResults.length > 0 ? (
					<ul>
						{searchResults.map((res, id) => (
							<li key={id}>{res.title}</li>
						))}
					</ul>
				) : (
					<>
						<img
							src={searchEmpty}
							alt="Not Found"
							style={{
								margin: "2.5% auto",
							}}
						/>
						<h2>
							Could not find any results matching "{searchStr}"
						</h2>
					</>
				)}
			</section>
		</main>
	);
};

export default Search;
