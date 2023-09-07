# SocialSeedlings
SocialSeedlings is a responsive website, similar to Instagram, that utilizes the Unsplash API to showcase an alternative user interface design. It features a mobile layout, dark mode, infinite scroll, caching, and more.
## Inspiration
https://dribbble.com/shots/18340567-Sosmad-Social-Media-App

## Current functionalities:
### API
Caching all responses indefinitely for now to save requests, since only 50 requests/hour are possible.
Fetch 10 random posts.
Fetch profile of any user.

### NewsFeed page
Fetch 10 random posts.
Blurhash and Lazy loading on posts.
Any user profile can be opened by clicking on username/profile pic.

### Profile page
Displaying a random profile for now.
Display user info
Display 10 posts of the user
2 view modes: ListView and GridView

### App
Responsive UI (Please refresh when switching to mobile view from desktop via devtools, should not be a problem in actual use by normal users).
Dark/Light mode is automatically set according to user preferences, option to toggle is also present.
Infinite Scroll displays 10 photos repeatedly to save on Requests(demo only).
