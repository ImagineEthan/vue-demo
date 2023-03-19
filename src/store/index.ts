import Home from "./modules/home";
import Head from "./modules/head";

const useStore = () => ({
  useHomeStore: Home(),
  useHeadStore: Head(),
});

export default useStore;
