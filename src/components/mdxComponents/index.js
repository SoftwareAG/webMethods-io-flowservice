import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';
import FeaturesContainer from "./FeaturesContainer";
import Feature from './Feature';
import FlowStep from "./FlowStep";
import FlowService from './FlowService';
import YoutubeEmbed from './YoutubeEmbed';
import {css} from "@emotion/core";

const StyledPre = styled('pre')`
  padding: 16px;
  background: ${props => props.theme.colors.preFormattedText};
`;

export default {
  h1: props => (<h1 className="heading1" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />),
  h2: props => (<h2 className="heading2" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />),
  h3: props => (<h3 className="heading3" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />),
  h4: props => (<h4 className="heading4" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />),
  h5: props => (<h5 className="heading5" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />),
  h6: props => (<h6 className="heading6" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />),
  p: props => <p className="paragraph" {...props} />,
  pre: props => (<StyledPre>
    <pre {...props} />
  </StyledPre>),
  code: CodeBlock,
  a: AnchorTag,
  img: props => <img {...props} css={css`border: 1px solid #cccccc;`}/>,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`,
  FeaturesContainer,
  Feature,
  FlowService,
  FlowStep,
  YoutubeEmbed
};
