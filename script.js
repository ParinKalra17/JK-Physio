const https = require('https');
const fs = require('fs');

https.get('https://html.duckduckgo.com/html/?q=pulstar+spine+adjustment+device', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        const match = data.match(/<img[^>]+src="([^">]+)"/);
        if (match) {
            let imgUrl = match[1];
            if(imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
            console.log('Found image:', imgUrl);
            https.get(imgUrl, (imgRes) => {
                const file = fs.createWriteStream('public/pulstar.jpg');
                imgRes.pipe(file);
                file.on('finish', () => console.log('Downloaded.'));
            });
        } else {
            console.log('No image found');
        }
    });
});
