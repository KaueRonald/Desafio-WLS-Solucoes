import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItem } from "../models/Sidebaritem";
import {Tarefas, Sobre} from "../pages/Overview";

type SidebarLinkProps = {
    item: SidebarItem;
}

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-betwen;
    align-items: center; 
    height: 3rem;
    font-size: 1.3rem;
    padding: 1rem;
    text-decoration: none;
    color: white;

    &:hover{
        background-color: #0039CC;
        
    }
`;

const SidebarLabel = styled.span`
margin-left: 1rem
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    return<>
    <SidebarLink to={item.path}>
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
    </SidebarLink>
    </>
};

export default Submenu;