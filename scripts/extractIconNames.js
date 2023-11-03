import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getIconNames = (iconDir) => {
    return fs.readdirSync(iconDir)
        .filter(file => file.endsWith('.js') && file !== 'index.js')
        .map(file => path.basename(file, '.js'));
};

const outputIconNames = (iconNames, outputPath) => {
    fs.writeFileSync(outputPath, JSON.stringify(iconNames, null, 2));
};

console.log('Extracting icon names...');

const iconDir = path.join(__dirname, '../node_modules/@ubie/ubie-icons/dist/esm');
const iconNames = getIconNames(iconDir);
const outputPath = path.join(__dirname, '../src/metadata/iconNames.json');
outputIconNames(iconNames, outputPath);

console.log('Icon names extracted successfully!')