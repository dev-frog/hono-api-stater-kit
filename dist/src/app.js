import configureOpenAPI from "./libs/configure-open-api.js";
import createApp from "./libs/create-app.js";
import index from "./routes/index.route.js";
// data source initialization
// try {
//   const { isInitialized } = await dataSource.initialize()
//   console.log('Database initialize status:', isInitialized)
// } catch (e) {
//   console.log(e)
// }
const app = createApp();
configureOpenAPI(app);
const routes = [index];
routes.forEach((route) => {
    app.route("/", route);
});
export default app;
