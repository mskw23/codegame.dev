import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { Path } from "./types";

export const paths: Path[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: <SiJavascript className="mr-4" />,
  },
  { id: "react", name: "React", icon: <FaReact className="mr-4" /> },
  {
    id: "mixed",
    name: "Mixed",
    icon: (
      <div className="flex items-center mr-4">
        <SiJavascript className="mr-2" />
        <FaReact />
      </div>
    ),
  },
];
