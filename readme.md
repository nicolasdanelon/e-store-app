# Requirements
|Software|Version|
--|--
|npm|3.10.9|
|node|v6.9.2|
|docker|17.11.0-ce|
|docker-compose|1.8.1|
|git|2.14.1|

### Checkout the code
```
git clone git@github.com:nicolasdanelon/e-store-app.git
```

### Installing API dependencies
```
cd e-store-app/api
npm i
```

### Installing frontend dependencies
```
cd ../front
nmp i
```

### Building static files
```
nmp run build
cd ..
```

### Running the staging server
```
docker-compose up -d
```

### Creating a product
```
curl -d "name=Linux&price=900&list_price=980&brand=BrandOnew&category_id=98" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -X POST http://localhost:3000/products
```
### Retrieving all products
```
curl  http://localhost:3000/products
```