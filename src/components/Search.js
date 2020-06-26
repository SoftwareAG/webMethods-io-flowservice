import React, {useState} from 'react';
import {InputAdornment, ListSubheader, TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import styled from '@emotion/styled';
import {useFlexSearch} from "react-use-flexsearch";
import {navigate} from "gatsby-link";
import {Search as SearchIcon} from 'react-feather';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const ContainerDiv = styled('div')`
  width: 20rem;

  & .MuiAutocomplete-clearIndicator {
    color: #ffffff;
  }
  `;

const StyledTextField = styled(TextField)`
  & > label {
    color: #ffffff;

    &.Mui-focused {
      color: #ffffff;
    }
  }

  & > div {
    color: #ffffff;
  }

  & > div > fieldset {
    border-color: #ffffff !important;
    border-radius: 0;
  }

  & > div:hover {
    & > fieldset {
      border-color: #ffffff !important;
      border-radius: 0;
    }
  }`;

const StyledSearchIcon = styled(SearchIcon)`
  color: #ffffff;
  width: 1rem;
  height:1rem;`;

const StyledListSubHeader = styled(ListSubheader)`
  && {
    color: #000000;
    font-size: 1rem;
    padding-left: 8px;
    font-weight: 500;
  }
`;

const renderGroup = (params) => [
  <StyledListSubHeader disableSticky={true} key={params.key} component="li">
    {params.group}
  </StyledListSubHeader>,
  params.children,
];

const renderOption = (option, {inputValue}) => {
  const matches = match(option.title, inputValue);

  const parts = parse(option.title, matches);

  return (
    <div>
      {parts.map((part, index) => (
        <span key={index} style={{
          color: part.highlight ? '#1776BF' : 'initial',
          background: part.highlight ? 'rgba(143, 187, 237, .1)' : 'transparent',
          padding: part.highlight ? '.1em .05em' : 'initial',
          fontWeight: part.highlight ? 600 : 'initial',
        }}>
          {part.text}
        </span>
      ))}
    </div>
  );
};

const renderInput = (params) => <StyledTextField
  {...params} label="Search" margin="normal" variant="outlined"
  InputProps={{
    ...params.InputProps,
    startAdornment: (
      <>
        <InputAdornment position="start">
          <StyledSearchIcon/>
        </InputAdornment>
        {params.InputProps.startAdornment}
      </>
    ),
  }}
/>;

const Search = ({data, className}) => {

  const [query, setQuery] = useState("");

  const results = useFlexSearch(query, data.index, JSON.parse(data.store));

  const onQueryChange = event => event && setQuery(event.target.value);

  const onPageSelect = (event, option) => {
    if (option) {
      setQuery("");
      navigate(option.slug);
    }
  };

  return (
    <ContainerDiv className={className}>
      <Autocomplete
        inputValue={query}
        id="search-auto-complete"
        options={results.sort((a, b) => -b.parentName.localeCompare(a.parentName))}
        freeSolo
        getOptionLabel={option => option.title}
        onInputChange={onQueryChange}
        onChange={onPageSelect}
        groupBy={option => option.parentName}
        renderGroup={renderGroup}
        size="small"
        filterOptions={options => options}
        renderOption={renderOption}
        renderInput={renderInput}
      />
    </ContainerDiv>
  );
};

export default Search;
