// テストするURL
const url = 'http://localhost:8080';

// HTTPリクエストを送信してレスポンスを受け取る関数
function testFrontend() {
  fetch(url)
    .then(response => {
      if (response.ok) {
        console.log('Frontend is running successfully!');
      } else {
        console.error('Failed to reach the frontend.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// テストを実行する
testFrontend();
