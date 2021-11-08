const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const data = 'Hello BVB Fans 🤗 !!!';

/// SIGN

const signer = createSign('rsa-sha256');

signer.update(data);

const siguature = signer.sign(privateKey, 'hex');

console.log(siguature);

/// VERIFY

const verifier = createVerify('rsa-sha256');

verifier.update(data);

const isVerified = verifier.verify(publicKey, siguature, 'hex');

console.log(isVerified);
