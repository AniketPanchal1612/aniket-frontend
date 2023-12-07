
# Frontend Assignment



## Installation

Install my-project with npm

```bash
  npm install 
  npm start
```


    
### Hosted URL of Frontend Assignment


```bash
  https://aniket-frontend.vercel.app/
```


## Documentation


1. Inside Src-| assets, components,slices

2. slices-| BookingSlice.js, FetchSinglePropertySlice.js, FilterSlice.js, PropertyDataSlice.js, SearchSlice.js, UserDetailSlice.js

3. Inside components -|home.layouts,property,users

4. home-|
      Home.jsx

5. layouts-| Banner.jsx, CustomeLoader.jsx, CustomLoader.css, Footer.jsx, Navbar.jsx, Search.jsx


6. property-| PropertyDetail.jsx, PropertyPage.jsx,PropertyFilter.jsx, PropertyList.jsx

7. users-| ConfirmDetail.jsx, MyBookedPage.jsx, UserInfoForm.jsx

        


## Short Desc of each file(jsx and js)

1. Home - Inside home file there are 4 components(Navbar, Banner, Search, Footer) 

2. Navbar - Basic navbar with myBooking page link

3. Footer - Basic Footer

4. Search - SearchBar Feature

5. CustomeLoader - Add Loader with custom css

6. PropertyPage - Inside this file there are 2 component(PropertyFilter, PropertyList)

7. PropertyFilter - Search and Filter functionality

8. PropertyList - Contain list and display to client(user)

9. PropertyDetail - Contail all detail of perticular Property

10. UserInfoForm - User need to fill detail here

11. ConfirmationDetail - display brief summary of users and selected Property

12. MyBookedPage: Display their booked properties list


## Short Desc of each slices(redux)

1. UserDetailSlice - Functions store user details

2. SeachSlice - User enter keyword then store 

3. PropertyDataSlice - fetch data from api and store

4. FilterSlice - Store keyword for Tenant type, Budget, Furnished, Bedrooms

5. FetchSinglePropertySlice - compare with params id and fetch single property  

6. BookingSlice - Store booked property
