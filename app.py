################################################
# Overview

# This page renders the scrollytelling course example

################################################
from flask import Flask, jsonify, render_template


app = Flask(__name__)

@app.route("/")
def index():

    # Render the template. See javascript files for functionality
    return render_template("index.html")

if __name__ == '__main__':

    app.run(debug=True)
