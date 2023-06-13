import { NonIndexRouteObject } from 'react-router-dom';

export interface CustomRouteObject extends NonIndexRouteObject {
  name: string;
  children?: CustomRouteObject[];
  icon?: string;
  invisible?: boolean;
}

export interface User {
  userName: string;
  fullName: string;
  password?: string;
  email: string;
  id?: number;
  role?: {
    id: number;
    name: string;
  };
  repeatPassword?: string;
}

export interface LoginProps {
  loginCredential: string;
  password: string;
}

export interface ChangePasswordProps {
  id: number;
  oldPassword: string;
  newPassword: string;
  repeatPassword?: string;
}

export interface AddEditUserModalProps {
  isOpen: boolean;
  closeModal: () => void;
  modalType?: number;
  user?: User;
  setUser?: (user?: User) => void;
}
