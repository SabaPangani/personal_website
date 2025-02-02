export default function Projects() {
  return (
    <div className="mt-20">
      <h1 className="text-5xl text-gray-900 font-extrabold mb-4">
        My Projects
      </h1>
      <p className="text-gray-900 text-3xl font-bold">
        I love to create things, and I'm always working on something new! You
        can view some of my favorite projects below.
      </p>

      <ul className="flex mt-10 flex-wrap justify-between gap-y-5">
        <li className="flex flex-col justify-center items-center rounded-md py-5 w-[calc(33.333%-20px)]">
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/v1688050633/Challenges/jghr4d3xvrzycrpuj1so.jpg"
            alt="Thumbnail"
            className="rounded-md mb-1 h-full max-h-[250px]"
          />
          <h2 className="font-extrabold text-2xl">Link-sharing app</h2>
          <p className="font-bold text-xl">Social sharing app</p>
        </li>
        <li className="flex flex-col justify-center items-center rounded-md py-5 w-[calc(33.333%-20px)]">
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/v1614355720/Challenges/v760dr4mqyro0xey3dr3.jpg"
            alt="Thumbnail"
            className="rounded-md mb-1 h-full max-h-[250px]"
          />
          <h2 className="font-extrabold text-2xl">Invoice management app</h2>
          <p className="font-bold text-xl">Social sharing app</p>
        </li>
        <li className="flex flex-col justify-center items-center rounded-md py-5 w-[calc(33.333%-20px)]">
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/v1614355720/Challenges/v760dr4mqyro0xey3dr3.jpg"
            alt="Thumbnail"
            className="rounded-md mb-1 h-full max-h-[250px]"
          />
          <h2 className="font-extrabold text-2xl">Invoice management app</h2>
          <p className="font-bold text-xl">Social sharing app</p>
        </li>
        <li className="flex flex-col justify-center items-center rounded-md py-5 w-[calc(33.333%-20px)]">
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/v1614355720/Challenges/v760dr4mqyro0xey3dr3.jpg"
            alt="Thumbnail"
            className="rounded-md mb-1 h-full max-h-[250px]"
          />
          <h2 className="font-extrabold text-2xl">Invoice management app</h2>
          <p className="font-bold text-xl">Social sharing app</p>
        </li>
      </ul>
    </div>
  );
}
