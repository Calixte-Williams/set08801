//Import Dairy Yogurt Data
//Declaring Variables

var tasks = [
  {
    heading: "card 1",
    body: "description",
    image: "/Final_Project/Resources/yogurts/test.jpg",
    ingredients: "Butter, Milk, Chocolate",
    instructions: "Whisk it",
  },
  {
    heading: "card 2",
    body: "description",
    image: "/Final_Project/Resources/yogurts/test.jpg",
    ingredients: "Butter, Milk, Chocolate",
    instructions: "Whisk it",
  },
  {
    heading: "card 3",
    body: "description",
    image: "/Final_Project/Resources/yogurts/test.jpg",
    ingredients: "Butter, Milk, Chocolate",
    instructions: "Whisk it",
  },
  {
    heading: "card 4",
    body: "description",
    image: "/Final_Project/Resources/yogurts/test.jpg",
    ingredients: "Butter, Milk, Chocolate",
    instructions: "Whisk it",
  },
  {
    heading: "card 5",
    body: "description",
    image: "/Final_Project/Resources/yogurts/test.jpg",
    ingredients: "Butter, Milk, Chocolate",
    instructions: "Whisk it",
  },
];

/*
const postContainer = document.querySelector(".yogurt");

const postMethods = () => {
  cardData.map((postData) => {
    //console.log(postData); //Read out Data for Testing
    const postElement = document.createElement("div");
    postElement.classList.add("yogurt", "col-md-auto");
    postElement.innerHTML= '
    <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
    '
    postContainer.appendChild(postElement)
  });
};
postMethods();
*/

let cardContainer;

const createTaskCard = (task) => {
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
  image.src = task.image;

  let cardBodyContainer = document.createElement("div");
  cardBodyContainer.className = "col-md-8";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let title = document.createElement("h5");
  title.innerText = task.heading;
  title.className = "card-title expand";

  let description = document.createElement("p");
  description.innerText = task.body;
  description.className = "card-text";

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBodyContainer.appendChild(cardBody);
  imgBox.appendChild(image);
  internalContainer.appendChild(imgBox);
  internalContainer.appendChild(cardBodyContainer);
  card.appendChild(internalContainer);
  container.appendChild(card);
  cardContainer.appendChild(container);
};

const initListOfTasks = () => {
  if (cardContainer) {
    document.getElementById("card-container").replaceWith(cardContainer);
    return;
  }

  cardContainer = document.getElementById("card-container");
  tasks.forEach((task) => {
    createTaskCard(task);
  });
};

initListOfTasks();

/*-----------------------------------------------------------------------------*/
// Selecting all sections with class of section
const expands = document.querySelectorAll(".expand");

// On click event for each section
expands.forEach((expand) => {
  expand.addEventListener("mouseover", () => {
    // and add it to the selected section
    expand.classList.add("active");
  });
  expand.addEventListener("mouseout", () => {
    // and add it to the selected section
    expand.classList.remove("active");
  });
});
