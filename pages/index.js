import React from "react"
import Best from "../components/Best"
import Hero from "../components/Hero"
import Content from "../components/Promo"
import { client } from "../lib/client"
import Layout from "../components/Layout"
const Home = ({ products }) => {
  return (
    <Layout>
      <Hero />
      <Best products={products} />
      <Content />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const products = await client.fetch(
    `*[_type == 'product']{_id, image, name, price, slug, 'category': category[]->title}`
  )

  return {
    props: { products },
  }
}

export default Home
