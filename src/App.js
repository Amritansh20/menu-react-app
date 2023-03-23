import { useState } from "react";
import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Category from "./Category";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const array = ["all", ...tempSet];

const allcategory = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [category] = useState(allcategory);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"}></Title>
        <Category categories={category} filterItems={filterItems}></Category>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
