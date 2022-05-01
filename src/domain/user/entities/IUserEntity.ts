export interface IUserProps {
  id?: string;
  name?: {
    firstName?: string;
    lastName?: string;
  };
  email?: string;
  password?: string;
  interest?: string;
  creditCard?: {
    numberCard?: string;
    dateCard?: string;
    codeCard?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserLogin {
  id?: string;
  firstName?: IUserProps;
  lastName?: IUserProps;
  email?: string;
  password?: string;
}

export interface IUserCard {
  creditCard?: IUserProps;
}

export interface IUser {
  user?: IUserProps;
}
