from datetime import datetime
from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///myTodo.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Todo(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    cont = db.Column(db.String(600), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self) -> str:
        return f"{self.sno} - {self.title}"


@app.route("/", methods=['GET', 'POST'])
def helloworld():
    if request.method == 'POST':
        title1 = request.form['title']
        cont1 = request.form['content']
        todo = Todo(title=title1, cont=cont1)
        db.session.add(todo)
        db.session.commit()
    allTodo = Todo.query.all()
    return render_template('index.html', allTodo=allTodo)


@app.route('/delete/<int:serial>')
def delete(serial):
    rec = Todo.query.filter_by(sno=serial).first()
    db.session.delete(rec)
    db.session.commit()
    return redirect('/')

@app.route('/update')
def update():
    allTodo = Todo.query.all()
    print(allTodo)
    


if __name__ == "__main__":
    app.run(debug=True)
