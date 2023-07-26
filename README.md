Learning Management System end to end system

LMS divided into two sections:- Student and Admin

student can perform USER, COURSE AND PAYMENT
ADMIN can access USER COURSE PAYMENT

USER:- STUDENT((/api/v1/user))
 -> create account(/api/v1/register)
 -> Login(/login)
 ->Reset Password(/change-password)
 ->Profile(/me)
 ->Update Profile(/me:id)
 ->logout(/logout)

 USER -> courses(/api/v1/courses)
 1. list of courses -> access(/)
 2. View Course(/:id) to view respective courses

 ADMIN side:->
 1. create account from database to get access of admin -> Update in the 
 2. login
 3. reset password
 4. profile
 5. update profile
 6. logout

 ADMIN -> course
 1. list
 2. view
 3. create
 4. edit
 5. delete

 ADMIN -> payment

 1. list
 2. view


 TECH STACK:
 1. mongodb -> database
 2. expressJS
 3. react JS
 4. node JS

