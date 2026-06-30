import Counter from "./component/counter";
import Todolist from "./component/Todolist";
import ProfileCard from "./component/ProfileCard";
import SearchBox from "./component/SearchBox";

function App() {
    return(
        <>
          <Counter/>
          <Todolist/>
          
          <SearchBox/>
        </>
    );
}

export default App;