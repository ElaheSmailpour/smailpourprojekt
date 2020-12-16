

import aufgabelisteitem from './aufgabelisteitem'

const aufgabeliste = () => {
    return(
    <div className='Aufgaben'>
        <h3>Noch zu erledigen</h3>
        <ul>
           
            <aufgabelisteitem 
                aufgabe={'Erste Aufgabe'} 
                erledigt={"nein"}
            />
            <aufgabelisteitem aufgabe={'Aufgabe 2'} erledigt={"nein"}/>
            <aufgabelisteitem aufgabe={'Aufgabe 3'} erledigt={"ja"}/>
        </ul>
    </div>
    )
}

export default aufgabeliste
