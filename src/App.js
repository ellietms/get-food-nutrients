import React,{useEffect,useState} from "react"; 
import TakeIngredients from "./components/TakeIngredients "; 
import 'bootstrap/dist/css/bootstrap.css';


function App() {
 const [data,setData] = useState();
 useEffect(() => {
   fetch()
 }, [data])
  return (
    <div className="pageContainer">
    <TakeIngredients />
    </div>
  );
}

export default App;
