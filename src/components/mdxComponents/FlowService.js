import React from 'react';
import {Clipboard} from 'react-feather';
import styled from '@emotion/styled';
import {IconButton, Tooltip} from '@material-ui/core';

function FlowService(props) {

  const ClipboardIcon = styled(Clipboard)`
    color: #3b454e;
    width: 24px;
    height: 24px;
    cursor: pointer;`;

  const ContainerDiv = styled('div')`
  padding: .5rem 1rem 1rem;
  width: 100%;
  border: 1px solid #ccc;
  `;

  const HeaderDiv = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  `;

  const ImageWrapperDiv = styled('div')`
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    overflow-x: auto;
  }
  `;

  const copyToClipboard = () => navigator.clipboard.writeText(JSON.stringify(props.textToCopy));

  return (
    <ContainerDiv>
      <HeaderDiv>
        <h3>{props.title}</h3>
        {props.textToCopy && <Tooltip title="Copy steps to clipboard" placement="top">
          <IconButton aria-label="delete" onClick={copyToClipboard}>
            <ClipboardIcon/>
          </IconButton>
        </Tooltip>}
      </HeaderDiv>
      <ImageWrapperDiv>
        {props.children}
      </ImageWrapperDiv>
      <p>{props.description}</p>
    </ContainerDiv>
  );
}

export default FlowService;
