import React from 'react';
import { Breadcrumb } from '@progress/kendo-react-layout';
import { drawerItems } from '../drawer/config/drawerItems';
import { useBreadcrumbs } from './hooks/useBreadcrumbs';

const Breadcrumbs: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { breadcrumbs } = useBreadcrumbs(drawerItems);

  return (
    <div {...props}>
      <Breadcrumb data={breadcrumbs} />
    </div>
  );
};

export default Breadcrumbs;
