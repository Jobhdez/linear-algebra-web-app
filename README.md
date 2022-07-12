# Linear Algebra web

This is a full stack web application written in JavaScript (ReactJS) and Python3 (Django).

In this app the user can like/upvote research papers from the Arxiv, the user can chat about linear algebra, and search for research papers.

## Run the application

1. run the redis server
2. run the Django server --- i.e., `python3 manage.py runserver`
3. run the React App -- i.e., `npm start`

## example

`http --json POST http://127.0.0.1:8000/api/compute/ expression="Vec([2,3,4]), '+', Vec([3,4,5])"`
returns: 

```
{ expression: [ 5, 7, 9] }
```
