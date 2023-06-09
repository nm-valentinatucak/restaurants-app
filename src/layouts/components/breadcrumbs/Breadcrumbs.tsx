import React from 'react';
import { Breadcrumb } from '@progress/kendo-react-layout';
import { useBreadcrumbs } from './hooks/useBreadcrumbs';
import { Routes } from '../../../routes/Routes';

const Breadcrumbs: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { breadcrumbs } = useBreadcrumbs(Routes);

  return (
    <div {...props}>
      <Breadcrumb data={breadcrumbs} />
    </div>
  );
};

export default Breadcrumbs;
