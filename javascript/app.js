//Import Dairy Yogurt Data
//Declaring Variables

var dairyData = [
  {
    heading: "Berry Bircher",
    body: "Overnight oats that are low in fat and take 5 minutes to prepare. Pack your breakfast with frozen raspberries, bio yogurt and golden linseeds for a delicious and healthy start to the day",
    image: "/Resources/yogurts/berry-bircher.jpg",
    hIngredients: "Ingredients:",
    ingredients:
      "70g porridge oats, 2 tbsp golden linseeds, 2 ripe bananas, 140g frozen raspberries, 175g natural bio yogurt",
    hInstructions: "Method:",
    instructions:
      "STEP 1 Tip the oats and seeds into a bowl, and pour over 200ml boiling water and stir well. Add the bananas and three-quarters of the raspberries (chill the remainder), mash together, then cover and chill overnight. STEP 2 The next day, layer the raspberry oats in two tumblers or bowls with the yogurt, top with the reserved raspberries and serve.",
  },
  {
    //https://www.bbcgoodfood.com/recipes/lemon-curd-yogurt-fool
    heading: "Lemon Curd & Yogurt Fool",
    body: "Treat yourself to a delightfully easy family dessert, ready in just five minutes",
    image: "/Resources/yogurts/LemonCurd.jpg",
    hIngredients: "Ingredients:",
    ingredients:
      "300g jar lemon curd (we used Duchy Originals Traditional Lemon Curd), 500g tub 0% Greek yogurt, 200g punnet raspberry, 1 tbsp icing sugar, shortbread, to serve",
    hInstructions: "Method:",
    instructions:
      "STEP 1 Put the lemon curd and yogurt into a bowl. Fold together for a rippled effect. Divide the mixture between four glasses and chill. STEP 2 Mix raspberries and icing sugar together and gently crush, then spoon with their juices over the chilled mix and serve.",
  },
  {
    //https://www.bbcgoodfood.com/recipes/instant-frozen-berry-yogurt
    heading: "Frozen Berry Yogurt",
    body: "Try these tasty breakfast pots with fruit, bio yogurt and oats for a fuss-free start to the morning. They provide calcium, vitamin C and one of your 5-a-day",
    image: "/Resources/yogurts/BerryYogurt.jpg",
    hIngredients: "Ingredients:",
    ingredients:
      "250g frozen mixed berry, 250g 0%-fat Greek yogurt, 1 tbsp honey or agave syrup",
    hInstructions: "Method:",
    instructions:
      "STEP 1 Blend berries, yogurt and honey or agave syrup in a food processor for 20 seconds, until it comes together to a smooth ice-cream texture. Scoop into bowls and serve.",
  },
  {
    //https://www.bbcgoodfood.com/recipes/peach-orange-yogurt-pots-ginger-oats
    heading: "Peach & Orange Yogurt Pots with Ginger Oats",
    body: "Three ingredients and two minutes is all you need to whip up this low-fat, low-calorie frozen yogurt treat, which is ideal for eating after exercise or as a quick dessert",
    image: "/Resources/yogurts/PeachOrange.jpg",
    hIngredients: "Ingredients:",
    ingredients:
      "4 peaches or nectarines, stoned and diced, 1 orange, juiced and zested, 120g porridge oats, 25g pine SVGAnimatedNumberList, ½ tsp ground ginger, 1 tsp ground cinnamon, 2 tbsp sultanas, 4 x 150ml pots bio yogurt",
    hInstructions: "Method:",
    instructions:
      "STEP 1 Put the peaches and orange juice in a small pan. Put the lid on and cook gently for 3-5 mins, depending on their ripeness, until softened. Set aside to cool. STEP 2 Tip the oats and pine nuts into a pan and heat gently, stirring frequently until they’re just starting to toast. Turn off the heat and add the spices, zest and sultanas. STEP 3 Spoon the peaches and juices into four tumblers and top with the yogurt. Cover and chill until needed. Keep the oat mixture in an airtight container. When ready to serve, top the peaches and yogurt with the oat mixture.",
  },
  {
    //https://www.bbcgoodfood.com/recipes/frozen-tropical-fruit-yogurt
    heading: "Frozen Tropical Fruit Yogurt",
    body: "Try this genius recipe, as if by magic, the frozen tropical fruit freezes the yogurt when blended together. Use a food processor rather than a blender",
    image: "/Resources/yogurts/TropicalFruit.jpg",
    hIngredients: "Ingredients:",
    ingredients:
      "480g frozen tropical fruit mix, 170g Greek yogurt, 2 tbsp maple syrup or honey, 200g diced tropical fruit and passion fruit seeds, to serve",
    hInstructions: "Method:",
    instructions:
      "STEP 1 Put everything except the fresh fruit in a food processor and blend. Scoop straight into bowls, or tip into a container and freeze if you want to serve it later. Serve with the fresh tropical fruit and spoon over the passion fruit seeds.",
  },
];

