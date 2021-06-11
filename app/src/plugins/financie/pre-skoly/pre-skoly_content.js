const zakladnaSkolaPrvyStupen = {
	category: [
			{
			id: 1,
			title: "1. Ročník",
			img:"rocnik1.svg",
			link:"1-rocnik"
			},
			{
			id: 2,
			title: "2. Ročník",
			img:"rocnik2.svg",
			link:"2-rocnik"
			},
			{
			id: 3,
			title: "3. Ročník",
			img: "rocnik3.svg",
			link:"3-rocnik"
			},
			{
			id: 4,
			title: "4. Ročník",
			img: "rocnik4.svg",
			link:"4-rocnik"
			}
		],
	content: 'Pripravili sme pre vás materiály pre učiteľov z prvého stupňa základných škôl.',
	title: 'Základná škola 1. stupeň',
	defaultLink: '1-rocnik'

};
const zakladnaSkolaDruhyStupen = {
	category: [
		{
		id: 1,
		title: "5. Ročník",
		img:"rocnik1.svg",
		link:"5-rocnik"
		},
		{
		id: 2,
		title: "6. Ročník",
		img:"rocnik2.svg",
		link:"6-rocnik"
		},
		{
		id: 3,
		title: "7. Ročník",
		img:"rocnik3.svg",
		link:"7-rocnik"
		},
		{
		id: 4,
		title: "8-9. Ročník",
		img:"rocnik4.svg",
		link:"8-9-rocnik"
		}
	],
	content: 'Pripravili sme pre vás materiály pre učiteľov z druhého stupňa základných škôl.',
	title: 'Základná škola 2. stupeň',
	defaultLink: '5-rocnik'
}
const strednaSkola = {
	category: [
		{
		id: 1,
		title: "1. Ročník",
		img:"rocnik1.svg",
		link:"1-rocnik"
		},
		{
		id: 2,
		title: "2. Ročník",
		img:"rocnik2.svg",
		link:"2-rocnik"
		},
		{
		id: 3,
		title: "3. Ročník",
		img:"rocnik3.svg",
		link:"3-rocnik"
		},
		{
		id: 4,
		title: "4. Ročník",
		img:"rocnik4.svg",
		link:"4-rocnik"
		}
	],
	content: 'Pripravili sme pre vás materiály pre učiteľov zo stredných škôl.',
	title: 'Stredná škola',
	defaultLink: '1-rocnik'
}

export default {
	'zakladna-skola-1.stupen': zakladnaSkolaPrvyStupen,
	'zakladna-skola-2.stupen': zakladnaSkolaDruhyStupen,
	'stredna-skola': strednaSkola
}