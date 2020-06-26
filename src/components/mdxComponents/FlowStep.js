import React from 'react';
import styled from '@emotion/styled';
import {Grid} from '@material-ui/core';

const ImageGrid = styled(Grid)`
  padding-top: 0 !important;
  padding-bottom: 0 !important;`;

const CommentGrid = styled(Grid)`
  padding-top: 0 !important;
  padding-bottom: 0 !important;`;

const CommentDiv = styled('div')`
  background: #eeeeee;
  padding: 7px 20px;
  position: relative;
  margin-left: 1rem;
  margin-top: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -15px;
    width: 0px;
    height: 0px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #eeeeee;
  }`;

const CommentP = styled('p')`
  color: #57595d;
  line-height: 27px;
  letter-spacing: 0.4px;
  font-weight: 300;
  margin-bottom: 0;
  font-size: 15px;`;

const ContainerDiv = styled('div')`
  margin-bottom: .5rem;

  &:hover ${ImageGrid} {
    border-left: 5px solid #1776BF;
    padding-left: 7px;
  }

  &:hover ${CommentDiv} {
    background: #1776BF;

    & ${CommentP} {
      color: #ffffff;
    }

    &::before {
      border-top-color: #1776BF;
    }
  }

  @media (max-width: 767px) {
    width: 70rem;
  }
`;

function FlowStep(props) {

  const img = require(`../../../content/assets/${props.img}`);

  return (
    <ContainerDiv>
      <Grid container spacing={3}>
        <ImageGrid item xs={8}>
          <img src={img} alt={props.comment}/>
        </ImageGrid>
        <CommentGrid item xs={4}>
          {props.comment &&
          <CommentDiv>
            <CommentP>
              {props.comment}
            </CommentP>
          </CommentDiv>}
        </CommentGrid>
      </Grid>
    </ContainerDiv>
  );
}

export default FlowStep;
