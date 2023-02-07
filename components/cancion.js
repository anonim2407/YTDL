import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/canciones.module.css'

function Cancion({ song }) {
    return (
        <Link legacyBehavior href={`/song/${song.id.videoId}`}>
            <div className={styles.contenido}>
                <div className={styles.cancion}>
                    <Image src={song.snippet.thumbnails.high.url} width={1000} height={500} alt={`Image song ${song.snippet.title}`} />
                    <div className={styles.descripcion}>
                        <h3>{song.snippet.title}</h3>
                        <p>{song.snippet.channelTitle}</p>
                    </div>

                </div>
            </div>
        </Link>


    )
}

export default Cancion