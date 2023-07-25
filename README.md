# gigih_midterm-project

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


## List API Request and Response
###Video Thumbnail List
* Mapped Video object
```
{
  videoID: ObjectId,              
  url_image_thumbnail: String,   
}
```
**GET /videos**
----
  Returns all videos in the system.
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
**POST /users**
----
  Creates a new video and returns object.
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


## How to Run

1. First you need to clone this repo into your local machine
  ```bash
git clone https://github.com/muhnurichsan/gigih_midterm-project.git
```
2. Use npm package manager [npm](https://www.npmjs.com/) to install project packages.
```bash
npm install
```
3. Before run the project make sure MongodDB already installed in your local machine and also duplicate .env.example file and rename it into .env
4. Run project using this command
```bash
npm run start
```
