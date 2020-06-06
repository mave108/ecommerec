import Loadable from "react-loadable";
import { Loading } from "../components/Loading";

export const AsyncHomePage = Loadable({
  loader: () => import("./HomePage"),
  loading: Loading
});

export const AsyncAboutPage = Loadable({
  loader: () => import("./AboutPage"),
  loading: Loading
});
