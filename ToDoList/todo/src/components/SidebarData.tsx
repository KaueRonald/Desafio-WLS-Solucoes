import { AiFillCaretDown, AiFillCaretUp, AiOutlineAlert, AiOutlineHome, AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import {FaCog} from 'react-icons/fa';
import { SidebarItem } from "../models/Sidebaritem";

export const SidebarData: SidebarItem[] = [
    {
        title: 'Tarefas',
        path: '/Tarefas',
        icon: <AiOutlineTable/>,
        iconClosed: <AiFillCaretDown/>,
        iconOpened: <AiFillCaretUp/>,
     
    },
    {
        title: 'Sobre',
        path: '/Sobre',
        icon: <AiOutlineAlert/>,
        iconClosed: AiFillCaretDown,
        iconOpened: AiFillCaretUp,

    }
  
];
