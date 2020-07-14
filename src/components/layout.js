import React from 'react';
import styled from '@emotion/styled';
import {MDXProvider} from '@mdx-js/react';
import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import config from '../../config.js';
import CookieConsent from 'react-cookie-consent';

const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: ${({theme}) => theme.colors.background};

  .sideBarUL li a {
    color: ${({theme}) => theme.colors.text};
  }

  .sideBarUL .item > a:hover {
    color: #1776bf;
    background: #fff !important;

    /* background: #F8F8F8 */
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  margin: 0px 88px;
  margin-right: 0px;
  padding-top: 2rem;
  // width: 860px;
  background: ${({theme}) => theme.colors.background};

  table tr {
    background: ${({theme}) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
`;

const MaxWidth = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const LeftSideBarWidth = styled('div')`
  width: 298px;
  flex-shrink: 0;
`;

const RightSideBarWidth = styled('div')`
  width: 250px;
  flex-shrink: 0;
`;

const Layout = ({children, location}) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <LeftSideBarWidth className={'hiddenMobile'}>
          <Sidebar location={location}/>
        </LeftSideBarWidth>
        {config.sidebar.title ? (
          <div
            className={'sidebarTitle sideBarShow'}
            dangerouslySetInnerHTML={{__html: config.sidebar.title}}
          />
        ) : null}
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className={'hiddenMobile'}>
          <RightSidebar location={location}/>
        </RightSideBarWidth>
        <CookieConsent
          enableDeclineButton
          location="bottom"
          buttonText="I understand and accept the use of cookies"
          declineButtonText="I do not accept the use of cookies"
          cookieName="gatsby-gdpr-facebook-pixel">
          We are always working to improve this website for our users. To do this, we use the anonymous data provided by Cookies.
        </CookieConsent>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
