
![attempt](https://user-images.githubusercontent.com/65372382/205413329-2ae33d71-d1d0-40de-8ef7-1440b08f9862.PNG)


# Mutual-Aid


   This project is a noval attempt at using the concept of Mutual Aid to connect people in central NJ and essentially worldwide.  In this aspect anyone will be capable of requesting assistance and answering a request in turn with no organizational oversight.  Google Maps API or a related service can be utilised to determining distances and enable direction routing. An arguably simple, yet stylistic, interface enables easier site navigation and less bandwith.  Individuals are free to clone the site if they wish to make a local version of this setup.    

## Steps

Clone the repository
 git clone https://github.com/Richard-M-Baine/Mutual-Aid/


Before starting with the next steps, ensure you cd in to the app (backend) directory to make sure you have base dependencies for running this app.

=================================================

Install dependencies (Backend / Flask)
  pipenv install -r requirements.txt
  
  This will automatically load the backend dependencies.  
  
Create a .env file based on the env.example with proper settings for your development environment



Get into your pipenv, migrate your database, seed your database, and run your flask app

 pipenv shell 
 flask db upgrade
 flask seed all 
 flask run 
 
To run the React App in development, and get the layout of the redux store, checkout the README inside the react-app directory.
Before starting with the next steps, ensure you cd in to the react-app directory to make sure you have base dependencies for running this app.

=================================================

Once in the react-app directory , first run:

 npm install - this will take some time about 10 minutes depending on your computer
 
After this is loaded, and to start the application, then run the following command:

 npm start
Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Flask check out the [Flask documentation](https://flask.palletsprojects.com/en/2.2.x/).

To learn SQLAlchemy check out the [SQLAlchemy documentation](https://www.sqlalchemy.org/).

To learn WTForms check out the [WTForms documentation](https://wtforms.readthedocs.io/en/2.3.x/).


Contact The Project Developer
Richard Baine
Email: richardbaine@gmail.com

LinkedIn https://www.linkedin.com/in/richard-baine-87184b29/

GitHub https://github.com/Richard-M-Baine


The concept of Mutual Aid vs traditional charity is elaborated upon through Dean Spade's book.  MUTUAL AID: BUILDING SOLIDARITY DURING THIS CRISIS (AND THE NEXT)

An overview of the concept, and information about how it differs from charity, can be found at https://www.deanspade.net/mutual-aid-building-solidarity-during-this-crisis-and-the-next/

or via an free audio recording at https://www.youtube.com/watch?v=OuIBqis4mbc&t=1130s

This code can be freely used as a "framework" in any way that a developer sees fit under the condition that they use it solely for beneficial / altruistic purposes, do not directly or indirectly profit from it, and allow anyone to participate or receive services. 
