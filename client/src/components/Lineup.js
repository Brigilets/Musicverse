import React from 'react'
import AppNavbar from './AppNavbar'
import Footer from './Footer'
import {List} from 'reactstrap'
import './Lineup.scss'

const lineup = ['Âme', 'Pan-Pot', 'Ben Clock', 'Amelie Lens', 'Mind Against', 'ANNA', 'Rebekah', 'Dixon', 'Solomun', 'Maceo Plex', 'Tail of Us', 'Adam Bayer', 'Carl Cox', 'Sam Paganini', 'Kerri Chandler', 'Renaat Vandepapeliere', 'Ten Walls', 'Motor City Drum Ensemble', 'Marcel Dettman', 'Ricardo Villalobos', 'Kattenkarussell' , 'Molly', 'Lawrence', 'Extravelt' , 'Carl Craig' , 'Roman Flügel', 'Daso', 'Raresh', 'Claptone', 'Peggy Gou','Elderbrook', '...many more!' ]


const LineUp =()=>{
    return(
        <div>
            <AppNavbar/>
            <List className="text-center bg-light lineup">
            { lineup.map((artist,key)=>
              <li key={key} >{artist}</li>
                )}
            </List>
            <Footer/>
        </div>
    )
}


export default LineUp