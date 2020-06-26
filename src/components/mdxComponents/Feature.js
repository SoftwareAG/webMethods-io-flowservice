import {Divider, Grid, List, ListItem, ListItemText} from "@material-ui/core";
import React, {forwardRef} from "react";
import features from './data.json';
import Link from "../link";
import styled from "@emotion/styled";

const StyledGrid = styled(Grid)`
&& {
  flex-basis: 15%;
}
`;

// eslint-disable-next-line react/display-name
const ListLink = forwardRef((linkProps, ref) => <Link {...linkProps}/>);

function Feature(props) {
  const feature = features.find(feature => feature.title === props.name);

  const FeatureList = <List component="nav" aria-label="secondary mailbox folders">
    <ListItem>
      <h3>{props.name}</h3>
    </ListItem>
    <Divider/>
    {feature.content.map((content, index) =>
      <React.Fragment key={index}>
        <ListItem button component={ListLink} to={content.link} style={{color: '#3b454e'}}>
          <ListItemText primary={content.title}/>
        </ListItem>
        <Divider/>
      </React.Fragment>)}
  </List>;

  if (props.inContainer) {
    return FeatureList;
  } else {
    return (
      <StyledGrid item xs={12} md={6} lg={3}>
        {FeatureList}
      </StyledGrid>
    );
  }

}

export default Feature;
