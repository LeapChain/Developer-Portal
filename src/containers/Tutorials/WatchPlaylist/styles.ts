import styled, {css} from 'styled-components';
import {Icon} from '@thenewboston/ui';

import {Container as BaseContainer} from 'components';
import colors from 'styles/colors';
import {b1, b3, h2, h3, d3, h1} from 'styles/fonts';

export const Container = styled(BaseContainer)`
  color: ${colors.palette.gray['900']};
  margin-top: 20px;

  @media (max-width: 1366px) {
    padding: 0px 48px;
  }

  @media (max-width: 786px) {
    padding: 0px 24px;
  }
`;

export const Grid = styled.div`
  column-gap: 24px;
  display: grid;
  grid-template-columns: auto 360px;
  grid-template-area: 'video list' 'desc banner';
  row-gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: auto;
    grid-template-area: 'video' 'list' 'desc';
  }
`;

export const BackLink = styled.span`
  ${h3.medium}
  color: ${colors.palette.blue['500']};
  cursor: pointer;
  display: block;
  margin-bottom: 32px;
`;

export const Playlist = styled.div``;

export const PlaylistHeader = styled.div`
  @media (max-width: 992px) {
    cursor: pointer;
  }
`;

export const PlaylistHeading = styled.h4`
  ${h2.semiBold};
  color: ${colors.palette.neutral['900']};
  line-height: 130%;
  margin-bottom: 16px;

  @media (max-width: 1366px) {
    font-size: 18px;
  }
`;

export const PlaylistCount = styled.div`
  ${h3.regular}
  color: ${colors.palette.neutral['600']};
  line-height: 130%;
  margin-bottom: 12px;
`;

export const VideoList = styled.div`
  max-height: calc(100vh - 240px);
  overflow-y: scroll;
  padding: 8px 0;
  /* for firefox */
  scrollbar-width: thin;

  @media (max-width: 992px) {
    max-height: none;
  }
`;

export const VideoListItem = styled.div`
  cursor: pointer;
  display: grid;
  gap: 8px;
  grid-template-columns: 18px auto 60px;
  padding: 10px 0px;
`;

export const VideoListItemIconContainer = styled.div<{isActive: boolean}>`
  ${b3.semiBold};
  align-content: center;
  background: ${({isActive}) => (isActive ? '#0085ff' : '#DEE5EB')};
  border-radius: 50%;
  color: ${colors.palette.neutral['600']};
  display: grid;
  height: 18px;
  place-items: center;
  position: relative;
  width: 18px;
`;

export const VideoListItemIcon = styled(Icon)`
  position: absolute;

  svg {
    fill: #fff;
  }
`;

export const VideoListItemTitle = styled.h3<{isActive: boolean}>`
  line-height: 120%;
  ${({isActive}) =>
    isActive
      ? css`
          ${h3.bold}
          color: ${colors.palette.neutral['800']}
        `
      : css`
          ${h3.medium}
          color: ${colors.palette.neutral['900']}
        `}

  @media (max-width: 1366px) {
    ${({isActive}) =>
      isActive
        ? css`
            ${b1.bold}
          `
        : css`
            ${b1.medium}
          `}
  }
`;

export const VideoListItemDuration = styled.span`
  ${b1.semiBold}
  color: #0085FF;
  text-align: right;
  padding-right: 8px;
`;

export const Details = styled.div``;

export const Pill = styled.span`
  ${b3.regular}
  background: ${colors.palette.neutral['075']};
  border-radius: 100px;
  color: ${colors.palette.neutral['600']};
  padding: 8px 12px;
`;

export const VideoHeading = styled.h1`
  ${d3.bold}
  color: ${colors.palette.neutral['800']};
  line-height: 130%;
  margin: 16px 0px;

  @media (max-width: 1366px) {
    ${h1.bold}
  }
`;

export const VideoDescription = styled.p`
  ${h3.regular};
  color: ${colors.palette.neutral['500']};
  line-height: 150%;
  margin-top: 0px;

  @media (max-width: 1366px) {
    ${b1.regular}
  }
`;

export const Banner = styled.div`
  align-items: center;
  background: ${colors.palette.neutral['050']};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 0px;
`;

export const BannerHeading = styled.h2`
  ${d3.bold}
  color: ${colors.palette.neutral['800']};
  margin-bottom: 40px;

  @media (max-width: 786px) {
    ${h1.semiBold}
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
