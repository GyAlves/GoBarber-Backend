import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';
import AuthtenticateUserService from './AuthenticateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authtenticateUser: AuthtenticateUserService;

describe('Authtenticate User', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    authtenticateUser = new AuthtenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });
  it('should be able to authtenticate an user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johnDoe@gmail.com',
      password: '123456',
    });

    const response = await authtenticateUser.execute({
      email: 'johnDoe@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authtenticate with non existing user', async () => {
    expect(
      authtenticateUser.execute({
        email: 'johnDoe@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to authtenticate user with wrong password', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johnDoe@gmail.com',
      password: '123456',
    });

    expect(
      authtenticateUser.execute({
        email: 'johnDoe@gmail.com',
        password: 'wrong password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
