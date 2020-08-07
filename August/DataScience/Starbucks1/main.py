%matplotlib inline
import pandas as pd

df = pd.read_csv('data/starbucks_drinks.csv')

df.plot(kind='hist', y='Calories', bins=20)