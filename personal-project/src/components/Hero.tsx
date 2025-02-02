export default function Hero() {
  return (
    <div className="mx-auto w-full flex flex-col justify-center items-center gap-y-14">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQHcrMQ1opWVzg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695603009809?e=1744243200&v=beta&t=fP62mYkhpw1iAwGhGRg0kiuKB2lRyE1BRhMbIkBEU3M"
        alt="My picture"
        className="w-62 h-62 rounded-full border-6 border-black hover:border-[#635FC7] transition-all cursor-pointer"
      />
      <p className="text-gray-900 text-4xl font-extrabold">
        Hey, I'm <span className="text-[#635FC7]">Saba Pangani.</span> Here, you
        can check out what I'm working on. I try my best to create things with ❤
      </p>
    </div>
  );
}
