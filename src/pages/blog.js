import React from "react"
import Layout from "../components/Layout"
//import BlogList from "../components/BlogList"

export default function BlogPage() {
  return (
    <Layout page="blog" bgColor="inherit">
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}