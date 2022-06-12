import type { NextPage } from "next";
import { CodeBlock } from "../components/codeBlock";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";

const code = `function multiplyBy2(num) {
  return num * 2;
}

function outer() {
  let counter = 0;
  function increment() {
    if(counter > 1) {
      counter = 0
    } else {
      counter++;
    }
  }
  function getCounter() {
    return counter;
  }
  return {
    increment,
    getCounter,
  };
}

const myObject = outer();

myObject.increment();
myObject.increment();
myObject.increment();
const result = multiplyBy2(myObject.getCounter());
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <main className="flex h-screen">
        <div className="md:flex hidden basis-full my-24 mr-16 items-center justify-center">
          <div className="bg-accent w-full h-full">
            <CodeBlock
              code={code}
              correct={[23, 6, 11, 26, 9, 15, 2]}
              result={[]}
              onLinePress={() => console.log("test")}
              style={{ borderRadius: 0 }}
            />
          </div>
        </div>
        <Navigation className="basis-full flex justify-center" />
      </main>
    </Layout>
  );
};

export default Home;
