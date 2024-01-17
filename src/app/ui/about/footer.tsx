export default function Footer() {
  return (
    <footer className="flex justify-between px-2">
      <p>Hosted on AWS</p>
      <p>© {new Date().getFullYear()} Josh Spence</p>
    </footer>
  );
}
