import Header from "../Header"
const TodoApp=()=>{
return(
    <div className="TodoApp">
<Header/>
  
  <div className="neueAufgabe">
    
    <input  type="text" placeholder="schreib etwas"/>

   <button>aufgabe hinzufügen</button>
 
  </div>
  <aufgabeliste/>
  </div>

);
  
}
export default TodoApp;