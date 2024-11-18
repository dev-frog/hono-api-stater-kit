import configureOpenAPI from "@/libs/configure-open-api";
import createApp from "@/libs/create-app";
import index from "@/routes/index.route";

// data source initialization
// try {
//   const { isInitialized } = await dataSource.initialize()
//   console.log('Database initialize status:', isInitialized)
// } catch (e) {
//   console.log(e)
// }

const app = createApp();

configureOpenAPI(app);

const routes = [index] as const;

routes.forEach((route) => {
  app.route("/", route);
});

export type AppType = (typeof routes)[number];

export default app;
