import { HomeCard } from "@atoms/homeCard/homeCard";
import { $icons } from "@stores/icons";
import { createRoute } from "atomic-router";
import { useUnit } from "effector-solid";

import { Component, For, onMount } from "solid-js";

import bgImage from "@media/icons/main/BG.png";

import { useI18n } from "@solid-primitives/i18n";

import { homePageStyles } from "./app.css";
import { optimizeUrl } from "@utils/optimizeUrl";


export const appRoute = createRoute();

const App: Component = () => {
	const icons = useUnit($icons);
	const [ t ] = useI18n();
	const cards = [
		"jpg_to_pdf",
		"powerpoint_to_pdf",
		"excel_to_pdf",
		"word_to_pdf",
		"html_to_pdf",
		"pdf_to_excel",
		"pdf_to_jpg",
		"pdf_to_word",
		"pdf_to_powerpoint",
		"pdf_to_pdfa",
	];
	onMount(() => optimizeUrl());
	return (
		<div
			class={homePageStyles({ css: {
				backgroundImage: `url(${bgImage})`,
			} })}
		>
			<h1>{ t("home.title") }</h1>
			<p>{ t("home.description") }</p>
			<div>
				<For each={cards}>{ card => 
					<HomeCard name={card} icon={icons()[card]} />
				}</For>
			</div>
		</div>
	);
};
export default App;
