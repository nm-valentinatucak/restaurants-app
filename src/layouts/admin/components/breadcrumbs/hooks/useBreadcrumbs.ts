import { useLocation } from 'react-router';
import { useMemo } from 'react';
import { CustomRouteObject } from '../../../../../types/typeDefinitions';

type DrawerItem = CustomRouteObject & {
  items?: DrawerItem[];
};

type NavConfig = DrawerItem[];

type BreadcrumbItem = {
  id: string;
  text: string;
  iconClass?: string;
};

export const useBreadcrumbs = (navConfig: NavConfig) => {
  const { pathname } = useLocation();

  const breadcrumbs = useMemo<BreadcrumbItem[]>(() => {
    const pathParts = pathname.split('/').filter(Boolean);
    const breadcrumbsList: BreadcrumbItem[] = [];

    for (let i = 0; i < pathParts.length; i++) {
      const currentPathPart = pathParts[i];
      const currentDrawerItem = findDrawerItem(navConfig, currentPathPart);

      if (currentDrawerItem) {
        breadcrumbsList.push({
          id: currentDrawerItem.path as string,
          text: currentDrawerItem.name,
          ...(currentDrawerItem.icon && {
            iconClass: currentDrawerItem.icon,
          }),
        });

        if (!currentDrawerItem.children) {
          break;
        }

        navConfig = currentDrawerItem.children;
      }
    }

    return breadcrumbsList;
  }, [navConfig, pathname]);

  return {
    breadcrumbs,
  };
};

const findDrawerItem = (
  drawerItems: NavConfig,
  route: string
): DrawerItem | undefined => {
  for (let i = 0; i < drawerItems.length; i++) {
    const drawerItem = drawerItems[i];

    if (drawerItem.path === route) {
      return drawerItem;
    }

    if (drawerItem.children) {
      const childItem = findDrawerItem(drawerItem.children, route);
      if (childItem) {
        return childItem;
      }
    }
  }

  return undefined;
};
