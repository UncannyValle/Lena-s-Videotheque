import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            position: "fixed",
            width: "100vw",
            height: "15vh",
            top: 0,
            left: 0,
            backgroundColor: "orange",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              color: "white",
              margin: 0,
            }}
          >
            About
          </h3>
          <h1
            style={{
              fontSize: "4em",
              color: "purple",
              margin: 0,
            }}
          >
            {title}
          </h1>
          <h3
            style={{
              color: "white",
              margin: 0,
            }}
          >
            Blog
          </h3>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: "60vw",
            marginTop: "15vh",
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
