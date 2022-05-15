import "./styles.css";

export const BookCard = ({title, description, img}) => (
<div className="BookCard-container">
  <img className="BookCard-img" alt="book-img" src={img} />  
    <div className="desc-container">
       <h2 className="BookCard-title"> {title} </h2>
       <p className="BookCard-description"> {description}</p>
       <button className="button"> Add to Cart</button>
  
    </div>  


</div>
);