import Layout from "@/components/layout"
import styles from '../../styles/canciones.module.css'
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import axios from "axios"
import { redirect } from "next/dist/server/api-utils"

export default function Song() {
    const [songs, setSongs] = useState()
    const router = useRouter()



    const buscarAPI = async () => {
        await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${router.query.url}&key=AIzaSyCe6j0U6WIb3vL1F_rALk1DyIXv1gjWRcI&fields=items(id,snippet(channelId,title,channelTitle,categoryId),statistics)&part=snippet,statistics`)
            .then(response => {
                console.log(response.data.items['0'])
                setSongs(response.data.items['0'])
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        buscarAPI()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const axios = require("axios");

        const options = {
          method: 'GET',
          url: 'https://youtube-mp36.p.rapidapi.com/dl',
          params: {id: router.query.url},
          headers: {
            'X-RapidAPI-Key': '9eeaee03e9msh2f3d679486cf33fp1c2840jsne794dc7c26bb',
            'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
            if (response.data.status === 'ok')
            return window.location = response.data.link
        }).catch(function (error) {
            console.error(error);
        });

       
    }
    // const { title, channelTitle } = songs.snippet
    return (

        <Layout>

            <div className={`contenedor ${styles.contenido}`}>
                <iframe className={styles.video} width="560" height="315" src={`https://www.youtube.com/embed/${router.query.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <form onSubmit={handleSubmit} className={styles.search}>
                    <button className={styles.btnSearch}>DOWNLAOD</button>
                </form>
                {/* <h2>{title}</h2>
                <p>{channelTitle}</p> */}
            </div>

        </Layout>

    )
}