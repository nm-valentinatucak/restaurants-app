import {
  Drawer,
  DrawerContent,
  DrawerNavigation,
} from '@progress/kendo-react-layout';
import clsx from 'clsx';
import DrawerItem from './components/DrawerItem';
import styles from './Drawer.module.scss';
import { ReactNode } from 'react';
import { useDrawerState } from './hooks/useDrawerState';
import { Routes } from '../../../../routes/Routes';

interface AppDrawerProps {
  children: ReactNode;
}

const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  const { isDrawerExpanded, toggleDrawer, isHoveringDrawer, drawerRef } =
    useDrawerState();

  return (
    <Drawer
      className={styles.drawer}
      expanded={isDrawerExpanded || isHoveringDrawer}
      position={'start'}
      mode={'push'}
      mini={true}
    >
      <DrawerNavigation ref={drawerRef} className={styles.drawerNavigation}>
        <div className={styles.titleContainer}>
          {isDrawerExpanded || isHoveringDrawer ? (
            <h1 className={styles.title}>RestaurantsApp</h1>
          ) : null}
          <button
            className={clsx(
              'k-button k-button-md k-rounded-md k-button-flat k-button-flat-base',
              styles.drawerTogglerBtn
            )}
            onClick={toggleDrawer}
          >
            <span
              className={clsx(
                `k-icon k-i-arrow-chevron-right`,
                styles.drawerTogglerIcon,
                isDrawerExpanded && styles.drawerTogglerIconOpen
              )}
            />
          </button>
        </div>
        <ul className='k-drawer-items'>
          {Routes.find((item) => item.name === 'Home')
            ?.children?.filter((item) => item.name !== 'Profile')
            ?.map((route, index) => {
              return (
                <DrawerItem
                  key={`${route.name}-${index}`}
                  {...route}
                  isDrawerExpanded={isDrawerExpanded}
                  isHoveringDrawer={isHoveringDrawer}
                />
              );
            })}
        </ul>
      </DrawerNavigation>
      <DrawerContent>{props.children}</DrawerContent>
    </Drawer>
  );
};

export default AppDrawer;
