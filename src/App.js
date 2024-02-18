import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import NewTask from './components/NewTask';
import CompteurSimple from './components/CompteurSimple';
import FormSaisi from './components/FormSaisi';
import Chronometre from './components/Chronometre';
import SelecteurTheme from './components/SelecteurTheme';
import GestionnaireTache from './components/GestionnaireTache';
import ListePlantes from './components/ListePlantes';
import ListeData from './components/ListeData';


function App() {
  let task = "task1"
  let liste_place = ["plage","montagne","sahra","hotel", "iles"]
  let liste_restaurant = ["lelle el bayya","restaurant fadi", "res. haroun"]
  let liste_recette = ["koskous","pasta","rouz","omelette"]
  return (
    <div className="App">
      <TaskList props={task} />
      <AddTask />
      <NewTask />
      <CompteurSimple />
      <FormSaisi />
      <Chronometre />
      <SelecteurTheme />
      <GestionnaireTache />
      <ListePlantes liste_place={liste_place} liste_restaurant={liste_restaurant} liste_recette={liste_recette} />
      <ListeData />
    </div>
  );
}

export default App;
