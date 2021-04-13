const zakladneSkoly = {
	category: [
			{
			id: 1,
			title: "1 - 2 Ročník",
			img:"rocnik1.svg",
			link:"1-2-rocnik"
			},
			{
			id: 2,
			title: "3 - 4 Ročník",
			img:"rocnik2.svg",
			link:"3-4-rocnik"
			},
			{
			id: 3,
			title: "5 - 6 Ročník",
			img: "rocnik3.svg",
			link:"5-6-rocnik"
			},
			{
			id: 4,
			title: "7 - 9 Ročník",
			img: "rocnik4.svg",
			link:"7-9-rocnik"
			}
		],
	content: 'Pripravili sme pre vás materiály pre učiteľov zo základných škôl.',
	title: 'Základná škola',
	defaultLink: '1-2-rocnik'

};
const stredneSkoly = {
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
const vysokeSkoly = {
	category: [
		{
		id: 1,
		title: "1. semester",
		img:"rocnik1.svg",
		link:"1-semester"
		},
		{
		id: 2,
		title: "2. semester",
		img:"rocnik2.svg",
		link:"2-semester"
		},
		{
		id: 3,
		title: "3. semester",
		img:"rocnik3.svg",
		link:"3-semester"
		},
		{
		id: 4,
		title: "4. semester",
		img:"rocnik4.svg",
		link:"4-semester"
		}
	],
	content: 'Pripravili sme pre vás materiály pre učiteľov z vysokých škôl.',
	title: 'Vysoká škola',
	defaultLink: '1-semester'
}

export default {
	'zakladne-skoly': zakladneSkoly,
	'stredne-skoly': stredneSkoly,
	'vysoke-skoly': vysokeSkoly
}