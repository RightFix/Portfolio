export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>&copy; {year} Righteousness. All rights reserved.</p>
      </div>
    </footer>
  );
}