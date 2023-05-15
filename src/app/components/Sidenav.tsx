import React, { Fragment, useEffect, useState } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { styled } from '@mui/material';
import MatxVerticalNav from './MatxVerticalNav/MatxVerticalNav';
//import { MatxVerticalNav } from 'app/components';
import useSettings from '../hooks/useSettings';
//import useSettings from 'app/hooks/useSettings';

import { navigations } from '../navigations';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import { navigations } from 'app/navigations';
import dataJson from '../../data/example.json'

const StyledScrollBar = styled(Scrollbar)(() => ({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  position: 'relative',



}));

const SideNavMobile = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100vw',
  background: 'rgba(0, 0, 0, 0.54)',
  zIndex: -1,
  [theme.breakpoints.up('lg')]: { display: 'none' }
}));

const Sidenav = ({ children }: any) => {
  const { settings, updateSettings } = useSettings();
  const [dataNavigations, setDataNavigations] = useState<any>([])
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    console.log("import data json ",convertToNestedMenu(dataJson, 0)  )

    setDataNavigations(convertToNestedMenu(dataJson, 0))
  }, []);

  function convertToNestedMenu(arr:any, parentId:any) {
    return arr
      .filter((item) => item.NIVEL_SUPERIOR === parentId)
      .map((item) => {
        if(item.TIPO==='acceso')return item;
        return {
            ...item,
                children:[... convertToNestedMenu(arr, item.ITEM)],
          }
      });
  }

  const updateSidebarMode = (sidebarSettings: any) => {
    let activeLayoutSettingsName = settings.activeLayout + 'Settings';
    let activeLayoutSettings = settings[activeLayoutSettingsName];

    updateSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings
        }
      }
    });
  };

  return (
    <Fragment>
      <StyledScrollBar options={{ suppressScrollX: true }}>
        {children}


        {/*<MatxVerticalNav items={dataNavigations} />*/}
          <MatxVerticalNav items={navigations} /> 

      </StyledScrollBar>

      <SideNavMobile onClick={() => updateSidebarMode({ mode: 'close' })} />
    </Fragment>
  );
};

export default Sidenav;
