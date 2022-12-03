# state

State management for this program is exclusively through react-redux.  Although definitely superfluous for a project of this size it provided an opportunity to slowly become comfortable with the tech stack. Although fairly uniform there are slight permutations when it comes to pulling the information from the backend depending on the circumstance.  

![Capture](https://user-images.githubusercontent.com/65372382/205386026-ad4e6492-8af8-459c-8016-aa69f1378fed.PNG)

an example is shown directly above.  The address for a request was just updated.  In this situation the "groups" and requests that were created for the user are being shown.  As can be figured out superfluous information is not being presented.  Instead of using organization or charity, words often presented to the user, I choose groups simply for ease of reading.  The exact file structure is shown below.  Locations was made a separate table from groups on the backend to practice one to one relationships. It also was done in an attempt to mimic a cloned site in the beginning of the project and existed as a relic due to it. 



User {

id

firstName

lastName

Email

userName

}

Groups {

about

created_at

founder

locationID (primary key for locations)

name

private

purpose

updated_at 

}

locations

{
id

address

city 

state

}

requests 

{

id

address

city

details

end_time

start_time

state

title

}





