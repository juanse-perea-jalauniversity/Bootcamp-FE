import { RecipeModel } from "./models";

export const basicSalad: RecipeModel = {
	id: 1,
	name: "Basic salad",
	description: "Delicious salad",
	ingredients: [
		{
			name: "Lettuce",
			quantity: 1,
			unit: "lb"
		},
		{
			name: "Tomatoe",
			quantity: 1,
			unit: "sliced tomato"
		},
		{
			name: "Carrot",
			quantity: 1,
			unit: "lb"
		},
	]
};

export const pastaCarbonara: RecipeModel = {
	id: 2,
	name: "Pasta Carbonara",
	description: "A classic rich and creamy Roman pasta dish",
	ingredients: [
		{
			name: "Pasta",
			quantity: 200,
			unit: "g"
		},
		{
			name: "Guanciale or Bacon",
			quantity: 100,
			unit: "g"
		},
		{
			name: "Egg",
			quantity: 2,
			unit: "pcs"
		}
	]
};