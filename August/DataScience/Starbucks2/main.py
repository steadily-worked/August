%matplotlib inline
import pandas as pd

df = pd.read_csv('data/starbucks_drinks.csv')
df.plot(kind='box', y='Calories')
# 코드를 작성하세요.