import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
      <div className="w-40 h-40 relative mb-4">
        <Image src="/dude.jpg" alt="the dude" fill />
      </div>
      <h1 className="text-xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="text-gray-600 mt-2">Whatcha lookin' for, dude?</p>
    </div>
  );
}
