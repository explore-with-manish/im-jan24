const fs = require('fs');
const { createCipheriv, createDecipheriv, randomBytes, scrypt } = require('crypto');

const password = 'this-is-super-secret-key';
const salt = randomBytes(16); // Generate a salt

scrypt(password, salt, 24, (err, key) => {
    if (err) throw err;

    const algorithm = 'aes-192-cbc';
    const iv = randomBytes(16); // Generate a random IV
    const ivPath = './iv.txt';  // Path to save the IV

    // Save the IV for later decryption
    fs.writeFileSync(ivPath, iv);

    // Encryption
    const cipher = createCipheriv(algorithm, key, iv);
    const inputEncrypt = fs.createReadStream('./file1.txt');
    const outputEncrypt = fs.createWriteStream('./file1-en.txt');

    inputEncrypt.pipe(cipher).pipe(outputEncrypt).on('finish', () => {
        console.log("File Encrypted...");

        // Decryption
        const ivForDecrypt = fs.readFileSync(ivPath); // Read the IV for decryption
        const decipher = createDecipheriv(algorithm, key, ivForDecrypt);
        const inputDecrypt = fs.createReadStream('./file1-en.txt');
        const outputDecrypt = fs.createWriteStream('./file1-decrypted.txt');

        inputDecrypt.pipe(decipher).pipe(outputDecrypt).on('finish', () => {
            console.log("File Decrypted...");
        });
    });
});
