(View Raw will give you the markdown that you can copy to your repos!)

![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# PROJECT NAME

weekend-jquery-server-calculator.js

## Description

_Duration: 8 hours_

Description:
In this project, we learned how to:

1. Create a user interface
2. Grab user input
3. Select the type of mathematical operation the user wants
4. Click a submit button that captures the user inputs, bundles it in an object, and sends the object to the server using POST method
5. Server logic should perform calculations and store the new result
6. Then use a GET method to retrieve the data from the server and display a history of the results on the DOM

What problem did you solve? How did you solve it?

1. Creating server logic to calculate the inputs. I first approached this by creating 4 separate if statements, then 4 functions. In the end, I solved this issue by creating a switch statement. Then storing the result of the calcuation in a new object that would be returned to the client upon a GET request.

2. 

## Screen Shot



### Prerequisites

Link to software that is required to install the app (e.g. node).

-   [Node.js](https://nodejs.org/en/)
-   List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example -- Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx

## Built With

List technologies and frameworks here

## License

[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support

If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)
