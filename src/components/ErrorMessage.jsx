export default function ErrorMessage({ message }) {
    return (
      <div className="text-red-600 bg-red-100 p-2 rounded mt-4 text-center">
        {message}
      </div>
    );
  }