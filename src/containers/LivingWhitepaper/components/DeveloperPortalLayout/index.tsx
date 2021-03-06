import React, {FC, ReactNode, useEffect, useState} from 'react';

import {Container, Divider, PageTitle} from 'components';
import {NAVBAR_HEIGHT} from 'constants/offsets';
import Measure from 'react-measure';
import {scroller} from 'react-scroll';
import {useLocation} from 'react-router';
import Breadcrumb from '../Breadcrumb';
import SideMenu from '../SideMenu';

import './DeveloperPortalLayout.scss';

type Props = {
  children?: ReactNode;
  pageName: string;
};

const TIMEOUT_DELAY = 200;

const DeveloperPortalLayout: FC<Props> = ({children, pageName}) => {
  const [breadcrumbHeight, setBreadcrumbHeight] = useState(56);
  const {hash} = useLocation();
  const TOTAL_OFFSET = NAVBAR_HEIGHT + breadcrumbHeight;

  useEffect(() => {
    // hack: scroll to the correct position based on hash when page reloads
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash.slice(1), {
          ignoreCancelEvents: true,
          offset: -TOTAL_OFFSET,
        });
      }, TIMEOUT_DELAY);
    }
    // eslint-disable-next-line
  }, [TOTAL_OFFSET]);
  return (
    <>
      <PageTitle title={pageName} />
      <Measure bounds onResize={(contentRect) => setBreadcrumbHeight(contentRect?.bounds?.height || 0)}>
        {({measureRef}) => (
          <div className="LivingWhitepaperDeveloperPortalLayout__breadcrumb" ref={measureRef}>
            <Container>
              <Breadcrumb breadcrumbHeight={breadcrumbHeight} />
            </Container>
            <Divider />
          </div>
        )}
      </Measure>
      <Container>
        <div className="LivingWhitepaperDeveloperPortalLayout__main-content">
          <div className="LivingWhitepaperDeveloperPortalLayout__left-content">
            <SideMenu breadcrumbHeight={breadcrumbHeight} />
          </div>
          <div className="LivingWhitepaperDeveloperPortalLayout__right-content">{children}</div>
        </div>
      </Container>
    </>
  );
};

export default DeveloperPortalLayout;
