import React from "react"
import { Link } from "gatsby"
// import "../components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Atole Media"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img
          style={{ margin: 0 }}
          src= {"../images/final-logo.jpg"}
          alt="atole media logo"
        />
        <h1 className="cool">Take a warm sip of creativity </h1>
        <p>
          Atole Media is a creative studio specializing in storytelling through
          web comics, web games, animations and concept art.
        </p>
        <p>
          We provide a means to escape reality, to step away from the day to day
          and into the fantastical. The word Atole is the Mexican word of a
          traditional hot drink made of maize, and calls forth the Mexican art
          of storytelling, of sitting around the table, nursing a cup of this
          magical beverage. Only then is one ready to be part of story.
        </p>
        <p> All you have to do is sit back and drink the Atole!</p>
        <Link to="/blog/">
          <Button marginTop="35px" color="red">
            Go to Blog
          </Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
