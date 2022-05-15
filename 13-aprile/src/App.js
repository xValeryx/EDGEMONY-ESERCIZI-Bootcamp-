
import './App.css';

import { Header } from "./components/Header";
import {Description} from "./components/Description";
import {Form} from "./components/Contattami";
import {Footer} from "./components/Footer";


function App() {
  return (
    <div className="App">

      <Header />
    
     <div className="description-container">

      <Description 
      title = "Esperienze Lavorative"
      description= "Lorem ipsum dolor sit amet"
      />

     <Description 
      title = "Lingue"
      description= "Lorem ipsum dolor sit amet"
      />

     <Description 
      title = "Hobby"
      description= "Lorem ipsum dolor sit amet"
      />
      


    </div>

     <Form/>

      <Footer/> 
     

    </div>


     
     
    
    

    
    


  );
}

export default App;
