import React from "react"


import useSiteMetadata from "../static_queries/useSiteMetadata"
import Helmet from "react-helmet"
import indexStyles from "../styles/pages/index.module.scss"

export default function IndexPage() {
  const { title, description } = useSiteMetadata()

  return (
    <section className={indexStyles.layout} >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <article className={indexStyles.layoutItem}>
          <div>
          <h1>art from last night</h1>
          <a href="https://www.behance.net/artlastnight">
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