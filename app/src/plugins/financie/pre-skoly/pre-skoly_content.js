const zakladneSkoly = {
	category: [
			{
			id: 1,
			title: "1 - 2 Ročník",
			img:"rocnik1.svg",
			link:"/pre-skoly/zakladne-skoly/rocnik-1-2"
			},
			{
			id: 2,
			title: "3 - 4 Ročník",
			img:"rocnik2.svg",
			link:"/pre-skoly/zakladne-skoly/rocnik-3-4"
			},
			{
			id: 3,
			title: "5 - 6 Ročník",
			img: "rocnik3.svg",
			link:"/pre-skoly/zakladne-skoly/rocnik-5-6"
			},
			{
			id: 4,
			title: "7 - 9 Ročník",
			img: "rocnik4.svg",
			link:"/pre-skoly/zakladne-skoly/rocnik-7-9"
			}
		],
	content: 'Pripravili sme pre vás materiály pre učiteľov zo základných škôl.',
	title: 'Základná škola'

};
const stredneSkoly = {
	category: [
		{
		id: 1,
		title: "1. Ročník",
		img:"rocnik1.svg",
		link:"/pre-skoly/stredne-skoly/rocnik-1"
		},
		{
		id: 2,
		title: "2. Ročník",
		img:"rocnik2.svg",
		link:"/pre-skoly/stredne-skoly/rocnik-2"
		},
		{
		id: 3,
		title: "3. Ročník",
		img:"rocnik3.svg",
		link:"/pre-skoly/stredne-skoly/rocnik-3"
		},
		{
		id: 4,
		title: "4. Ročník",
		img:"rocnik4.svg",
		link:"/pre-skoly/stredne-skoly/rocnik-4"
		}
	],
	content: 'Pripravili sme pre vás materiály pre učiteľov zo stredných škôl.',
	title: 'Stredná škola'
}
const vysokeSkoly = {
	category: [
		{
		id: 1,
		title: "1. semester",
		img:"rocnik1.svg",
		link:"/pre-skoly/vysoke-skoly/semester-1"
		},
		{
		id: 2,
		title: "2. semester",
		img:"rocnik2.svg",
		link:"/vysoke-skoly/semester-2"
		},
		{
		id: 3,
		title: "3. semester",
		img:"rocnik3.svg",
		link:"/pre-skoly/vysoke-skoly/semester-3"
		},
		{
		id: 4,
		title: "4. semester",
		img:"rocnik4.svg",
		link:"/pre-skoly/vysoke-skoly/semester-4"
		}
	],
	content: 'Pripravili sme pre vás materiály pre učiteľov z vysokých škôl.',
	title: 'Vysoká škola'
}

export default {
	'zakladne-skoly': zakladneSkoly,
	'stredne-skoly': stredneSkoly,
	'vysoke-skoly': vysokeSkoly
}