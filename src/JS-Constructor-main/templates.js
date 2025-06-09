import {row, col_sm} from './utilites.js'

function title(block) {
	return row(col_sm(`<h1>${block.value}</h1>`))
}

function text(block) {
	return row(col_sm(`<p>${block.value}</p>`))
}

function columns(block){
	let html = '';
	block.value.forEach(item => {
		html += col_sm(item)
	})
	return row(html)
}

function image(block) {
	return row(`<img src="${block.value}" alt="" />`);
}

export const templates = {
	title,
	text,
	columns,
	image
}