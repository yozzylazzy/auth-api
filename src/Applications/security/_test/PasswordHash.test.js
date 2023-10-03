const PasswordHash = require('../PasswordHash');

describe('PasswordHash interface', () => {
  it('should throw erro when invoke abstract behaviour', async () => {
    // ARrange
    const passwordHash = new PasswordHash();

    // Action & Assert
    await expect(passwordHash.hash('dummy_password')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  });
});
