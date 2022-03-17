import * as c from '../AddArea/styles';
import { useState, KeyboardEvent } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

type Props= {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    function handOpenModal(){
        setIsOpen(true)
    }

    function handCloseModal(){
        setIsOpen(false)
    }

    const [inputText, setInputText] = useState('');
    
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <c.container>
            <div ><button className="image" onClick={handOpenModal}>➕ Nova Tarefa</button></div>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={handCloseModal} 
                >
                <h2>Criar tarefa</h2>
                
                    <input type='text' placeholder='Nome da tarefa' value={inputText} onChange={e=>setInputText(e.target.value)} onKeyUp={handleKeyUp} /><br></br>
                    <input type='text' placeholder='Descrição' /><br></br>
                    <button onClick={handCloseModal}>Cancelar</button>
                    <button>Salvar</button>
                
                </Modal>
                
        </c.container>

    );

};