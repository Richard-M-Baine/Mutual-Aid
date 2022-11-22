import React from 'react';
import { NavLink } from 'react-router-dom';



function CharityCard({group}) {


    return (
        <NavLink className='navGroupAll' to={`/groups/${group.id}/about`}> 
        
        
        {group.about}
        
        
        
        </NavLink>


    )
}


export default CharityCard