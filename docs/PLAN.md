# Plan

## Features

- Allow users to log in and record audio
- Allow users to log in and view their recordings
- Maybe transcribe audio
- Maybe allow users to search recordings via names/transcriptions
- Maybe have a superuser account that can add/remove users

## Tech

I have built two POCs with AI already, one with node express/tanstack start and one with python fastapi becuase transcribing via whisper seemed like the way to go. However i am a javascript head so ill probably go back to node and allow people to attach their own whisper(er) themselves. I dont really care about transcription i mostly just want to own my own recorded data.

Having said that my current thoughts about tech to use are:

### Backend
Might go for Bun for built-in typescript support and either express for familiarity or something Bun-y like Elysia which ive never used.

### Frontend
I love tanstack router so ill go with that, i dont believe i will need SSR so wont go with tanstack start.

### Libraries

#### Frontend

- tanstack router
- react query
- tabler or lucide icons
- regular old css very likely


#### Backend

- Bun
- Might start with bun serve and if i end up needing a framework i can switch later. people seem to like hono?
- maybe Postgres as i run that on my own server for a bunch of stuff already
- ORM... drizzle perhaps

