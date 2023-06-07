import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from './DrawerItem.module.css';
import clsx from 'clsx';
import DrawerItem from './DrawerItem';

interface DrawerItemHeaderProps {
  text: string;
  icon?: string;
  items?: any[];
  route?: string;
  depth?: number;
  isDrawerExpanded: boolean;
  isHoveringDrawer: boolean;
}

const resolveLinkPath = (parentTo: string, childTo: string): string =>
  `${parentTo}/${childTo}`;

const DrawerItemHeader: React.FC<DrawerItemHeaderProps> = (props) => {
  const {
    text,
    icon,
    items,
    route,
    depth,
    isDrawerExpanded,
    isHoveringDrawer,
  } = props;
  const location = useLocation();

  const [isNavItemExpanded, setIsNavItemExpanded] = useState(
    location.pathname.includes(route || '')
  );

  const onExpandChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsNavItemExpanded((isNavItemExpanded) => !isNavItemExpanded);
  };

  return (
    <>
      <button
        className={clsx(
          'k-drawer-item k-text-left k-d-flex k-border-0 k-pr-4 k-py-4 k-w-full',
          style.drawerItem
        )}
        style={{
          paddingLeft: `${
            1 + (depth && depth > 1 ? (depth + 5.5) * 0.25 : 0)
          }rem`,
        }}
        onClick={onExpandChange}
      >
        {icon ? <span className={clsx('k-icon k-mr-4', icon)} /> : null}
        <div className='k-display-flex k-flex-grow k-justify-content-between'>
          <span>{text}</span>
          <span
            className={clsx(
              'k-icon k-i-chevron-down',
              style.drawerItemArrow,
              isNavItemExpanded && 'k-rotate-180'
            )}
          />
        </div>
      </button>

      {isNavItemExpanded && (
        <div
          className={clsx(
            style.navChildrenBlock,
            !isDrawerExpanded && !isHoveringDrawer && 'k-display-none'
          )}
        >
          {items?.map((item, index) => {
            const key = `${item.text}-${index}`;
            return (
              <DrawerItem
                key={key}
                {...item}
                depth={depth ? depth + 1 : undefined}
                route={resolveLinkPath(route || '', item.route || '')}
                isDrawerExpanded={isDrawerExpanded}
                isHoveringDrawer={isHoveringDrawer}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default DrawerItemHeader;
