import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
  Menu,
  MenuItem,
} from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';

import placeholder from '../../../assets/placeholder.jpg';

import style from './Header.module.scss';

const Header = () => {
  return (
    <div>
      <AppBar className={style.header}>
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
          <Menu>
            <MenuItem
              render={() => {
                return (
                  <Avatar type='image'>
                    <img src={placeholder} alt='Avatar' />
                  </Avatar>
                );
              }}
            >
              <MenuItem text='Account' />
              <MenuItem text='Settings' />
              <MenuItem text='Logout' />
            </MenuItem>
          </Menu>
        </AppBarSection>
      </AppBar>
    </div>
  );
};

export default Header;
