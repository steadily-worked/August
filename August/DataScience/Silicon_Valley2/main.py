%matplotlib inline
import pandas as pd

df = pd.read_csv('data/silicon_valley_details.csv')
boolean1 = df['company'] == 'Adobe'
boolean2 = df['count'] != 0
boolean3 = df['race'] == 'Overall_totals'
boolean4 = (df['job_category'] != 'Totals') & (df['job_category'] != 'Previous_totals')
df_adobe = df[boolean1 & boolean2 & boolean3 & boolean4]
df_adobe.set_index('job_category', inplace=True)
df_adobe.plot(kind='pie', y='count')