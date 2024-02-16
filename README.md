# GeriatricRecommendations

A Collaborative Filtering Based Recommendation System For Translated Chinese, Japanese and Korean Webnovels, Personal Project   

Kaggle (Scraped Datasets) - https://www.kaggle.com/datasets/geriatricvibes/novelupdatesdataset

NOTE: Check out the different branches of the project for the individual components.

Following are the highlights of my work in the project:

1) Book Recommendation System - Developed a book recommendation system for recommending translated Chinese, Japanese and Korean webnovels involving aspects such as scraping, cleaning and preparing datasets, a search engine and collaborative filtering for recommendations.

2) Web Crawler For Scraping Data: Scraped the data of 13000+ novels and approximately 200000+ user reviews from www.novelupdates.com, a popular webnovel website,  for dataset preparation using scrapers written in TypeScript with Cheerio and Crawlee Library based on Node.js.

3) Search Engine For Title Search: Built a search engine in Python based on the Cosine Similarity Scores with the help of NumPy, Pandas and Sklearn libraries to search the processed user input through the novel data available to get the properties of the input novel.

4) Collaborative Filtering Recommendation System - Implemented a collaborative filtering of the novels using the user reviews data through concepts of Cosine Similarity to get a set of similarly matched users, their novel reviews and sorting them according the the relevant properties.


## Instructions For Running The File ##

1) Download the **Main Zip File** and extract its contents.
2) Follow the Kaggle Link and download the two datasets **noveldata.json** and **userinteraction.json** and copy them to the extracted folder.
3) Install Jupyter and run the **GeriatricRecommendation**.ipynb file and you're done.

Have a great day!
