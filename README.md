# The Movie DB | Front-End Task

## BACKGROUND

The goal of this project is to use NextJs capabilities and its paradigms by
creating a Movie app. This app should be able to list and show Movies.

The main purpose for this app is to show my front-end skills to the development team of Club Feast, whom I feel grateful for the chance to participate in solving this task

## USAGE

This website is constituted by five pages

- **/** (home): The home view shows a list of the movies that are currently in theaters.
- **/popular**: View showing the most popular movies in the database
- **/top-rated**: View showing a list of movies ordered by rating.
- **/upcoming**: View showing a list of movies that are being released soon.
- **/movie/:movie_id**: This page mainly has details about the selected movie. This page also has a list of the movie credits


## INSTALLATION

You can install this app following the next steps:

1. Clone the project from GitHub

```bash
git clone https://github.com/JosueCuevas/the-movie-db.git
```

2. Once the project has downloaded in your local, install the dependencies

```bash
npm install
```

1. This project consumes an API from The Movie DB which is a database where we can find the definitive list of currently available methods for movies, TV shows, actors and images, so you will need some credentials in order to make this app working well. Create a `.env` at the root of the project and write this environment variables

```.env
API_KEY=4f298a53e552283bee957836a529baec
```

4. Once the dependencies have installed and the environment variables have set, you can run the app in your local running the next command:

```bash
npm run dev
```

5. Visit the `http://localhost:3000` in your browser to see the project working

## STACK USED

This project was built using **Next.js**, **Typescript** and **TailwindCSS**, which is the stack proposed for this task

I tried to make the design as close as possible to the provided designs in the PDF file for this task, adding responsiveness and functionality

Finally, I want to say thank you for the opportunity to show my skill set to the Technical Team of Club Feast
