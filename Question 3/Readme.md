 
A -  5 user stories 
 
    1- As a ' watcher ' i'm able to see my active watching series 
    2- As an ' Admin ' i can monitor the content 
    3- As an ' moderator ' i can report misconducts 
    4- as ' guest '  i can see pricing plans 
    5- as the payment app i can process users credit card and payments 
 
B - 5 Features :
    
    1- authentication 
        tasks to be done:{
            1- Make user model if not found 
            2- Making middleware function
            3- using proper authentication method such as ( JWT or Passport )
            4- making test case for it
 
        }
        time to be done in : 2 hours keeping in mind the the database arch is already made  
    2- payment integration
        tasks to be done:{
            1- Make transactions model if not found 
            2- Choosing a proper payment package integration
            3- Making module for payments
            4- making test case for it
 
        }
        time to be done in :6 hours  keeping in mind the the database arch is already made  + if we are using multiple payment methods 
    3- listing new content 
        tasks to be done:{
            1- Make content model if not found 
            2- querying on db 
            3- making controller and services for it 
            4- making test case for it
        }
        time to be done in :2 hours  keeping in mind the the database arch is already made 
    4- listing already watched content 
            1- Make content model if not found 
            2- querying on db 
            3- making controller and services for it 
            4- making test case for it
        }
        time to be done in :2 hours  keeping in mind the the database arch is already made 
    5- listing suggested content 
      1- Make content model if not found 
            2- aggregating on db  and based most watched genre we receive more from it  
            3- making controller and services for it 
            4- making test case for it
        }
        time to be done in :2 hours  keeping in mind the the database arch is already made 
 
- 10 RESTful APIs

    1- GET/user

    2- DELETE/user

    3- POST/user

    4- PUT/user

    5- GET/content

    6- DELETE/content

    7- POST/content

    8- PUT/content

    9- GET/payment

    10 POST/payment