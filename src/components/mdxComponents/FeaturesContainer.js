import React from 'react';
import styled from '@emotion/styled';
import {Divider} from "@material-ui/core";
import features from './data.json';
import Feature from "./Feature";
import Masonry from "react-masonry-css";

const RootDiv = styled('div')`
      flex-grow: 1;
      background-color: #f5f6f6;
      margin-top: 5rem;
      padding: 1rem;
      box-shadow: -13px 19px 20px -2px rgba(204,204,204,1);
      width: 100%;

      .my-masonry-grid {
        display: flex;
        margin-left: -30px; /* gutter size offset */
        width: auto;
      }
      .my-masonry-grid_column {
        padding-left: 30px; /* gutter size */
        background-clip: padding-box;
      }

      .my-masonry-grid_column > nav {
        margin-bottom: 30px;
      }
  `;

const Header = styled('h2')`
  margin-bottom: 1rem;`;

const HeaderDivider = styled(Divider)`&& {
  margin-bottom: 1rem;
  }`;

function FeaturesContainer() {

  const breakpoints = {
    default: 4,
    1400: 3,
    1050: 2,
    750: 1
  };

  return (
    <RootDiv>
      <Header>Concepts</Header>
      <HeaderDivider/>
      <Masonry
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        breakpointCols={breakpoints}
      >
        {features.map((feature, index) => <Feature inContainer={true} key={index} name={feature.title}/>)}
      </Masonry>
    </RootDiv>
  );
}

export default FeaturesContainer;

