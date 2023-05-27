from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World! This is a test of your Docker environment3.'

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(host="0.0.0.0", port=8000, debug=True)
