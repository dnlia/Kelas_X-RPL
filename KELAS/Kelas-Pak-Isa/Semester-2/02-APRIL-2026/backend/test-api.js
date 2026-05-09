const axios = require('axios');
async function test() {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      email: 'pjm@gmail.com',
      password: '.'
    });
    console.log("LOGIN SUCCESS:", res.data);
  } catch (err) {
    if (err.response) {
      console.log("LOGIN FAILED WITH RESPONSE:", err.response.data);
    } else {
      console.log("NETWORK ERROR:", err.message);
    }
  }
}
test();
