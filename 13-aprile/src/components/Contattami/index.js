
import "./styles.css"

export const Form = ({form}) => (

    <div className="form">
      <h2>Contattami</h2>
      <label htmlFor="object">Oggetto</label>
       <input type="text" id="object" />

      <label htmlFor="message">Messaggio</label>
      <textarea rows="3" id="message"></textarea>
    
    </div>

)



     