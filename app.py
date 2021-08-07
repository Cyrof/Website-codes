from flask import Flask, render_template, request, url_for
import requests
from werkzeug.utils import secure_filename


app = Flask(__name__)

app.config["TEMPLATES_AUTO_RELOAD"] = True


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/uploadFile')
def uploadFile():
    return render_template('uploadFile.html')

@app.route('/uploaded', methods = ['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        f.save(secure_filename(f.filename))

        return render_template('uploadFile.html')

@app.route('/bookNow', methods = ['GET', 'POST'])
def calendar():
    return render_template("./calendar/book_room.html")


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port="8008")
