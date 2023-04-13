# ITEMS API 
## Get all goods
### GET /api/items
### Public
### example of query: /api/items?pageNumber=2

## Get item by ID
### GET /api/items/id/:id
### Public

## Get items by category
### GET /api/items/category/:category
### Public
### example of query: /api/items/category/desktops?pageNumber=2

## add item to user cart
### POST /api/items/cart/:id
### Private (only for authorized users), requires Headers: {Authorization: bearer {token}}

### Category List:
#### 1. desktops
#### 2. drinks
#### 3. furniture
#### 4. home_kitchen
#### 5. laptops
#### 6. musical_instruments
#### 7. toys

# AUTH API
## Register new user
### POST /api/auth/register
### Public
### example of body: {
    "username": "yourUsername",
    "password": "yourPassword",
}
### returns token (should be used for authorization)

## Login user
### POST /api/auth/login
### Public

