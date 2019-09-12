# Exploring Webhooks
I'm trying to find out more about webhooks and created this space so that I could explore the data that gets returned from webhooks. I may expand it to write my own webhook and send that off somewhere else.

#### Approach
My idea here is to create a simple web page that will display the content of the webhook data sent to it.

I will launch this on Heroku so that the url will always be available to the places I give the url to. This way I can check in on it and see what's happening.

At first I'll just have it display the most recent item sent to it and display the raw data alongside a prettified version of it. I have thoughts on expanding it to store the information on a database.

#### Reflection
I was able to get the site working, deployed and accepting post requests from the github webhook. I've since set the site to maintenance mode as I realised I was potentially posting my own sensitive information. I learned a lot in terms of how webhooks interact with apis and also got more comfortable with routing in Express, using headers, setting body types to JSON and have a much deeper understanding of the request response cycle.

#### Key Learnings
I hit a roadblock/ bug when I wasn't able to send data to the API. I had a couple great takeaways from that.
* Narrowing the scope of your bug to isolate the problem is incredibly important in debugging.
* Sometimes functions can be written wrong but in a way that doesn't cause a fatal error.
* CURL from the command line is an incredibly powerful and quick way of testing your API locally or while deployed
