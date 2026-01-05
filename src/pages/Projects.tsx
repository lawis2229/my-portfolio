import axios from "axios";
import { useEffect, useState } from "react";
import { GoCopy } from "react-icons/go";
import Swal from "sweetalert2";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(
        "https://api.github.com/users/lawis2229/repos"
      );
      setRepos(response.data);
      console.log(response.data);
    };

    fetchRepos();
  }, []);

  const colors = [
    "bg-red-500",
    "bg-yellow-400",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-cyan-500",
  ];

  const getColor = (language) => {
    if (!language) return "bg-gray-400";
    return colors[language.length % colors.length];
  };

  return (
    <>
      <h3 className="py-4 font-semibold">My Github Repository</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {repos.map((repo) => (
          <div className="flex flex-col gap-2" key={repo.id}>
            <a href={repo.html_url} target="_blank">
              <div className="card outline-1 h-[110px] rounded-lg outline-gray-400 px-6 py-5 flex flex-col justify-between">
                <div className="flex justify-between">
                  <h6 className="text-blue-500 font-semibold text-[14px]">
                    {repo.name}
                  </h6>
                  <label className="flex items-center px-1 outline-1 text-[11px] rounded-xl font-semibold capitalize">
                    {repo.visibility}
                  </label>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-1 items-center">
                    <div
                      className={`rounded-full h-3 w-3 ${getColor(
                        repo.language
                      )}`}
                    ></div>
                    <label className="text-[12px]">{repo.language}</label>
                  </div>
                  <label className="text-[11px]">View on GitHub</label>
                </div>
              </div>
            </a>

            <div className="flex w-full gap-2">
              <p>Clone:</p>
              <div className="flex flex-1 items-center outline-1 rounded-lg w-[70%] px-3">
                <p className="truncate">{repo.clone_url}</p>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(repo.clone_url).then(() => {
                    Swal.fire({
                      toast: true,
                      position: "bottom-end",
                      icon: "success",
                      title: "Copied!",
                      showConfirmButton: false,
                      timer: 1500,
                      timerProgressBar: true,
                    });
                  });
                }}
              >
                <GoCopy size={25} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

//  <div key={repo.id}>
//     <h3>{repo.name}</h3>
//     <p>{repo.description}</p>

//     <a href={repo.html_url} target="_blank">
//       View on GitHub
//     </a>
//   </div>

export default Projects;
