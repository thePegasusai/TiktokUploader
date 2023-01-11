const TikTokScraper = require('tiktok-scraper');

// Replace 'YOUR_ACCESS_TOKEN' with your actual access token
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  'X-IG-App-ID': '124024574287414',
  'X-IG-WWW-Claim': 'hmac.AR36mxH-9zrp8Yf1stlD1zpcgc20xoNVi8DXKwYzYQ',
  'X-Tt-Token': 'YOUR_ACCESS_TOKEN'
}

// Upload video
TikTokScraper.upload({
    video: '/path/to/video.mp4',
    caption: 'Here is my awesome video!',
    hashtags: ['awesome', 'cool', 'video'],
    headers: headers
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
