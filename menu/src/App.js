import "./App.css";
//import useState from "react";

function App() {
  const fullMenu = {
    breakfast: [
      { food: "pancakes", price: 5.0, vegetarian: true },
      { food: "waffles", price: 5.0, vegetarian: true },
      { food: "orange juice", price: 2.0, vegetarian: true },
    ],
    lunch: [
      { food: "turkey sandwich", price: 8.0, vegetarian: false },
      { food: "grilled cheese", price: 6.0, vegetarian: true },
      { food: "hamburger", price: 8.0, vegetarian: false },
    ],
    dinner: [
      { food: "chicken alfredo", price: 10.0, vegetarian: false },
      { food: "tofu stir-fry", price: 9.0, vegetarian: true },
      { food: "chili", price: 8.0, vegetarian: false },
    ],
  };

  const breakfastMenu = [
    fullMenu.breakfast[0].food,
    fullMenu.breakfast[1].food,
    fullMenu.breakfast[2].food,
  ];

  const breakfastMenuPrices = [
    fullMenu.breakfast[0].price,
    fullMenu.breakfast[1].price,
    fullMenu.breakfast[2].price,
  ];

  return (
    <div className="App">
      <h1>Menu</h1>
      <Menu
        mealType="Breakfast"
        items={breakfastMenu}
        prices={breakfastMenuPrices}
      />
    </div>
  );
}

function Menu(props) {
  return (
    <>
      <h2>{props.mealType}</h2>
      <p>
        {props.items[0]} (${props.prices[0]})
      </p>
      <p>
        {props.items[1]} (${props.prices[1]})
      </p>
      <p>
        {props.items[2]} (${props.prices[2]})
      </p>
    </>
  );
}

export default App;
