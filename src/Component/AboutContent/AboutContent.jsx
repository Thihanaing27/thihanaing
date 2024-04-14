export const AboutContent = () => {
  return (
    <div className="w-2/3 flex flex-col gap-4 my-8">
      {/* about me */}
      <div className=" border-b-[2px] border-sky-500 px-4 py-2">
        <h1 className="text-center text-lg font-semibold tracking-widest underline pb-4">
          About me
        </h1>
        <p className="">
          Hey there! I'm <b>Thiha Naing</b>, a freelance web developer
          passionate about crafting captivating online experiences. With
          expertise in{" "}
          <i>
            HTML, CSS, Tailwind CSS, Bootstrap, WordPress, JavaScript, and
            React.js
          </i>{" "}
          I specialize in front-end development to help businesses like yours
          thrive in the digital world.
        </p>
      </div>
      <div className=" border-b-[2px] border-sky-500 px-4 py-2">
        <h1 className="text-center text-lg font-semibold tracking-widest underline pb-4">
          My Journey
        </h1>
        <p>
          My journey into web development began with{" "}
          <i>
            HTML, CSS, Tailwind CSS, Bootstrap, WordPress, JavaScript, and
            React.js
          </i>
          . Since then, I've embarked on a quest to learn and grow, continuously
          staying updated with the latest technologies and trends in the
          industry.
        </p>
      </div>
      <div className=" border-b-[2px] border-sky-500 px-4 py-2">
        <h1 className="text-center text-lg font-semibold tracking-widest underline pb-4">
          What I do
        </h1>
        <p>
          I specialize in turning ideas into reality through clean, efficient
          code and user-centric design. From building responsive websites to
          developing custom web applications, I love bringing creative concepts
          to life and solving complex problems along the way.
        </p>
      </div>
      <div className="border-b-[2px] border-sky-500 px-4 py-2">
        <h1 className="text-center text-lg underline pb-4">
          Why Work With Me?
        </h1>
        <ul className="md:flex gap-2 justify-center items-center">
          <li className="border-[2px] border-green-300 rounded-xl px-4 my-2">
            Expertise: With in-depth knowledge of HTML, CSS, Tailwind CSS,
            Bootstrap, WordPress, JavaScript, and React.js, I bring a wealth of
            technical expertise to every project.
          </li>
          <li className="border-[2px] border-green-300 rounded-xl px-4 my-2">
            Passion: I'm deeply passionate about my work and committed to
            delivering exceptional results that exceed expectations.
          </li>
          <li className="border-[2px] border-green-300 rounded-xl px-4 my-2">
            Communication: I prioritize transparent communication, keeping you
            informed every step of the way to ensure clarity and alignment
            throughout the project.
          </li>
          <li className="border-[2px] border-green-300 rounded-xl px-4 my-2">
            Collaboration: Your satisfaction is my top priority, and I'm
            dedicated to working closely with you to achieve your goals
            collaboratively.
          </li>
        </ul>
      </div>
      <div className=" border-b-[2px] border-sky-500 px-4 py-2">
        <h1 className="text-center text-lg font-semibold tracking-widest underline pb-4">
          Let's Connect
        </h1>
        <p>
          I'm always excited to collaborate on new projects and help businesses
          succeed online. Whether you're a startup looking to establish your
          online presence or an established company in need of a website
          refresh, I'm here to help.
        </p>
        <span>
          Feel free to get in touch to discuss your project or learn more about
          how I can elevate your online presence. Let's work together to turn
          your vision into reality!
        </span>
      </div>
    </div>
  );
};
