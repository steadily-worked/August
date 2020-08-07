%matplotlib inline
import pandas as pd

df = pd.read_csv('data/silicon_valley_summary.csv')
boolean1 = df['job_category'] == 'Managers'
boolean2 = df['gender'] == 'Male'
boolean3 = df['race_ethnicity'] != 'All'
df[boolean1 & boolean2 & boolean3].plot(kind='bar', x='race_ethnicity', y='count')

# 코드를 작성하세요.