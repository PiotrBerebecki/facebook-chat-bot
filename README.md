# chatbot-workshop

This is the bare bones version of Filament's Bot Framework for making chatbots with api.ai and facebook messenger.

## Quickstart

Use node version 6+ (I used 6.10.2)

```bash
git clone https://github.com/mcelearr/chatbot-workshop.git & cd chatbot-workshop
```
Create an SQL database and put the connection details into a config.env file in root of project.

Here are the fields you will need in your config.env

```bash
DB_CLIENT=postgres
DB_PORT=5432
DB_HOST=localhost
DB_USER=yourrootname
# DB_PASSWORD=yourrootpassword
DB_DATABASE=chatbot
API_AI_CLIENT=
API_AI_DEVELOPER=
FACEBOOK_TOKEN=
FACEBOOK_VERIFY=somerandomstring that will be put into facebook webhooks
FACEBOOK_SECRET=taken from dashboard
```

If you are using the postgres CLI you can create a database with `createdb somedatabasename`

```bash
npm install
npm run database-build
npm run gulp-build
tab 1
npm run gulp-watch
tab 2
npm run dev
tab 3
ngrok http 4000
```
Now go to http://localhost:4000/ in your browser.

Read more: http://www.girliemac.com/blog/2017/01/06/facebook-apiai-bot-nodejs/

## ngrok () create a tunnel so that you can share your work)
- install ngrok via brew cask or via downloadhttps://ngrok.com/download
> brew cask install ngrok

- open server
> ngrok http 4000

## Facebook developers
- sign in > user > testapp > add product > messanger >

https://9ef221e9.ngrok.io/api/webhook/facebook


#
http://localhost:4000/register
