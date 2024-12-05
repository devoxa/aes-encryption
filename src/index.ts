import * as crypto from 'crypto'

export function encrypt(key: string, input: string): string {
  const keyBuffer = Buffer.from(key)
  const iv = crypto.randomBytes(16)

  const cipher = crypto.createCipheriv('aes-256-gcm', keyBuffer, iv)

  const encrypted = Buffer.concat([cipher.update(input, 'utf8'), cipher.final()])
  const tag = cipher.getAuthTag()

  return Buffer.concat([iv, tag, encrypted]).toString('base64')
}

export function decrypt(key: string, input: string): string {
  const keyBuffer = Buffer.from(key)
  const inputBuffer = Buffer.from(input, 'base64')

  const iv = inputBuffer.subarray(0, 16)
  const tag = inputBuffer.subarray(16, 32)
  const text = inputBuffer.subarray(32)

  const decipher = crypto.createDecipheriv('aes-256-gcm', keyBuffer, iv)
  decipher.setAuthTag(tag)

  const decrypted = decipher.update(text).toString() + decipher.final('utf8')

  return decrypted
}
