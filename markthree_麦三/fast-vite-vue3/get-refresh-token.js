import express from 'express';
import open from 'open';
import axios from 'axios';

const app = express();
const PORT = 8888;
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = `http://localhost:${PORT}/callback`;

// 启动Express服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  // 打开浏览器进行Spotify授权
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-read-playback-state%20user-modify-playback-state`;
  open(authUrl);
});

// 处理回调
app.get('/callback', async (req, res) => {
  const code = req.query.code;

  try {
    // 获取access token和refresh token
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const refreshToken = response.data.refresh_token;
    console.log('Refresh Token:', refreshToken);
    res.send('授权成功！请查看终端获取refresh token。');
    process.exit();
  } catch (error) {
    console.error('Error getting refresh token:', error.response ? error.response.data : error.message);
    res.status(500).send('授权失败，请重试。');
    process.exit(1);
  }
});
