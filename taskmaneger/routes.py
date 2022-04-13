from flask import render_template
from taskmaneger import app, db
from taskmaneger.models import Category, Task


@app.route("/")
def home():
    return render_template("base.html")