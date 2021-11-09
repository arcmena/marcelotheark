import styled, { css } from 'styled-components'

export const BlogPostsContainer = styled.section(() => css``)

export const PostsWrapper = styled.div(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[8]};

    > a:not(:first-child) {
      margin-top: ${spacing[8]};
    }
  `
)
