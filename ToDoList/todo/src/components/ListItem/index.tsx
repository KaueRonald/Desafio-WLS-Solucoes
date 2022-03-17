import * as c from './styles';
import { Item } from '../../types/item';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')


type Props = {
    item: Item;
}


export const ListItem = ({item}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const [modalIsOpen, setIsOpen] = useState(false)

    function handOpenModal(){
        setIsOpen(true)
    }

    function handCloseModal(){
        setIsOpen(false)
    }

    const [inputText, setInputText] = useState('');
    


    return (
        <c.Container done={isChecked}>
            <label>{item.name}<br></br>{item.subItem}</label>
            <c.input><br></br><select name="seletor" >
        <option value="op1">Em progresso</option>
        <option value="op2"> ✔ Concluída</option>
    </select></c.input>
            
            <c.image><button onClick={handOpenModal}><img src="https://img.icons8.com/ios-glyphs/10/00/menu-2.png"/></button></c.image>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={handCloseModal} 
                >
                <h2>Editar tarefa</h2>
                
                    <input type='text' placeholder='Nome da tarefa' value={inputText} onChange={e=>setInputText(e.target.value)}  /><br></br>
                    <input type='text' placeholder='Descrição' /><br></br>
                    <button onClick={handCloseModal}>Cancelar</button>
                    <button>Salvar</button>
                    <button>Excluir Tarefa</button>
                
                </Modal>
        </c.Container>
    );
}