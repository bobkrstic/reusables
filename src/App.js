import React from "react";
import "./style.css";

// import Header from "./ReusableComponents/Header";
// import MainContent from "./ReusableComponents/MainContent";
// import Footer from "./ReusableComponents/Footer";
import ContactCard from "./ReusableComponents/ContactCard";

import TodoItem from "./ToDoAppComponents/TodoItem";

function App() {
  return (
    // <div className="todo-list">
    //    <Header />
    //   <MainContent />
    //   <Footer />
    //  <TodoItem />
    //   <TodoItem />
    //   <TodoItem />
    //   <TodoItem />

    //  </div>

    <div>
      <ContactCard
        name="Cat"
        imgUrl="http://placekitten.com/400/200"
        phone="(999) 999-9999"
        email="someemail@test.com"
      />

      <ContactCard
        name="Cat Two"
        imgUrl="http://placekitten.com/400/200"
        phone="(999) 999-9999"
        email="someemail@test.com"
      />

      <ContactCard
        name="Cat Three"
        imgUrl="http://placekitten.com/300/200"
        phone="(000) 999-9999"
        email="catemail@test.com"
      />
    </div>
  );
}

export default App;
