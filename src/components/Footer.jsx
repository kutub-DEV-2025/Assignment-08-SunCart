export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center space-y-2">
        <p className="font-semibold">Contact: support@suncart.com</p>

        <div className="flex justify-center gap-4">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>

        <p>Privacy Policy</p>
      </div>
    </footer>
  );
}