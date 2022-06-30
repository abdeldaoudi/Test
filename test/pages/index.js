import Header from "../components/header";
import { Banner } from "../widgets/banner-proprties/banner";
import { Posts } from "../widgets/posts/posts-widget";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <Banner />
        <Posts />
      </div>
    </>
  );
}
