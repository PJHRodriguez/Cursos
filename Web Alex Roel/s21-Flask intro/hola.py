from flask import Flask, render_template

app = Flask(__name__)#Envia el nombre del archivo "hola" hacia flask

@app.route('/')
@app.route('/hola')
def hola():
    mensaje = 'Hola mundo con flask'
    #return '<h1>Hola Mundo </h1>'
    return render_template('index.html',msm = mensaje) #para cargar un archivo html debe de estar dentro de la carpeta templates

class Blog:
    def __init__(self, titulo , descripcion):
        self.titulo = titulo
        self.descripcion = descripcion

@app.route('/blogs')
def blog():
    b1= Blog(
        '¿Que es Python?',
        'Descripcion del blog 1'
    )

    b2= Blog(
        '¿Que es Python?',
        'Descripcion del blog 2'
    )

    blogs =[b1, b2]
    return render_template('blog.html', blogs = blogs)

@app.route('/saludar')
@app.route('/saludar/<nombre>')
def saludar(nombre = None):
    return render_template('hola.html',nombre=nombre)

"""
if __name__ == '__main__':
    app.run(debug=True) otra forma de ejecutar tu programa
"""