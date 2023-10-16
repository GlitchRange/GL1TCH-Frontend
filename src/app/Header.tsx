export default function Header() {
  return (
    <nav className="bg-lighter-blue p-4">
      <div className="container flex justify-between items-center">
        <img
          src="../../logo-gl1tch.png"
          alt="Glitch Logo"
          className="h-10 w-auto"
        />

        <div className="space-x-4">
          <a href="#" className="text-grey hover:text-green">
            Scoreboard
          </a>
          <a href="#" className="text-grey hover:text-green">
            Challenges
          </a>
          <a href="#" className="text-grey hover:text-green">
            More
          </a>
          <a href="#" className="text-grey hover:text-green">
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}
