import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSolvedProblems } from "../store/solvedProblemsReducer";
import "../style/style.css";
import CodeBroLogo from "../components/CodeBroLogo";
import { useNavigate } from "react-router-dom";

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CombineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function QrCodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function EntrancePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // window.location.reload()

  useEffect(() => {
    // Set html overflow-y to scroll when component mounts (entering Entrance page)
    document.documentElement.style.overflowY = "scroll";

    // Clean up function to reset html overflow style when component unmounts (leaving Entrance page)
    return () => {
      document.documentElement.style.overflowY = "initial";
    };
  }, []);

  useEffect(() => {
    const userName = localStorage.getItem("name");
    if (!userName || userName === "") {
      dispatch(setSolvedProblems([]));
      localStorage.clear();
      localStorage.setItem("solved", "[]");
      localStorage.setItem("attempts", "[]");
      localStorage.setItem("userAttempts", "[]");
    } else {
      navigate("/home");
    }
  }, []);

  useEffect(() => {});
  return (
    <div className="entrancePage bg-gray-950 text-gray-50 min-h-[100dvh] flex flex-col">
      <header className="px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-2">
          <CodeBroLogo />
        </Link>

        <div className="toStoreImage" style={{ display: "none" }}>
          {images.profileImages.map((image, index) => (
            <img key={index} src={image} />
          ))}
        </div>

        <div className=" flex items-center gap-4 navRemoveOnMini">
          <Link
            to="/register"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="marginLeft inline-flex text-white h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:focus-visible:ring-gray-300"
          >
            Already have an account
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-8 px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl text-center space-y-4">
          <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Elevate your DSA skills with{" "}
            <span className="codeText text-4xl text-white md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Code
            </span>
            Bro
          </h1>
          <p className="text-gray-500 text-lg md:text-xl">
            Unlock your full potential with our comprehensive coding platform.
          </p>
          <div className=" entranceBtnBox">
            <Link
              to="/register"
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="inline-flex text-white h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:focus-visible:ring-gray-300"
            >
              Already have an account
            </Link>
          </div>
        </div>
        <div className="grid mt-10 grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="flex flex-col items-center gap-4">
            <CodeIcon className="w-16 h-16" />
            <h3 className="text-xl text-white font-bold">
              Comprehensive Curriculum
            </h3>
            <p className="text-gray-500 text-center">
              Master data structures, algorithms, and problem-solving techniques
              with our extensive curriculum.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <PlayIcon className="w-16 h-16" />
            <h3 className="text-xl font-bold text-white">Hands-on Practice</h3>
            <p className="text-gray-500 text-center">
              Hone your skills with a vast library of coding challenges and
              real-world problems.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <InfoIcon className="w-16 h-16" />
            <h3 className="text-xl font-bold text-white">
              Interactive Learning
            </h3>
            <p className="text-gray-500 text-center">
              Learn from expert instructors and engage with a supportive
              community of learners.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <CombineIcon className="w-16 h-16" />
            <h3 className="text-xl font-bold text-white">Compete</h3>
            <p className="text-gray-500 text-center">
              Participate in coding competitions and challenges to hone your
              problem-solving skills.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <UserIcon className="w-16 h-16" />
            <h3 className="text-xl font-bold text-white">User Friendly</h3>
            <p className="text-gray-500 text-center">
              Our platform is designed to be intuitive and easy to use, making
              your learning experience seamless.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <QrCodeIcon className="w-16 h-16" />
            <h3 className="text-xl font-bold text-white">Quick Response</h3>
            <p className="text-gray-500 text-center">
              Our team is dedicated to providing prompt and helpful support to
              ensure your success.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 px-4 md:px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CodeIcon className="w-6 h-6" />
          <span className="text-sm font-medium">CodeBro</span>
        </div>
        <p className="text-sm text-gray-500">
          &copy; 2024 CodeBro. No rights reserved.
        </p>
      </footer>
    </div>
  );
}
