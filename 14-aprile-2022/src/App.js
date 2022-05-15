
import './App.css';

import {data} from "./data";
import {BookCard} from "./components/BookCard";

function App() {
  
  return (

    <div className='App'>

      <h2> My BookStore</h2>

      <div className='BookCards-wrapper'>
      {data.products.map((item) => (

      <BookCard 
      key={item.id}
      title={item.name} 
      description={item.description.split("").slice(0,90).join("") + "..."}
      img={item.img}

      />
     
    ))}
    </div>
    </div>


  


    
  );
}

export default App;
