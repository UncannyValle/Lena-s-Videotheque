import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import logo from "../images/final-logo.jpg"
import meta from "../../gatsby-config"
// import "../styles/Righteous-Regular.ttf"
class IndexPage extends React.Component {
  render() {
    const siteTitle = meta.siteMetadata.title
    const { social } = meta.siteMetadata
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src={logo} alt="atole media logo" />
        <h1 style={{ color: "#f97976" }}>
          Every time we see a movie we experience a collective dream...
        </h1>
        <p style={{ color: "purple" }}>
          Hi, I'm Lena Zerlav! I'm a multimedia artist, with a background in
          film cinema studies. I've always had a passion for watching movies
          that resonate with me in a deep emotional level so I've decided to
          share thses ideas in the form of a weekly blog. Every week I will be
          reviewing a movie or TV show, going through the technical, and
          cinematographical impact I feel it has to me and to the world at
          large. Hopefully we can find some common ground and create forum where
          we can share ideas.
        </p>
        <p style={{ color: "purple" }}>Join me every Sunday to see whats up!</p>
        <p style={{ color: "purple" }}>
          {" "}
          Hit me up on{" "}
          <a
            style={{ boxShadow: `none`, fontSize: "1.2em" }}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/${social.twitter}`}
          >
            Twitter
          </a>
        </p>
        <p>
          Or check some of my art and photos on my <a
            style={{ boxShadow: `none`, fontSize: "1.2em" }}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/${social.instagram}`}
          >
            Insta!
          </a>
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
