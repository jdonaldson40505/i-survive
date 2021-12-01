
from fastapi import FastAPI
from pydantic import BaseModel
import pickle

app = FastAPI()

# @app.on_event("startup")
# def load_model():
#     global model
#     model = pickle.load(open("model", "rb"))

# @app.get('/')
# def index():
#     return {'message': 'This is the homepage of the API '}
# server.run_app(app=app)
class Person(BaseModel):
    

@app.post('/predict')
async def assign_group(person: Person):
    data = person.dict()
    model = model = pickle.load(open('ml_model.pkl', 'rb'))