import Html from "../../assets/Html.png";
import bootstrap from "../../assets/bootstrap.png";
import css from "../../assets/css.jpg";
import wordpress from "../../assets/wordpress.png";
import tailwind from "../../assets/tailwind.jpg";
import react from "../../assets/react.png";
import jsvaScript from "../../assets/jsvaScript.png";

export const Services = () => {
  return (
    <div className="w-full flex flex-col gap-7 justify-center items-center mt-20">
      <div className="w-2/3">
        <p className="text-lg ">
          Welcome to my front-end development services page! I'm{" "}
          <b>Thiha Naing</b>, a passionate freelance front-end developer
          dedicated to helping individuals and businesses create stunning and
          user-friendly websites. With a focus on creativity, responsiveness,
          and cutting-edge technology, I specialize in crafting custom front-end
          solutions that elevate your online presence and engage your audience.
        </p>
      </div>
      <div className="w-2/3">
        <h1 className="tet-lg text-center font-semibold underline">
          What I Offer
        </h1>
        <ul>
          <li className="border-b-2 border-sky-400 rounded-xl px-4 py-2">
            Custom Web Design: Your website is your digital storefront, and it
            should reflect the essence of your brand. I specialize in custom web
            design, creating visually appealing and intuitive interfaces that
            resonate with your target audience and leave a lasting impression.
          </li>
          <li className="border-b-2 border-sky-400 rounded-xl px-4 py-2">
            Responsive Development: In today's multi-device world, it's crucial
            that your website looks and performs flawlessly across all screen
            sizes. I specialize in responsive development, ensuring that your
            website is fully optimized for desktops, tablets, and smartphones,
            providing a seamless and consistent user experience across all
            devices.
          </li>
          <li className="border-b-2 border-sky-400 rounded-xl px-4 py-2">
            Expertise: As a front-end developer, I have expertise in the latest
            front-end technologies, including HTML5, CSS3, Bootstrap, tailwind
            Css, Wordprass, JavaScript and React Js. Whether it's building
            interactive user interfaces, implementing animations, or optimizing
            performance, I leverage these technologies to create dynamic and
            engaging web experiences.
          </li>
          <li className="border-b-2 border-sky-400 rounded-xl px-4 py-2">
            Framework Proficiency: From popular frameworks like Bootstrap and
            Foundation to modern libraries like React.js, I have proficiency in
            a variety of front-end frameworks and libraries. I leverage these
            tools to streamline development, enhance functionality, and deliver
            high-quality results efficiently.
          </li>
          <li className="border-b-2 border-sky-400 rounded-xl px-4 py-2">
            Cross-Browser Compatibility: Ensuring that your website works
            seamlessly across different web browsers is essential for reaching a
            wider audience. I rigorously test and optimize websites to ensure
            cross-browser compatibility, providing a consistent experience for
            users regardless of their browser preferences
          </li>
        </ul>
      </div>
      <div className="w-2/3 my-10 flex flex-col gap-5">
        <div className="w-full h-20 flex justify-center items-center gap-10">
          <img className="w-20 h-20 rounded-full" src={Html} />
          <div className="w-2/3 h-2 bg-zinc-100 rounded-3xl">
            <div className="w-[90%] h-full bg-green-400 rounded-3xl"></div>
          </div>
        </div>
        <div className="w-full h-20 flex justify-center items-center gap-10">
          <img className="w-20 h-20 rounded-full" src={css} />
          <div className="w-2/3 h-2 bg-zinc-100 rounded-3xl">
            <div className="w-[85%] h-full bg-green-400 rounded-3xl"></div>
          </div>
        </div>
        <div className="w-full h-20 flex justify-center items-center gap-10">
          <img className="w-20 h-20 rounded-full" src={bootstrap} />
          <div className="w-2/3 h-2 bg-zinc-100 rounded-3xl">
            <div className="w-[70%] h-full bg-green-400 rounded-3xl"></div>
          </div>
        </div>
        <div className="w-full h-20 flex justify-center items-center gap-10">
          <img className="w-20 h-20 rounded-full" src={tailwind} />
          <div className="w-2/3 h-2 bg-zinc-100 rounded-3xl">
            <div className="w-[83%] h-full bg-green-400 rounded-3xl"></div>
          </div>
        </div>
        <div className="w-full h-20 flex justify-center items-center gap-10">
          <img className="w-20 h-20 rounded-full" src={wordpress} />
          <div className="w-2/3 h-2 bg-zinc-100 rounded-3xl">
            <div className="w-[60%] h-full bg-green-400 rounded-3xl"></div>
          </div>
        </div>
        <div className="w-full h-20 flex justify-center items-center gap-10">
          <img className="w-20 h-20 rounded-full" src={jsvaScript} />
          <div className="w-2/3 h-2 bg-zinc-100 rounded-3xl">
            <div className="w-[88%] h-full bg-green-400 rounded-3xl"></div>
          </div>
        </div>{" "}
        <div className="w-full h-20 flex justify-center items-center gap-10">
          <img className="w-20 h-20 rounded-full" src={react} />
          <div className="w-2/3 h-2 bg-zinc-100 rounded-3xl">
            <div className="w-[91%] h-full bg-green-400 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
