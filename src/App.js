import React from "react";
import "./style.css";

// import Header from "./ReusableComponents/Header";
// import MainContent from "./ReusableComponents/MainContent";
// import Footer from "./ReusableComponents/Footer";

import TodoItem from "./ToDoAppComponents/TodoItem";

function App() {
  return (
    <div className="todo-list">
      {/* <Header />
      <MainContent />
      <Footer /> */}
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
