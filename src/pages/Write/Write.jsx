import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Button from "../../components/Button/Button";
import Input, { TextArea } from "../../components/Input/Input";
import "./write.css";

const Write = () => {
	const [newRecipe, setNewRecipe] = useState({
		title: "",
		image: "",
		about: "",
		ingredients: "",
		content: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewRecipe((p) => ({
			...p,
			[name]: value,
		}));
	};
	const handleReset = (e) => {
		e?.preventDefault();
		setNewRecipe({
			title: "",
			image: "",
			about: "",
			ingredients: "",
			content: "",
		});
	};
	const handleSubmit = (e) => {
		e?.preventDefault();
		console.log(newRecipe);
	};
	return (
		<main className="write">
			<section className="write-head">
				<h1>Write your own Recipe !</h1>
				<Button text="Publish Recipe" icon="save" />
			</section>
			<form onSubmit={handleSubmit} onReset={handleReset}>
				<Input
					type="text"
					placeholder="Title text"
					icon="title"
					name="title"
					value={newRecipe.title}
					onChange={handleChange}
					required
				/>
				<Input
					type="text"
					placeholder="Short Description"
					icon="info"
					name="about"
					value={newRecipe.about}
					onChange={handleChange}
					required
				/>
				<Input
					type="url"
					placeholder="Cover Image URL"
					icon="image"
					name="image"
					value={newRecipe.image}
					onChange={handleChange}
					required
				/>
				<Input
					type="text"
					placeholder="Ingredients"
					icon="soup_kitchen"
					name="ingredients"
					value={newRecipe.ingredients}
					onChange={handleChange}
					required
				/>
				<div className="form-flex">
					<TextArea
						type="text"
						placeholder="Recipe Content (markdown supported)"
						icon="restaurant_menu"
						name="content"
						value={newRecipe.content}
						onChange={handleChange}
						required
					/>
					<div className="form-md">
						<ReactMarkdown>{newRecipe.content}</ReactMarkdown>
					</div>
				</div>
				<div className="form-group">
					<Button text="Cancel" type="reset" variant="outline" />
					<Button text="Publish Recipe" type="submit" />
				</div>
			</form>
		</main>
	);
};

export default Write;