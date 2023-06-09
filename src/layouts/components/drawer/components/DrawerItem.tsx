import DrawerItemHeader from './DrawerItemHeader';
import { NavLink } from 'react-router-dom';
import style from './DrawerItem.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface DrawerItemProps {
  name: string;
  icon?: string;
  path?: string;
  children?: any;
  depth?: number;
  isDrawerExpanded: boolean;
  isHoveringDrawer: boolean;
}

const DrawerItem: React.FC<DrawerItemProps> = (props) => {
  const {
    name,
    icon,
    path,
    children,
    depth = 0,
    isDrawerExpanded,
    isHoveringDrawer,
  } = props;

  if (children) {
    return (
      <DrawerItemHeader
        {...props}
        depth={depth + 1}
        isDrawerExpanded={isDrawerExpanded}
        isHoveringDrawer={isHoveringDrawer}
      />
    );
  }

  return (
    <NavLink
      className={({ isActive }) => {
        return clsx(
          'k-drawer-item k-text-left k-d-flex k-border-0 k-pr-4 k-py-4 k-w-full',
          style.drawerItem,
          isActive && style.drawerItemActive
        );
      }}
      to={path || ''}
      style={{
        paddingLeft: `${1 + (depth > 1 ? (depth + 5.5) * 0.25 : 0)}rem`,
      }}
    >
      {icon ? (
        <span className={clsx('k-icon k-mr-4 k-display-inline-flex', icon)} />
      ) : null}
      <span>{name}</span>
    </NavLink>
  );
};

export default DrawerItem;
