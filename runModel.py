
from fastapi import FastAPI
import pickle

app = FastAPI()

@app.on_event("startup")
def load_model():
    global model
    model = pickle.load(open("model", "rb"))

@app.get('/')
def index():
    return {'message': 'This is the homepage of the API '}
server.run_app(app=app)
