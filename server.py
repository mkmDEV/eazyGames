from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def home():
    return render_template('index.html',
                           page_title="Welcome to EasyGames!",
                           lead_phrase="Easy as 1, 2, 3...",
                           )


@app.route("/typing-test")
def typing_test():
    return render_template('typingtest.html',
                           page_title="typingTest",
                           lead_phrase="How fast can You type?!",
                           )


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True
    )
