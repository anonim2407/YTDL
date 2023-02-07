import Cancion from './cancion'
import styles from '../styles/canciones.module.css'

function ListaCanciones({ songs }) {


    console.log(songs)
    return (
        <div className={`contenedor ${styles.grid}`}>
            {
                songs?.map(song => (
                    <Cancion
                    key={song}
                    song={song}
                    />
                ))
            }
        </div>
    )
}

export default ListaCanciones