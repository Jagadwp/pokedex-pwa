const sharp = require('sharp');
const axios = require('axios');
const fs = require('fs');

// URL of the image to download and enlarge
const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif';

// Output image path
const outputImagePath = 'src/assets';

// Enlargement factor (e.g., 2 for doubling the size)
const enlargementFactor = 2;

// Download the image using axios
axios({
    url: imageUrl,
    responseType: 'arraybuffer',
})
    .then((response) => {
        const imageData = Buffer.from(response.data, 'binary');

        // Read the downloaded image buffer
        sharp(imageData)
            .resize({
                width: Math.round(enlargementFactor * originalWidth),
                height: Math.round(enlargementFactor * originalHeight),
                fit: 'fill',
                position: 'center',
            })
            .toFile(outputImagePath)
            .then(() => {
                console.log('Image enlarged successfully!');
            })
            .catch((err) => {
                console.error('An error occurred while enlarging the image:', err);
            });
    })
    .catch((err) => {
        console.error('An error occurred while downloading the image:', err);
    });