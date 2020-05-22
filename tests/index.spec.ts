/* eslint-disable @typescript-eslint/camelcase */
import { encrypt, decrypt } from '../src/index'

describe('aes-encryption', () => {
  it('can encrypt and decrypt a string', () => {
    const KEY = 'gdPfTP7h1hcs1ySGp0vcFwIZVpWfUSqJ'
    expect(decrypt(KEY, encrypt(KEY, 'FooBar'))).toEqual('FooBar')
  })
})
