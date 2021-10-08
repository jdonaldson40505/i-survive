# %%
import pandas as pd
from sklearn.cluster import KMeans
import pandas as pd
import numpy as np

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
dating = dating.replace({np.nan: 0, -1: 0})
# %%
# Searches for unique responses for one-hot-encoding
response_type_orientation = []
for response in dating.orientation:
    try:
        if response == np.nan or response == '':
            pass
        elif response not in response_type_orientation:
            response_type_orientation.append(str(response))
    except:
        pass

print(response_type_orientation)

response_type_drugs = []
for response in dating.drugs:
    try:
        if response == 'nan' or response == '':
            pass
        elif response not in response_type_drugs:
            response_type_drugs.append(response)
    except:
        pass

print(response_type_drugs)

response_type_age = []
for response in dating.age:
    try:
        if response == 'nan' or response == '':
            pass
        elif response not in response_type_age:
            response_type_age.append(response)
    except:
        pass

print(response_type_age)

response_type_height = []
for response in dating.height:
    try:
        if response == 'nan' or response == '':
            pass
        elif response not in response_type_height:
            response_type_height.append(response)
    except:
        pass

print(response_type_height)
# %%
orientation = (dating.orientation
    .str.replace('straight', '1')
    .str.replace('gay', '2')
    .str.replace('bisexual', '3')
    .str.replace(' easy on the eyes.  i\'m looking for friends', '0')
    .astype('float'))
# %%
drugs = (dating.drugs
    .str.replace('never', '1')
    .str.replace('sometimes', '2')
    .str.replace('often', '3')
    .str.replace(' and maybe down the line', '4')
    .astype('float'))
# %%
age = (dating.age.str.replace('st teachers; the powerfully humble', '0').astype('float'))
height = (dating.height.str.replace(' and community-still open to whatever is true\).  in the friend department', '0').astype('float'))
# %%
# Drops columns to be added back in after one-hot encoding
dating = dating.drop(columns = ['drugs', 'orientation', 'age', 'height'])
# %%
enc = pd.get_dummies(dating)
print(enc)
# %%
enc.head(20)
# %%
enc = enc.assign(age = age)
enc = enc.assign(height = height)
enc = enc.assign(drugs = drugs)
enc = enc.assign(orientation = orientation)
enc = enc.replace(np.nan, 0)
# Variable enc has prepped data

# %%
# Model--can be modified as needed
model = KMeans(n_clusters=8)
result = model.fit_predict(enc)
enc['Cluster'] = result

# %%
