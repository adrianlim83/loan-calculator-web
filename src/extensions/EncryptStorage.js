const { EncryptStorage } = require("encrypt-storage");

const secretKey = process.env.REACT_APP_SECRET_KEY;

/**
 * https://www.npmjs.com/package/encrypt-storage#options
 */
export const encryptStorage = new EncryptStorage(secretKey);
