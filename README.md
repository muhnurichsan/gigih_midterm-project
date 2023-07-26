# GIGIH 3.0 Midterm Project

## Database Structure
  ### Database Name : db_tokplay_clone
  ### Collection: products
  ```javascript
  {
  _id: ObjectId,             // MongoDB-generated unique identifier for the product
  link: String,              // Link of the product
  title: String,             // Title of the product
  price: String,             // Price of the product
  videoID: ObjectId,         // Reference to the video in the product (linked with videos collection)
  createdAt: Date,           // Timestamp date of the created product (stored as Date object)
  updatedAt: Date,           // Timestamp date of the created product (stored as Date object)
}
  ```
### Collection: videos
  ```javascript
  {
  _id: ObjectId,                // MongoDB-generated unique identifier for the video
  url_image_thumbnail: String,  // URL of the embedded youtube video
  url_youtube: String,          // URL of the embedded youtube video
  createdAt: Date,              // Timestamp date of the created video (stored as Date object)
  updatedAt: Date,              // Timestamp date of the created video (stored as Date object)
}
  ```
### Collection: comments
  ```javascript
  {
  _id: ObjectId,        // MongoDB-generated unique identifier for the comment
  username: String,     // Username of the comment
  body: String,         // Show text of the comment
  videoID: ObjectId,    // Reference to the video in the product (linked with videos collection)
  createdAt: Date,      // Timestamp date of the created comment (stored as Date object)
  updatedAt: Date,      // Timestamp date of the created comment (stored as Date object)
}
  ```

## API Structure

### API - Tokopedia Play Clone
----
### Endpoints

- Video Thumbnail List
#### Retrieves a list of video.

```bash
GET /video
```
#### Response
```json
[
    {
        "videoID": "64bce011840cedff473d40a7",
        "url_image_thumbnail": "https://youtube.com"
    },
    {
        "videoID": "64bfd1852cfb95b52f283c36",
        "url_image_thumbnail": "https://google.com"
    },
]
```

- Submit Video
##### Create a new video and return object.

```bash
POST /video
```
#### Response
```json
{
    "success": true,
    "fail":false
}
```

- Comment List
#### Returns the specified comments with related videoID.

```bash
GET /comment/{videoID}
```
#### Response
```json
[
    {
        "username": "rio123",
        "comment": "product ini sangat keren",
        "timestamp": {
            "createdtAt": "2023-07-25T14:21:04.558Z",
            "updatedAt": "2023-07-25T14:21:04.558Z"
        }
    },
    {
        "username": "rio123",
        "comment": "product ini sangat banget malahan",
        "timestamp": {
            "createdtAt": "2023-07-25T14:21:11.836Z",
            "updatedAt": "2023-07-25T14:21:11.836Z"
        }
    },
]
```

- Submit Comment
#### Creates a new comment and return object.

```bash
POST /comment
```
#### Response
```json
{
    "success": true,
    "fail":false
}
```

- Product List
#### Returns the specified products with related videoID.

```bash
GET /product/{videoID}
```
#### Response
```json
[
    {
        "productID": "64bce046840cedff473d40ad",
        "link": "https://youtube.com",
        "title": "Kemeja Muslim Batik",
        "price": "120000"
    },
    {
        "productID": "64bfdedde98c9d8c95c1014f",
        "link": "https://youtube.com",
        "title": "Iphone 12",
        "price": "120000"
    },
]
```
- Search Product
#### Returns the searched products with related videoID.

```bash
GET /product/{videoID}/search?title=kemeja
```
#### Response
```json
[
    {
        "productID": "64bce046840cedff473d40ad",
        "link": "https://youtube.com",
        "title": "Kemeja Muslim Batik",
        "price": "120000"
    },
    {
        "productID": "64bfd65b81bae50f36de7127",
        "link": "https://youtube.com",
        "title": "Kemeja Muslim Kalimantan",
        "price": "120000"
    },
]
```

- Submit Product
#### Creates a new product and return object.

```bash
POST /product
```
#### Response
```json
{
    "success": true,
    "fail":false
}
```

## List API Request and Response
### Video Thumbnail List
* Mapped Video object
```
{
  videoID: ObjectId,              
  url_image_thumbnail: String,   
}
```
**GET /video**
----
  Retrieves a list of video.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
     {<mapped_video_object>},
     {<mapped_video_object>}
]
```

### Submit Video
**POST /video**
----
  Create a new video and return object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    url_image_thumbnail: String,
    url_youtube: String
  }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{
    success: true,
    fail: false
}` 
* **Error Response:**  
  * **Code:** 400  
  **Content:**  `{
    success: false,
    fail: true
}` 

### Comment List
* Mapped Comment object
```
{
  username: String,              
  comment: String,
  timestamp :{
    createdAt: Date,
    updatedAt: Date
  }
}
```
**GET /comment/:videoID**
----
  Returns the specified comments with related videoID.
* **URL Params**  
  *Required:* `videoID=[ObjectId]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** 
  ```
  [
     {<mapped_comment_object>},
     {<mapped_comment_object>}
  ]
  ```
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ message : "Tidak dapat menemukan comment untuk id yang diberikan" }`

### Submit Comment
**POST /comment**
----
  Creates a new comment and return object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
{
    username: String,
    bodyComment: String,
    videoID: ObjectId
}
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{
    success: true,
    fail: false
}` 
* **Error Response:**  
  * **Code:** 400  
  **Content:**  `{
    success: false,
    fail: true
}` 

### Product List
* Mapped Product object
```
{
    productID: ObjectID,
    link: String,
    title: String,
    price: String
}
```
**GET /product/:videoID**
----
  Returns the specified products with related videoID.
* **URL Params**  
  *Required:* `videoID=[ObjectId]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** 
  ```
  [
     {<mapped_product_object>},
     {<mapped_product_object>}
  ]
  ```
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ message : "Tidak dapat menemukan product untuk id yang diberikan" }`

### Search Product
* Mapped Product object
```
{
    productID: ObjectID,
    link: String,
    title: String,
    price: String
}
```
**GET /product/:videoID/search?title=**
----
  Returns the searched products with related videoID.
* **URL Params**  
  *Required:* `videoID=[ObjectId]`
  *Required:* `title=[String]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** 
  ```
  [
     {<mapped_product_object>},
     {<mapped_product_object>}
  ]
  ```
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ message : "Tidak dapat menemukan product untuk id yang diberikan" }`

### Submit Product
**POST /product**
----
  Creates a new product and return object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
{
    link: String,
    title: String,
    price: String,
    videoID: ObjectId
}
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{
    success: true,
    fail: false
}` 
* **Error Response:**  
  * **Code:** 400  
  **Content:**  `{
    success: false,
    fail: true
}` 
    
## How to Run

1. First you need to clone this repo into your local machine
  ```bash
git clone https://github.com/muhnurichsan/gigih_midterm-project.git
```
2. Use npm as package manager [npm](https://www.npmjs.com/) to install project packages.
```bash
npm install
```
3. Before run the project make sure MongodDB already installed in your local machine and also duplicate .env.example file and rename it into .env
4. Run project using this command
```bash
npm run start
```
5. In order to create and access all collection, hit (run) all the POST Method API to initialize data. Use this order:
   - POST /video (first)
   - POST /comment (second)
   - POST /product (third)
