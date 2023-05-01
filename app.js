// get only unique categories - HARDEST ONE
// iterate over categories return button
// make sure to select buttons when are available

// items
const menu = [
	{
		id: 1,
		title: "Strawberry cake",
		category: "breakfast",
		price: 15.99,
		img: "./images/Item-1.jpg",
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
	},
	{
		id: 2,
		title: "Chocolate  Cake",
		category: "breakfast",
		price: 13.99,
		img: "./images/Item-2.jpg",
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
	},
	{
		id: 3,
		title: "Butter milk pancake",
		category: "breakfast",
		price: 6.99,
		img: "./images/Item-3.jpg",
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
	},
	{
		id: 4,
		title: "Bibimbap rice",
		category: "lunch",
		price: 20.99,
		img: "./images/Item-4.jpg",
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
	},
	{
		id: 5,
		title: "Jellof rice",
		category: "lunch",
		price: 22.99,
		img: "./images/Item-5.jpg",
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
	},
	{
		id: 6,
		title: "Veggie rice",
		category: "dinner",
		price: 18.99,
		img: "./images/Item-6.jpg",
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
	},
	{
		id: 7,
		title: "White rice",
		category: "dinner",
		price: 8.99,
		img: "./images/Item-7.jpg",
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
	},
	{
		id: 8,
		title: "Barbeque shrip",
		category: "lunch",
		price: 12.99,
		img: "./images/Item-8.jpg",
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
	},
	{
		id: 9,
		title: "corn rice",
		category: "dinner",
		price: 16.99,
		img: "./images/Item-9.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 10,
		title: "Sushi rice",
		category: "lunch",
		price: 16.99,
		img: "./images/Item-10.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 11,
		title: "watermelon shakes",
		category: "shakes",
		price: 12.99,
		img: "./images/Item-11.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 12,
		title: "Strawberry shakes",
		category: "shakes",
		price: 14.99,
		img: "./images/Item-12.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 13,
		title: "Avocado shakes",
		category: "shakes",
		price: 11.99,
		img: "./images/Item-13.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 14,
		title: "chocolate milk shakes",
		category: "shakes",
		price: 10.99,
		img: "./images/Item-14.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 15,
		title: "Vanlila suprise shakes",
		category: "shakes",
		price: 16.99,
		img: "./images/Item-15.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 16,
		title: "Steak dinner",
		category: "dinner",
		price: 33.99,
		img: "./images/Item-16.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 17,
		title: "beef steak ",
		category: "dinner",
		price: 33.99,
		img: "./images/Item-17.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 18,
		title: " goat meat pepper soup",
		category: "dinner",
		price: 33.99,
		img: "./images/Item-18.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
	diplayMenuItems(menu);
	displayMenuButtons();
});

function diplayMenuItems(menuItems) {
	let displayMenu = menuItems.map(function (item) {
		// console.log(item);

		return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
        </article>`;
	});
	displayMenu = displayMenu.join("");
	// console.log(displayMenu);

	sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
	const categories = menu.reduce(
		function (values, item) {
			if (!values.includes(item.category)) {
				values.push(item.category);
			}
			return values;
		},
		["all"]
	);
	const categoryBtns = categories
		.map(function (category) {
			return `<button type="button" class="filter-btn" data-id=${category}>
        ${category}
        </button>`;
		})
		.join("");
	btnContainer.innerHTML = categoryBtns;
	const filterBtns = document.querySelectorAll(".filter-btn");
	// filter items
	filterBtns.forEach(function (btn) {
		btn.addEventListener("click", function (e) {
			// console.log(e.currentTarget.dataset);
			const category = e.currentTarget.dataset.id;
			const menuCategory = menu.filter(function (menuItem) {
				// console.log(menuItem.category);
				if (menuItem.category === category) {
					return menuItem;
				}
			});
			if (category === "all") {
				diplayMenuItems(menu);
			} else {
				diplayMenuItems(menuCategory);
			}
		});
	});
}
