# FablabNetworkMobile Project
## Andrea Righi - Matr. n. 15483 -- Cristiano Lucian - Matr. n. 15850

In order to make the app work, it is enough to run npm install in the root directory, it will create all the node_modules necessary to run the whole system.

In our application, we implemented the following functions:
- The app asks for a login. Unfortunately only the user login is available for this app. The user can login both with email or username.
- In the fablab section it is possible to see the list of all fablabs and the map with all the fablabs.
- When a fablab is tapped, the user can contact the fablab and see the events organized by it. It can also show it on map and book a machine.
- The machine booking is the key part: the user has to choose a printer/machine, select a start/end date and the quantity of material used. If the dates are overlapping or the machine is already booked for that period, the user will be asked to choose an another period. 
The amount of material requested is checked with the amount in the inventory of the fablab. When all data is correct the book is performed.
- The dashboard part can let the user see its memberships in each fablab, disable each one of them, and see the projects of the community.

Persistent logins is a bit buggy, therefore we decided to disable it. 

The login data is: 
- username: admin   _or_  admin@unibz.it
- password: admin
