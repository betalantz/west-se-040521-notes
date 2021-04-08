# Introduction to the Internet 

## Objectives
  By the end of this lesson, SWBAT:
- [ ] Differentiate between the roles of the client and the server in one request-response cycle
- [ ] Describe the parts of an HTTP Request object and their significances
- [ ] Describe the parts of an HTTP Response object and their significances
- [ ] Make three requests to one server, using different tools (`curl`, Postman, Browser)


## Outline (Suggested Time: 60 Minutes)
```txt
How do Websites Work? (10 Minutes)
Naming the Parts (5 Minutes)
Method + URL (15 Minutes)
BREAK (5 Minutes)
Different Tools (10 Minutes)
Status Codes (5 Minutes)
The Possible Responses (15 Minutes)
```

## How do Websites Work? (10 Minutes)

Start by going to an empty tab in a browser. Go to [a work-appropriate subreddit](https://www.reddit.com/r/Awww/) and ask students if they ever thought about what it takes to get these cute cat pictures to show up on the browser.

Set the stage - 

>  In this program, you will all learn how to become a software developer. When beginning out, the software that we'll be developing will be primarily websites, so in order for us to become masters of our craft, we must first understand the tools that we'll be using. All of us know how to look at websites from the perspective of a consumer, but in this program, we'll learn more about how to look at websites from the perspective of a developer. 

Have students hypothesize/contribute ideas about what is going on when you type an address in the browser's address bar and write down any significant words. This may include, but are not limited to:

- IP Address (Internet Protocol Address)
- TCP (Transmission Control Protocol)
- DNS (Domain Name System)
- Internet Service Provider
- Request + Response
- HTTP(s) (Hyper Text Transfer Protocol (Secure))
- HTML (Hypertext Markup Language)

There is a lot of granularity in the answer that you can cover, but since this is an introductory phase, it's good to just summarize the entire process in a short sentence regarding the request-response. If they are mentioned, tell students that things like IP Addresses, TCP, DNS, ISP exist and are nice to know, but for us when we're just beginning our web-dev journey, this is the important part:

> My computer makes a specific request to Reddit's computer and as a response, Reddit's computer sends back a specific response of what I want to see. 

## Naming the Parts (5 Minutes)

Now that the students have a small enough sentence to start their journey in talking about the request-response cycle, begin to name the terms.

> In the sentence above, there are two computers and one is called the "client" and the other would be called the "server". Based on just everyday vernacular, which computer would be the client in our Reddit example? Which computer would be the server? Who do you think would make the request? Who do you think would make the response?

Have a discussion with the students until they realize/agree that our computer is the client making the request and Reddit's computer is the server sending back the response. 

## Method + URL (15 Minutes)

A good analogy to bring up at this point is a student going to McDonald's and asking the cashier for a Happy Meal. The student is the client and the cashier is the server. And when we order McDonalds, there are some rules regarding etiquette that we need to follow. People can't just hop over the counter and start yelling out their orders and throwing fries around. There's some protocols set in place and the same can be said for our computers. 

> When it comes to real life, the rules that we follow when ordering McDonalds are called "laws" and "general human decency". When it comes to computers, we call the rules that we follow the "HyperText Transfer Protocol" or HTTP, for short. 

Then, show the Network tab on your browser. Find the first request being made to "/Awww" and open up the Headers. Under General, point out the following:

- Request URL
- Request Method 

and mention that when it comes to making HTTP requests, you need both the URL and the Method/HTTP. Students should already have some exposure on what a URL is, but you should still mention that they can think about it as being the destination to which the request is going. It's the address that's on the packet being sent to Reddit. 

However, the Request Method will probably require a bit more explanation. For beginners, it is probably sufficient enough to say the Request Method is a description of what the client wants the server to do once that Request comes in.

> For example, we are making a GET request to "https://www.reddit.com/r/Awww/". Our computer is saying that it wants to GET some cute pictures for it to display on the screen. When we want to do something else, like upload a picture of our cat, the description of what our computer wants Reddit to do might change to something like a POST (Think POSTing something up on a bulletin board). The HTTP verbs are always descriptions from the perspective of the client and are standardized.

Then, list out the four commonly used HTTP Verbs for the phase and after a discussion with the students in which they hypothesize what we're doin to the pictures, write a short description for each of them:

- GET: Get something on the server (Get the existing pictures)
- POST: Create some new information on the server (Create a picture)
- PATCH: Update some existing information on the server (Update a picture)
- DELETE: Delete some existing information on the server (Delete a picture)

*NOTE: Students probably won't have any idea of what a database is, so it helps to keep it simple and describe it as accessing files on the computer.* 

Stress to students that both the Method and the URL are necessary parts of one request. A POST request to "https://www.reddit.com/r/Awww/" is a different request to Reddit's computer than a GET request with the same URL. 

## Break (5 Minutes)

## Different Tools (10 Minutes)

> As consumers, the most common HTTP Method that we have seen is GET. The address bar in our browser only knows how to make GET requests, so when we type in "https://www.reddit.com/r/Awww/", Google Chrome knows to make it into a GET request as that's the only thing it can really do. So, much like how there are different Word Processing applications out there (Apple Pages, Microsoft Word, Notepad), there's different kinds of applications capable of making request-responses. Take Google Chrome, Internet Explorer, Safari Firefox, Opera for example. They're all different applications that pretty much have the same job - to browse the web.

Then, show students [Postman](https://www.postman.com/). Explain that Postman is very much like any other Web Browser - there's a place for you to type in the URL, just like an address bar and when you get a response back, you can see how the page would look like. However, one big difference is that there is a dropdown for you to change the HTTP Method of the request. First show the students how to make a GET request to "https://www.google.com/". At first, try to use the "Preview" section of Postman so that there's some familiarity with Postman as a browser. Afterwards, ask students to hypothesize what would happen if we were to make a DELETE request to "https://www.google.com/". Would we delete Google off of everyone's computer? Would Google block us? Hype up the discussion surrounding it a bit and then, when everyone's wondering what's going to happen, make the request.

## Status Codes (5 Minutes)

The response that Google sends back includes a status code of 405 - Method Not Allowed. This is a good time to start talking about Status Code, starting with the more famous sibling of 405 - 404. Since students will not be spending too much time building out their own API, you can mention: 

> Status codes are also a description, much like the HTTP Method. However, rather than describing our request, the status code instead describes the response. What happened when our request got to Reddit or Google's computer? It got processed and Google said: "Oh, we don't like that you're trying to DELETE our website. Here's a 405 error instead." Or it might say: "Oh, we don't know what that URL is. Here's a 404 error instead." 

- https://http.cat/
- http://httpstatusrappers.com/
- https://httpstatusdogs.com/

are all great resources to share with students.   

If you want to share with the students, you can also mention that there are different kinds of Status Codes, denoted by the digit in the hundreds place:

- 1xx - Informational response and the server is continuing to process it
- 2xx - The request was successfully received
- 3xx - More needs to be done to complete the request 
- 4xx - The request is wrong
- 5xx - The server failed


## The Possible Responses (15 Minutes)
 
In Postman, make another GET request to "https://www.reddit.com/r/Awww/". But this time, rather than using the "Preview" section, show them the "Pretty" section and show the HTML that comes back as the response.

> So, looking at the status code for this GET request, we know that our request was processed and we were able to get a response since we got back a 200. But what got actually sent back? Most websites that we use serve up a special kind of document written in a standard languge called HTML - HyperText Markup Language. Much like HTTP, HTML has become the standard for most websites and browsers and in this program, we'll all learn about how to write HTML as we build out our own web applications. While HTML documents are one of the most popular kinds of responses you can get back, there is another type of response that we will be working with this in this phase - called JSON (JavaScript Object Notation)

Going back to your browser, type out "https://www.reddit.com/r/Awww/.json". in the address bar and don't press enter yet. Ask students to recall from the first discussion of what happens when you press enter. Encourage the use of technical language and try to get students to mention both the URL and the HTTP Method. Then, make the request and have students tell you what they notice about the response. You may want to highlight the first character (`{`) to get students to recognize that what they're working with is an object in JavaScript that have key-value pairs. 

*Note: Tell students that appending `.json` at the end of Reddit's website because that's the way the programmers at Reddit decided to build out their website. This is NOT a common practice for most sites.*

> When we make a GET request to this specific URL, the response that we get back is a standardized file format known as JSON or JavaScript Object Notation. While it has JavaScript in its name and bears a lot of resemblances to the objects that we might have seen so far, it's worth knowing that JSON is language independent. This means that a number of programming languages can create and read JSON and not just JavaScript, but for this phase, we'll be primarily working with it in JavaScript. We'll spend some time at the beginning of the phase building out HTML documents but as we get more and more familiar with websites, we'll take a look at how work with the information inside a JSON object as well as how to fire off a request to make the JSON object available within our program. 

To finish, show them how you can use `curl` in the terminal to make a request to "https://www.reddit.com/r/Awww/.json". Because of the way Reddit designed its website, you may have to change the [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) of our `curl` request and the line below is doing that to mimic a request as if it's coming from a Chrome browser. This will help with stop the 429 response that you might get if you just use `curl` without changing the User-Agent.

```shell

curl "https://www.reddit.com/r/Awww/.json"

curl -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36" "https://www.reddit.com/r/Awww/.json"

```

Hopefully, in seeing the information in the Terminal, students can get a visualization of what is to come with the use of `fetch`; there are programatic ways to make the request-response cycle happen and get access to live information within the flow of our application.

## Common Misconceptions and Sticking Points
- Students might not understand when to use Postman to make non-GET requests. GET requests might be intuitive, but the idea of a non-GET request may seem strange at first. 
- Students might not remember that both the HTTP Verb and the URL make a request - students might often try to go to a given URL for a POST request on the browser, forgetting that the the address bar can only make GET requests.
- Students often forget about status codes because they're usually dealing with structuring the request and letting external APIs handle the response along with the status codes.