var nonDairyData = [
  {
    //https://pinchofyum.com/5-minute-vegan-yogurt
    heading: "Cashew Yogurt",
    body: "This Creamy Dreamy Vegan “Yogurt” is the BEST! Made in just five minutes with three ingredients and naturally sweetened.",
    image: "/Resources/yogurts/CashewNut.jpeg",
    hIngredients: "Ingredients:",
    ingredients:
      "2 cups Frozen Peaches, 1/2 cup Cashews, 12 Ounces Tofu, 1/4 cup liquid sweetener – agave, maple syrup, or honey  (more or less to taste), 1 tablespoon lemon juice (more or less to taste)",
    hInstructions: "Method:",
    instructions:
      "STEP 1 Blend everything together on a high speed setting until very, very, verrry smooth. STEP 2 Store in jars, in the fridge, for up to 5 days!",
  },
  {
    //https://www.bbcgoodfood.com/recipes/instant-frozen-berry-yogurt
    heading: "Frozen Berry Yogurt",
    body: "Three ingredients and two minutes is all you need to whip up this low-fat, low-calorie frozen yogurt treat, which is ideal for eating after exercise or as a quick dessert",
    image: "/Resources/yogurts/BerryYogurt.jpg",
    hIngredients: "Ingredients:",
    ingredients:
      "250g frozen mixed berry, 250g 0%-fat Greek yogurt, 1 tbsp honey or agave syrup",
    hInstructions: "Method:",
    instructions:
      "STEP 1 Blend berries, yogurt and honey or agave syrup in a food processor for 20 seconds, until it comes together to a smooth ice-cream texture. Scoop into bowls and serve.",
  },
];

let cardContainerDairy;
let cardContainerNonDairy;

const createTaskDairyCard = (create) => {
  let container = document.createElement("div");
  container.className = "yogurt col-md-auto";

  let card = document.createElement("div");
  card.className = "card mb-3 expand";
  card.setAttribute("id", "unHide");

  let internalContainer = document.createElement("div");
  internalContainer.className = "row g-0";

  let imgBox = document.createElement("div");
  imgBox.className = "col-md-4";

  let image = document.createElement("img");
  image.className = "img-fluid rounded-start";
  image.src = create.image;

  let cardBodyContainer = document.createElement("div");
  cardBodyContainer.className = "col-md-8";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let title = document.createElement("h5");
  title.innerText = create.heading;
  title.className = "card-title";

  let description = document.createElement("p");
  description.innerText = create.body;
  description.className = "card-text";

  let hIngredients = document.createElement("h6");
  hIngredients.innerText = create.hIngredients;
  hIngredients.className = "card-text #hidden";
  hIngredients.setAttribute("id", "unHideHIngr");

  let ingredients = document.createElement("p");
  ingredients.innerText = create.ingredients;
  ingredients.className = "card-text #hidden";
  ingredients.setAttribute("id", "unHideIngr");

  let hInstructions = document.createElement("h6");
  hInstructions.innerText = create.hInstructions;
  hInstructions.className = "card-text #hidden";
  hInstructions.setAttribute("id", "unHideHInstr");

  let instructions = document.createElement("p");
  instructions.innerText = create.instructions;
  instructions.className = "card-text #hidden";
  instructions.setAttribute("id", "unHideInstr");

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(hIngredients);
  cardBody.appendChild(ingredients);
  cardBody.appendChild(hInstructions);
  cardBody.appendChild(instructions);
  cardBodyContainer.appendChild(cardBody);
  imgBox.appendChild(image);
  internalContainer.appendChild(imgBox);
  internalContainer.appendChild(cardBodyContainer);
  card.appendChild(internalContainer);
  container.appendChild(card);
  cardContainerDairy.appendChild(container);
};

