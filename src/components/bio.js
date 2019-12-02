/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container textDecoration="none">
            <p>
              This review and all of its art was created by
              <strong> {author}</strong>,
              an Aries who loves movies, drawing, and adelie penguins! <br />
              <a
                style={{ boxShadow: `none` }}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${social.twitter}`}
              >
                <br />
                Give me a shout in my twitter,
              </a>
              <br />
              <a
                style={{ boxShadow: `none` }}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${social.instagram}`}
              >
                <br />
                or send me pictures of Penguins and Goats to my Instagram
              </a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          instagram
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  font-size:1.5em;
`

export default Bio
