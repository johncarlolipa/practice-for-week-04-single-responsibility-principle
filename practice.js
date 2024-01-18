/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
function combineIngredients(pieType, recipe) {
  return `Combining ingredients for ${pieType}: ${recipe.map(ingredient => ingredient.name).join(', ')}`;
}

function bakePie(pieNumber) {
  console.log(`Baked pie ${pieNumber}!`);
}

function printCost(cost) {
  console.log(`Cost per pie: ${cost}`);
}

function calculateTotalCost(cost, pieQuantity) {
  return cost * pieQuantity;
}

function printRevenue(revenue) {
  console.log(revenue);
}

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = recipes[pieType];

  console.log(combineIngredients(pieType, recipe));

  for (let i = 0; i < pieQuantity; i++) {
    bakePie(i + 1);
  }

  const costOfPie = recipe.reduce((prev, current) => prev + current.cost, 0);
  printCost(costOfPie);

  const totalCost = calculateTotalCost(costOfPie, pieQuantity);

  // Print the total revenue calculated using the given profitMargin
  const revenue = totalCost * (profitMargin || 1.2);
  printRevenue(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

/******************************* LOCAL TESTS *******************************/
bakeAndSellPies("applePie", 5, 2.5);
bakeAndSellPies("pumpkinPie", 2);
bakeAndSellPies("cherryPie", 7, 1.7);
/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  combineIngredients,
  bakePie,
  printCost,
  calculateTotalCost,
  printRevenue,
  bakeAndSellPies
};
