import PropTypes from 'prop-types'
import React from 'react'

import Card2 from './Card/card2'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    {/*<div className="logo">
      <span className="icon fa-diamond"></span>
</div>*/}
    <div className="content">
      <div className="inner">
        {/*<h1>Dimension</h1>
        <p>
          A fully responsive site template designed by{' '}
          <a href="https://html5up.net">HTML5 UP</a> and released
          <br />
          for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons</a> license.
        </p>*/}
      <Card2
      name="Eli Rodriguez"
      subTitle="Marketing Strategy Consultant"
      location="San Pedro, CA"
      fbLink="https://www.facebook.com/eli.rodriguez.334"
      igLink="https://instagram.com/elirodriguezii"
      twitterLink="https://twitter.com"
      behanceLink="https://www.linkedin.com/in/eli-rodriguez-b4ba1570/"

      />

      </div>
    </div>
    {/*<nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
          </nav>*/}
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
