# %%
import pandas as pd
from sklearn.cluster import KMeans
import pandas as pd
import numpy as np
import pickle


dating = pd.read_csv('dating_profiles.csv')
# %%
dating.info()
# %%
dating.head(20)
# %%
# Drops all empty columns
to_delete = ''
for i in range(21, 154):
    to_delete = 'Unnamed: ' + str(i)
    dating = dating.drop(columns=to_delete)
# %%
# Drops all unnecessary columns
dating = dating.drop(columns=['height', 'pets', 'income', 'last_online', 'location', 'sign', 'smokes', 'body_type', 'status'])
# %%
index = 0
for response in dating.sex:
    if response != 'm' and response != 'f' and str(response) != '0':
        dating = dating.drop(labels = index)
    index += 1
# %%
dating = dating.replace({np.nan: 0, -1: 0})
# %%
# Searches for unique responses for one-hot-encoding
response_type = []
for response in dating.religion:
    if response not in response_type:
        response_type.append(response)

print(response_type)
# %%
# Gets ethnicities from column to become one-hot encoded columns
columns = []
for response in dating.ethnicity:
    if response != 0:
        response = response.strip().split(', ')
        for sub_response in response:
            if sub_response not in columns:
                columns.append(sub_response)

print(columns)
# %%
# One-hot encodes data in original ethnicity column
storage_ethnicity = pd.DataFrame()
for column_name in columns:
    column = []
    for response in dating.ethnicity:
        if response == 0:
            column.append('0')
        elif column_name in response:
            column.append('1')
        else:
            column.append('0')
    if column_name == 'other':
        storage_ethnicity[column_name + '_ethnicity'] = column
    else:
        storage_ethnicity[column_name] = column

storage_ethnicity.head(20)
# %%
# Gets languages from speaks to become one-hot encoded columns
import re 
columns = []
for response in dating.speaks:
    if response == 0:
        break
    response = re.sub('[\(\[].*?[\)\]]', '', response)
    response = response.strip().split(', ')
    for language in response:
        language = language.strip()
        if language not in columns:
            columns.append(language)

print(columns)
# %%
# Creates one-hot encoded columns for languages
storage_speaks = pd.DataFrame()
for column_name in columns:
    column = []
    for response in dating.speaks:
        if response == 0:
            column.append('0')
        elif column_name in response:
            column.append('1')
        else:
            column.append('0')
    if column_name == 'other':
        storage_speaks[column_name + '_speaks'] = column
    else:
        storage_speaks[column_name] = column

storage_speaks.head(20)
# %%
# Gets religions from column to become one-hot encoded columns
columns = []
for response in dating.religion:
    if response != 0:
        response = response.strip().split()
        if response[0] not in columns:
            columns.append(response[0])

print(columns)
# %%
storage_religion = pd.DataFrame()
for column_name in columns:
    column = []
    for response in dating.religion:
        if response == 0:
            column.append('0')
        elif column_name in response:
            column.append('1')
        else:
            column.append('0')
    if column_name == 'other':
        storage_religion[column_name + '_religion'] = column
    else:
        storage_religion[column_name] = column

storage_religion.head(20)
# %%
orientation = (dating.orientation
    .str.replace('straight', '1')
    .str.replace('gay', '2')
    .str.replace('bisexual', '3')
    .astype('float'))
# %%
drugs = (dating.drugs
    .str.replace('never', '1')
    .str.replace('sometimes', '2')
    .str.replace('often', '3')
    .astype('float'))
# %%
age = dating.age
# %%
# Drops columns to be added back in after one-hot encoding
dating = dating.drop(columns = ['drugs', 'orientation', 'age', 'speaks', 'ethnicity', 'religion'])
# %%
enc = pd.get_dummies(dating)
print(enc)
# %%
enc.head(20)
# %%
enc = enc.assign(drugs = drugs)
enc = enc.assign(orientation = orientation)
enc = pd.concat([enc, storage_speaks], axis = 1)
enc = pd.concat([enc, storage_ethnicity], axis = 1)
enc = pd.concat([enc, storage_religion], axis = 1)
enc = enc.replace(np.nan, 0)
# Variable enc has prepped data

# %%
# Model--can be modified as needed
classifier = KMeans(n_clusters=8)
model = classifier.fit(enc)

# %%
# Saves model as pkl to be used in site

Pkl_Filename = "group_model"  

with open(Pkl_Filename, 'wb') as file:  
    pickle.dump(model, file)