const createTaskCardNonDairy = (create) => {
  let container = document.createElement("div");
  container.className = "yogurt col-md-auto";

  let card = document.createElement("div");
  card.className = "card mb-3 expand";

  let internalContainer = document.createElement("div");
  internalContainer.className = "row g-0";

  let imgBox = document.createElement("div");
  imgBox.className = "col-md-4";

  let image = document.createElement("img");
  image.className = "img-fluid rounded-start";
  image.src = create.image;

  let cardBodyContainer = document.createElement("div");
  cardBodyContainer.className = "col-md-8";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let title = document.createElement("h5");
  title.innerText = create.heading;
  title.className = "card-title";

  let description = document.createElement("p");
  description.innerText = create.body;
  description.className = "card-text";

  let hIngredients = document.createElement("h6");
  hIngredients.innerText = create.hIngredients;
  hIngredients.className = "card-text #hidden";
  hIngredients.setAttribute("id", "unHideHIngr");

  let ingredients = document.createElement("p");
  ingredients.innerText = create.ingredients;
  ingredients.className = "card-text #hidden";
  ingredients.setAttribute("id", "unHideIngr");

  let hInstructions = document.createElement("h6");
  hInstructions.innerText = create.hInstructions;
  hInstructions.className = "card-text #hidden";
  hInstructions.setAttribute("id", "unHideHInstr");

  let instructions = document.createElement("p");
  instructions.innerText = create.instructions;
  instructions.className = "card-text #hidden";
  instructions.setAttribute("id", "unHideInstr");

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(hIngredients);
  cardBody.appendChild(ingredients);
  cardBody.appendChild(hInstructions);
  cardBody.appendChild(instructions);
  cardBodyContainer.appendChild(cardBody);
  imgBox.appendChild(image);
  internalContainer.appendChild(imgBox);
  internalContainer.appendChild(cardBodyContainer);
  card.appendChild(internalContainer);
  container.appendChild(card);
  cardContainerNonDairy.appendChild(container);
};

const createDairy = () => {
  if (cardContainerDairy) {
    document
      .getElementById("dairyCardContainer")
      .replaceWith(cardContainerDairy);
    return;
  }

  cardContainerDairy = document.getElementById("dairyCardContainer");
  dairyData.forEach((create) => {
    createTaskDairyCard(create);
  });
};

const createNonDairy = () => {
  if (cardContainerNonDairy) {
    document
      .getElementById("nonDairyCardContainer")
      .replaceWith(cardContainerNonDairy);
    return;
  }

  cardContainerNonDairy = document.getElementById("nonDairyCardContainer");
  nonDairyData.forEach((create) => {
    createTaskCardNonDairy(create);
  });
};

createDairy();
createNonDairy();

/*-----------------------------------------------------------------------------*/
// Selecting all sections with class of section
const expands = document.querySelectorAll(".expand");
const cbody = document.getElementById("unHide");
const dbody = document.getElementById(".active");
const bbody = document.getElementsByClassName("active");
const cardBodyIngr = document.getElementById("unHideIngr");
const cardBodyInstr = document.getElementById("unHideInstr");
const cardBodyHInstr = document.getElementById("unHideHInstr");
const cardBodyHIngr = document.getElementById("unHideHIngr");

var tabLink = document.querySelectorAll(".card-text");

// On click event for each section
expands.forEach((expand) => {
  expand.addEventListener("mouseover", () => {
    // add it to the selected section
    expand.classList.add("active");
    //cardBodyInstr.classList.remove("hidden");
    //cardBodyHInstr.classList.remove("hidden");
    //cardBodyIngr.classList.remove("hidden");
    //cardBodyHIngr.classList.remove("hidden");
  });
  expand.addEventListener("mouseout", () => {
    // add it to the selected section
    expand.classList.remove("active");
    //cardBodyInstr.classList.add("hidden");
    //cardBodyHInstr.classList.add("hidden");
    //cardBodyIngr.classList.add("hidden");
    //cardBodyHIngr.classList.add("hidden");
  });
});

/*
var tabLink = document.querySelectorAll(".card-text");

tabLink.forEach(function (item) {
  item.addEventListener(
    "mouseover",
    function () {
      .classList.add("active-hide");
      document.querySelector(".hidden").classList.remove(".hidden");
    },
    false
  );
});
*/
