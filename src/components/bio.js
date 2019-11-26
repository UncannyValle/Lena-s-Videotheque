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
        const { author, social, artist } = data.site.siteMetadata
        return (
          <Container textDecoration="none">
            <p>
              Written by <strong>{author}</strong>
              with art made by the talented <strong>{artist}</strong> <br />
              <a
                style={{ boxShadow: `none` }}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${social.twitter}`}
              >
                Hit us up on Twitter,
              </a>
              <br />
              <a
                style={{ boxShadow: `none` }}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${social.instagram}`}
              >
                or Instagram
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
        artist
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
