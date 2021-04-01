app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

configViewEngine(app);

initWebRoutes(app);

initCronJob();

let port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log(`App is running at port ${port}`);
  });