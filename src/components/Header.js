import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Link from './link';
import config from '../../config.js';
import DefaultImages from '../defaultDataUri.json'
import Search from "./Search";
import Sidebar from "./sidebar";
import styled from "@emotion/styled";

const isSearchEnabled = config.header.search && config.header.search.enabled;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${props => (props.isDarkThemeActive ? '#001932' : undefined)};
  @media (max-width: 767px) {
    display: block;
  }
`;

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.classList.contains('responsive')) {
    x.classList.remove('responsive');
  } else {
    x.classList.add('responsive');
  }
}

const Header = ({location}) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
        localSearchPages {
          index
          store
        }
      }
    `}
    render={data => {
      const {
        site: {
          siteMetadata: {headerTitle, logo},
        },
      } = data;

      const finalLogoLink = logo.link !== '' ? logo.link : 'https://hasura.io/';

      return (
        <div className={'navBarWrapper'}>
          <nav className={'navBarDefault'}>
            <div className={'navBarHeader'}>
              <Link to={finalLogoLink} className={'navBarBrand'}>
                <img
                  className={'img-responsive displayInline'}
                  src={DefaultImages.logo}
                  alt={'logo'}
                />
              </Link>
              <div
                className={'headerTitle displayInline'}
                dangerouslySetInnerHTML={{__html: headerTitle}}
              />
              <span
                onClick={myFunction}
                className={'navBarToggle'}
                onKeyDown={myFunction}
                role="button"
                tabIndex={0}
              >
                <span className={'iconBar'}/>
                <span className={'iconBar'}/>
                <span className={'iconBar'}/>
              </span>
            </div>
            <Search data={data.localSearchPages} className="visibleDesktopView"/>
            <div id="navbar" className={'topnav visibleMobile'}>
              <div style={{marginTop: '1rem'}}>
                <Sidebar location={location}/>
                <hr style={{marginTop: '1rem'}}/>
                <Search data={data.localSearchPages} className="visibleMobileView width100"/>
              </div>
            </div>
          </nav>
        </div>
      );
    }}/>
);

export default Header;
