import React from "react"

import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hit"
import * as S from "./styled"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch
      appId={algolia.appId}
      apiKey={algolia.searchOnlyApiKey}
      indexName={algolia.indexName}
    >
      <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
      <S.AlgoliaSearchLogoLinkWrapper>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.algolia.com/docsearch"
        >
          Algolia
        </a>
      </S.AlgoliaSearchLogoLinkWrapper>
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
          },
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search
