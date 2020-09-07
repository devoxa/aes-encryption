import { encrypt, decrypt } from '../src/index'

const KEY = 'gdPfTP7h1hcs1ySGp0vcFwIZVpWfUSqJ'

describe('aes-encryption', () => {
  it('can encrypt and decrypt a string', () => {
    expect(decrypt(KEY, encrypt(KEY, 'FooBar'))).toEqual('FooBar')
  })

  it('does not produce the same output twice', () => {
    const first = encrypt(KEY, 'FooBar')
    const second = encrypt(KEY, 'FooBar')

    expect(first === second).toEqual(false)
    expect(decrypt(KEY, first)).toEqual('FooBar')
    expect(decrypt(KEY, second)).toEqual('FooBar')
  })

  it('errors for the wrong encryption key when decrypting', () => {
    const encrypted = encrypt(KEY, 'FooBar')

    expect(() =>
      decrypt('AAPfTP7h1hcs1ySGp0vcFwIZVpWfUSAA', encrypted)
    ).toThrowErrorMatchingSnapshot()
  })

  it('errors when a wrong key format is provided', () => {
    const encrypted = encrypt(KEY, 'FooBar')

    expect(() =>
      encrypt('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'FooBar')
    ).toThrowErrorMatchingSnapshot()
    expect(() => encrypt('AAAAAAAAAAAAAAAAAA', 'FooBar')).toThrowErrorMatchingSnapshot()
    // @ts-expect-error key has to be a string
    expect(() => encrypt([1, 2, 3], 'FooBar')).toThrowErrorMatchingSnapshot()
    expect(() =>
      decrypt('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', encrypted)
    ).toThrowErrorMatchingSnapshot()
    expect(() => decrypt('AAAAAAAAAAAAAAAAAA', encrypted)).toThrowErrorMatchingSnapshot()
    // @ts-expect-error key has to be a string
    expect(() => encrypt([1, 2, 3], 'FooBar')).toThrowErrorMatchingSnapshot()
  })

  it('errors when a wrong input format is provided', () => {
    const encrypted = encrypt(KEY, 'FooBar')

    // @ts-expect-error input has to be a string
    expect(() => encrypt(KEY, null)).toThrowErrorMatchingSnapshot()
    // @ts-expect-error input has to be a string
    expect(() => encrypt(KEY, [1, 2, 3])).toThrowErrorMatchingSnapshot()
    expect(() => decrypt(KEY, 'foo' + encrypted)).toThrowErrorMatchingSnapshot()
    // @ts-expect-error input has to be a string
    expect(() => decrypt(KEY, [encrypted])).toThrowErrorMatchingSnapshot()
  })
})
