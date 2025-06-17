# N8N + Google

- https://www.youtube.com/watch?v=iAokhB-bVBw
- https://n8n.io/workflows/2198-compose-reply-draft-in-gmail-with-openai-assistant/
- https://n8n.io/workflows/2271-gmail-ai-auto-responder-create-draft-replies-to-incoming-emails/

# Vue + Google 
- login: https://devbaji.github.io/vue3-google-login/#one-tap-prompt
- Not sure if I need any google (or gmail, calendar) login/integration on the frontend, or is it all just manually done in n8n


# Google Calendar, Appointment Scheduling and Booking Page
- https://workspace.google.com/resources/appointment-scheduling/


- Manage Appointment Scheduling: https://calendar.google.com/calendar/u/0/r/week/2025/6/1?hl=en&uj=gafb-appointment_scheduling-def-en
- 
- My Briefcase Demo Email Booking Page: https://calendar.app.google/uhgJTLFsZjLgdA4KA

- In n8n, I am seeing all the calendars which are added to my main account/calendar. 
  - So the Google Credetials need to be from the developer account of the customer? 
  - or customer's calendar has to be added to mine?


# ??
- So my setup and configuration to install this app on customer's computer requires creating (?????)
  - Google Developer Account 
  - Enabling APIs 
  - Creating Google App (client id and secret)

# Setup
- create google app client id and secret 
  - https://console.cloud.google.com/auth/branding?inv=1&invt=AbzbgA&project=am-personal-437202
  - https://console.cloud.google.com/auth/clients?inv=1&invt=AbzbgA&project=am-personal-437202
- enable APIs (Drive etc)
- Create credentials (api keys)
- create SerpApi account for google search
- set Audience for beta testing
  - https://console.cloud.google.com/auth/audience?inv=1&invt=AbzbgA&project=am-personal-437202
- Create Google Calendar Booking Page