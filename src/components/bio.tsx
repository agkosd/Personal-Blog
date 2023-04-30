import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social


  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Personal blog by <strong>{author.name} </strong>
          {author?.summary || null}
          <span className="link-list">
            <a href={`${social?.linkedin || ``}`}>
              Linkedin
            </a>
            <a href={`${social?.github || ``}`}>
              Github
            </a>
          </span>
        </p>
      )}
    </div>
  )
}

export default Bio
