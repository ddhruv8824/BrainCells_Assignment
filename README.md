##DEPLOYED LINK - 
[https://frabjous-baklava-df11a7.netlify.app/]https://frabjous-baklava-df11a7.netlify.app/
## API Endpoints

### 1. Fetch All Users
**Endpoint:** `GET /data/getdata`

**Description:** Fetches all users from the external API.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    ...
  }
]
```

### 2. Get Filtered and Sorted Users
**Endpoint:** `GET /data/users`

**Query Parameters:**
- `name` (optional) - Filters users by name (case insensitive)
- `sort` (optional) - Sorts users by name (`asc` or `desc`)

**Example Requests:**
- Get users sorted in ascending order:
  ```sh
  GET /data/users?sort=asc
  ```
- Get users filtered by name containing "Leanne":
  ```sh
  GET /data/users?name=Leanne
  ```

**Example Response:**
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    ...
  }
]
```
