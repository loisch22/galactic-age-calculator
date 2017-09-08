# _Super Galactic Age Calculator_

#### _An application that calculates a users age to return various results. September 8, 2017_

#### By _**Lois Choi**_

## Description

_This application will calculate a users age based on seconds, Mercury years (.24 Earth years), Venus years (.62 Earth years), Mars years (1.88 Earth years), and Jupiter (11.86 Earth years). It will also allow users to enter two dates to receive the difference between the two in seconds. The application will also determine the users life expectancy on each planet. If a user has already surpassed the average life expectancy, the application will let the user know. This application was calculated on the basis of 365 days a year, the average human life expectancy 79, and will calculate with numbers rounded to the nearest whole number._


## User Story Specifications (BDD)

| Behavior | Input | Output |
| :---         |     :---:      |          ---: |
| 1. User enters a their age and receives their age in seconds | 1 | 31536000|
| 2. User enters two dates and receives the difference between them | March 10, 2017 & March 15, 2018 | 314,449,600|
| 3. User enters age and receives Mercury years | 1 | 88 (actual 87.6) |
| 4. User enters age and receives Venus years | 1 | 226 (actual 226.3) |
| 5. User enters age and receives Mars years | 1 | 686 (actual 686.2) |
| 6. User enters age and receives Jupiter years | 1 | 4,329 (actual 4328.9) |
| 7. User can find how many years left to live they have on each planet | if age is 78 | Mercury: 88 <br> Venus: 226 <br> Mars: 686 <br> Jupiter: 4329 |
| 8. If user surpassed average life expectancy, application let's user know how many years above the life expectancy they already | 78 | "You have lived passed the expected life expectancy by:" <br> Mercury: 88 <br> Venus: 226 <br> Mars: 686 <br> Jupiter: 4329 |

## Exentensions/Wish list

_Have users enter which country they are from to get the average age for that country. Then give a more "accurate" prediction on their life expectancy on different planets._

## Known Bugs

_No known bugs_


## Technologies Used

_C#, SQL, .NET_

### License

*MIT License*

Copyright (c) 2017 **_Lois Choi_**
