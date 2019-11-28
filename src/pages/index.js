import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import logo from "../images/final-logo.jpg"
// import "../styles/Righteous-Regular.ttf"
class IndexPage extends React.Component {
  render() {
    const siteTitle = "Atole Media"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src={logo} alt="atole media logo" />
        <h1 style={{ color: "#f97976" }}>Take warm sip of creativity </h1>
        <p style={{ color: "purple" }}>
          Atole Media is a creative studio specializing in storytelling through
          web comics, web games, animations and concept art.
        </p>
        <p style={{ color: "purple" }}>
          We provide a means to escape reality, to step away from the day to day
          and into the fantastical. The word Atole is the Mexican word of a
          traditional hot drink made of maize, and calls forth the Mexican art
          of storytelling, of sitting around the table, nursing a cup of this
          magical beverage. Only then is one ready to be part of story.
        </p>
        <p style={{ color: "purple" }}>
          {" "}
          All you have to do is sit back and drink the Atole!
        </p>
        <Link to="/blog/">
          <Button marginTop={"50px"} marginBottom={"50px"}>
            Go to Blog
          </Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
