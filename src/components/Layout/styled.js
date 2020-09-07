import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  transition: background, color 0.5s;
  width: 100%;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }

  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}

  table:not(.highlight) {
    color: var(--postColor);
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;

    thead th {
      vertical-align: bottom;
      border-bottom: 2px solid var(--borders);
    }

    td,
    th {
      text-align: left;
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid var(--borders);
    }
  }
`
