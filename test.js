const sm2 = require('./src/sm2/index')

let publicKey = "0417C6193A31FA3772E7F83D7B1BEE40208BEBF0727ECB955F1D08C6BF29A798991DFA61CD82DFBDB966D64E2B00C4395C75A64011DDDD42FA25AFFD20F8FB7F11"
let privateKey = "771AF63AF98B79DA3F27AF8B65F69B84D6C3D8C713977A87E022B06B256667BF"

/**
 * ASN1序列格式的加密解密
 */
let encryptData = sm2.encrypt("Hello World! Welcome to the SM2 encryption for security system.", publicKey)
console.log(encryptData)
let text = sm2.decrypt(encryptData, privateKey)
console.log(text)

/**
 * 直接C1C3C2拼接密文的加密解密
 */
encryptData = sm2.doEncrypt("Hello", publicKey)
console.log(encryptData)
text = sm2.doDecrypt(encryptData, privateKey)
console.log(text)