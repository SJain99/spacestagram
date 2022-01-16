## Spacestagram

Spacestagram is an image-sharing website from the final frontier. On it, you will find all the "Astronomy Pictures of the Day", which are present on NASA's website, from the start of 2022. This website was built as a part of the Shopify Frontend Developer Intern challenge for Summer 2022.

A live build of the website is available at: https://spacestagram-lovat.vercel.app/

## Features

- Able to like images, and persist likes after leaving the website and reconnecting
- Button animations while hovering
- Loading "skeleton" state while fetching data from NASA API
- Shareable links for each image
- Dark (space) mode

## Tools Used

- Next.js (with SWR for revalidation)
- React.js
- Chakra UI
- NASA API

## Running the Project Locally

If you wish to run the code for this project on your personal machine, follow these steps:

1. Obtain a free API key from NASA APIs at https://api.nasa.gov/
2. Clone this repository into a folder of your choice by using the ```cd``` command in a terminal window and then entering the following: ```git clone https://github.com/SJain99/spacestagram.git```
3. At the root directory of the project, create a file named ```.env.local```
4. In this file, enter the following: ```NEXT_PUBLIC_NASA_API_KEY={YOUR_API_KEY}```, replacing ```{YOUR_API_KEY}``` with the API key you obtained from NASA
5. In your terminal window, enter ```npm start``` or ```yarn start``` to start the app on ```http://localhost:3000/```
