const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');

/*
const MongoClient = require('mongodb').MongoClient;
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const flash = require('connect-flash');
*/

 const SequelizeStore = require('connect-session-sequelize')(session.Store);

 const sess = {
   secret: 'Super secret secret',
   cookie: {},
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
     db: sequelize
   })
 };

const PORT = process.env.PORT || 3001;
const app = express();

/*MongoClient.connect('mongodb://localhost', (err, client) => {
  if(err) {
    throw err;
  }
  const db = client.db('user-profiles');
  const user = db.collection('user');
  app.locals.users = user;
}
);

passport.use(new Strategy(
  (username, password, done) => {
    app.locals.user.findOne({username }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null,false);
      }

      if (!user) {
        return done(null,false);
      }

      return done(null, user);
    });
  
  }
));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  done(null, {id});
});

 */ 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
/*
app.use(session({
  secret: 'session secret',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  next();
}); */



// this must be run before the route.
 app.use(session(sess));
// // turn on routes-- this is usually the last thing before the you start the app.
 app.use(routes);


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

