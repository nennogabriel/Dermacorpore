import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../../src/app';
import truncate from '../../util/truncate';
import factory from '../../factories';

describe('User controller', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password when new user are created', async () => {
    const user = await factory.create('User', {
      password: 'áLit3b1tComplex',
    });

    const compareHash = await bcrypt.compare(
      'áLit3b1tComplex',
      user.password_hash
    );
    expect(compareHash).toBe(true);
  });

  it('email should be unique', async () => {
    const body = await factory.attrs('User');
    await request(app)
      .post('/users')
      .send(body);

    const response = await request(app)
      .post('/users')
      .send(body);
    expect(response.status).toBe(400);
  });

  it('should be able to register', async () => {
    const body = await factory.attrs('User');
    const response = await request(app)
      .post('/users')
      .send(body);

    expect(response.body).toHaveProperty('id');
  });
});
