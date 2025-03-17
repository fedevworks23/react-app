import { useState } from "react";

function HomeComponent() {
  const name = "React App Component";
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    console.log("hello");
    setNum((num) => (num += 1));
  };
  const reset = () => {
    setNum((num) => (num = 0));
  };
  return (
    <>
      <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="../src/assets/react.svg"
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Company retreats
            </div>
            <a
              href="#"
              class="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p class="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
