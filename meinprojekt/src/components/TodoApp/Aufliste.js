import Aufgabelisteitem from './Aufgabelisteitem'

const AufgabenListe = () => {
    return(
    <div className='Aufgaben'>
        <h3>Noch zu erledigen</h3>
        <ul>
            {/* in diesen Komponenten werden daten eingereicht: Passing props (properties), Eigenschften weiterreichen */}
            <Aufgabelisteitem 
                aufgabe={'Erste Aufgabe'} 
                erledigt={"nein"}
            />
            <Aufgabelisteitem aufgabe={'Aufgabe 2'} erledigt={"nein"}/>
            <Aufgabelisteitem aufgabe={'Aufgabe 3'} erledigt={"ja"}/>
        </ul>
    </div>
    )
}

export default AufgabenListe