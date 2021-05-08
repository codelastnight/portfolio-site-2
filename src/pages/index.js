import React from "react"
import Layout from "../components/Layout"
//import BlogList from "../components/BlogList"
import indexStyles from "../styles/pages/index.module.scss"
export default function IndexPage() {
  return (
    <section className={indexStyles.layout} >
      <article className={indexStyles.layoutItem}>
          <div>
          <h1>art from last night</h1>
          <a href="https://https://www.behance.net/artlastnight">
            <p>portfolio</p>
          </a>
          <a href="https://www.instagram.com/art.last.night/">
            <p>instagram</p>
          </a>
          </div>
         <div>
           <p>Contact Me</p>
           <a href="mailto:work@lastnight.online">work@lastnight.online</a>

         </div>
      </article>
    </section>
  )
}