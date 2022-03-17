//import { link } from 'fs';
import * as c from './App.styles';
import Sidebar from './components/sidebar';
import { FC } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Tarefas, Sobre} from './pages/Overview';
import { useState } from 'react';
import {Item} from './types/item';
import { ListItem }  from './components/ListItem';
import { AddArea} from './components/AddArea';


const App: FC = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'comprar pão', done: false, subItem: 'Descrição: '},
    {id: 2, name: 'comprar bolo', done: false, subItem: 'Descrição:'},
  ]);

  const handleAddTask = (_taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: '',
      done: false,
      subItem: 'Descrição:'
    });
    setList(newList);
  }

  return (
      <c.container>
       
       <Router>
        <Sidebar/>
         <Routes>
          <Route path="/Tarefas"  element={Tarefas} ></Route>
          <Route path="/Tarefas"  element={Sobre} ></Route>
         </Routes>
       </Router>
       <c.Header><button type="submit"><img src="https://img.icons8.com/ios/15/000000/search--v1.png"/>
       <input type="search" placeholder= 'Procurar tarefas'  /></button>
       <br></br></c.Header>
       <c.titulo>Tarefas</c.titulo>
       <c.Area>

         
          {/* Área de adicionar nova tarefa*/}
          <AddArea onEnter={handleAddTask}/>

          

          {list.map((item, index)=>(
            <ListItem key={index} item={item}/>
          ))}
        </c.Area>
        
      </c.container> 
  );

}

export default App;