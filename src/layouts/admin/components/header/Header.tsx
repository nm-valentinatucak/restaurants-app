import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
  Menu,
  MenuItem,
} from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { NavLink } from 'react-router-dom';

import placeholder from '../../../../assets/placeholder.jpg';

import styles from './Header.module.scss';
import { removeUserFromStorage } from '../../../../app/services';

const Header = () => {
  const handleLogout = () => {
    removeUserFromStorage();
  };

  return (
    <div>
      <AppBar className={styles.header}>
        <AppBarSpacer
          style={{
            width: 32,
          }}
        />

        <AppBarSpacer />

        <AppBarSection className='actions'>
          <button className='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base'>
            <BadgeContainer>
              <span className='k-icon k-i-bell' />
              <Badge themeColor='info' size='small' position='inside' />
            </BadgeContainer>
          </button>
        </AppBarSection>

        <AppBarSection>
          <span className='k-appbar-separator' />
        </AppBarSection>

        <AppBarSection>
          <Menu className={styles.menu}>
            <MenuItem
              render={() => {
                return (
                  <Avatar type='image'>
                    <img src={placeholder} alt='Avatar' />
                  </Avatar>
                );
              }}
            >
              <MenuItem
                render={() => {
                  return (
                    <NavLink to={'/profile'} className={styles.navLink}>
                      Profile
                    </NavLink>
                  );
                }}
              />
              <MenuItem
                render={() => {
                  return (
                    <NavLink
                      to={'/login'}
                      className={styles.navLink}
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </NavLink>
                  );
                }}
              />
            </MenuItem>
          </Menu>
        </AppBarSection>
      </AppBar>
    </div>
  );
};

export default Header;
