import { useState, useEffect } from "react"
import Layout from "@/components/layout"
import styles from '../styles/header.module.css'
import Image from "next/image"
import axios from "axios"
import ListaCanciones from "@/components/lista-canciones"

export default function Home() {
  const [search, setSearch] = useState('')
  const [songs,setSongs] = useState()
  const buscarAPI = async () => {
    await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyCe6j0U6WIb3vL1F_rALk1DyIXv1gjWRcI&type=video&q=${search}`)
      .then(response => {
    
        setSongs(response.data.items)
      }).catch((err) => {
        console.log(err)
      })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    buscarAPI()
  }


  return (
    <Layout>

      <form onSubmit={handleSubmit} className={styles.search}>
        <input
          type={'text'}
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <button className={styles.btnSearch}><Image src={'/img/icons8-search-100.png'} width={25} height={25} alt='Logo ytdl' /></button>
      </form>

      <ListaCanciones
      songs={songs}
      />

    </Layout>


  )
}


