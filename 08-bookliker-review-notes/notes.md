Deliverables:
 - [] Get a list of books and render a list of titles // on load do at GET fetch and render to DOM
 - [] Click on a title will render book details in show panel // GET fetch and render
 - [] Clicking the like button on a detail will add `{"id":1, "username":"pouros"}` to that book's users // PATCH fetch and re-render

 Stretch goals: 
- [] user can unlike a book // PATCH fetch and re-render

Endpoints:
http://localhost:3000/books GET
http://localhost:3000/books/1 PATCH
http://localhost:3000/users/1 GET ???

Data shapes:
```js
{
      "id": 1,
      "title": "Grapefruit",
      "subtitle": "A book of Instruction and Drawings.",
      "description": "Back in print for the first time in nearly thirty years, here is Yoko Ono's whimsical, delightful, subversive, startling book of instructions for art and for life. 'Burn this book after you've read it.' -- Yoko 'A dream you dream alone may be a dream, but a dream two people dream together is a reality. This is the greatest book I've ever burned.' -- John",
      "author": "Yoko Ono",
      "img_url": "https://books.google.com/books/content?id=3S8Rwr-iBdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "users": [
        {
          "id": 2,
          "username": "auer"
        },
        {
          "id": 8,
          "username": "maverick"
        },
        {
          "id": 1,
          "username": "pouros"
        }
      ]
    }
```

Detail HTML
```HTML
<div>
    <img src="[thumbnail img]" />
    <h1>TITLE</h1>
    <h1>AUTHOR</h1>
    <p>DESCRIPTION</p>
    <ul>
        <li>user1</li>
        <li>user2</li>
    </ul>
    <button>LIKE</button>
</div>
```
