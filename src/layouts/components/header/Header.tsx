import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
  Menu,
  MenuItem,
} from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import style from './Header.module.scss';
import clsx from 'clsx';

const kendokaAvatar =
  'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg';

interface FormInputProps {
  [key: string]: any;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <div className='k-relative'>
      <span
        className={clsx(
          'k-absolute k-icon k-i-search k-ml-2 k-pl-4',
          style.searchIcon
        )}
      />
      <Input className={style.searchInput} {...props} />
    </div>
  );
};

const Header = () => {
  const onSearch = (q: string) => {
    console.log('on search', q);
  };

  return (
    <div>
      <AppBar className={style.header}>
        <AppBarSpacer
          style={{
            width: 32,
          }}
        />

        <AppBarSection>
          <Form
            initialValues={{
              search: '',
            }}
            onSubmit={onSearch}
            render={(formRenderProps) => {
              return (
                <FormElement>
                  <fieldset className='k-form-fieldset'>
                    <Field
                      id='search'
                      name='search'
                      placeholder='Search'
                      value={formRenderProps.valueGetter('search')}
                      component={FormInput}
                    />
                  </fieldset>
                </FormElement>
              );
            }}
          />
        </AppBarSection>

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
                    <img src={kendokaAvatar} alt='Avatar' />
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
