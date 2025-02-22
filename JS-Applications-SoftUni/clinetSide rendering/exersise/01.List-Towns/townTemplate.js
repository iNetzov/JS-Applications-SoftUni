import { html } from '../node_modules/lit-html/lit-html.js'

export let townLiTemplate = (town) => html `<li>${town}</li>`;

export let allTownTemplate = (towns) => 
html `<ul>
${towns.map(t=>townLiTemplate(t))}
</ul>`;