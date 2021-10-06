# %%
import pandas as pd
from sklearn.cluster import KMeans
import pandas as pd

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
dating = dating.drop(columns=['income', 'last_online', 'location', 'sign', 'smokes', 'body_type', 'status'])
# %%
# Searches for unique responses for one-hot-encoding
import numpy as np
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
# %%
# Error--one response not yet encoded
orientation = (dating.orientation
    .str.replace('straight', '1')
    .str.replace('gay', '2')
    .str.replace('bisexual', '3')
    .astype('float'))
# %%
enc = pd.get_dummies(dating)
print(enc)

# %%
enc.head(20)

# %%
