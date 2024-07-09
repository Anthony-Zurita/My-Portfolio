import Image from "next/image";

const Project = () => {
  return (
    <div id="projects" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-2 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <h1 className="text-[40px] font-bold uppercase text-[#55e6a5] mb-[5rem]">
          Projects
        </h1>

        <div className="project-card project-container mb-[4rem] relative">
          <Image
            src="/images/leaselink_UI.png"
            alt="LeaseLink"
            layout="fill"
            className="object-contain shadow-xl"
          ></Image>
          <div className="project-text absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100">
            <p>Lease Link Project</p>
          </div>
        </div>

        <div className="project-card project-container mb-[4rem] relative">
          <Image
            src="/images/SHPE_App.png"
            alt="LeaseLink"
            layout="fill"
            className="object-contain shadow-xl"
          ></Image>
          <div className="project-text absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100">
            <p>SHPE Mobile App Project</p>
          </div>
        </div>

        <div className="project-card project-container mb-[4rem] relative">
          <Image
            src="/images/minesweeper_App.png"
            alt="LeaseLink"
            layout="fill"
            className="object-contain shadow-xl"
          ></Image>
          <div className="project-text absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100">
            <p>Minesweeper Project</p>
          </div>
        </div>

        <div className="project-card project-container mb-[4rem] relative">
          <Image
            src="/images/filler_app.png"
            alt="filler"
            layout="fill"
            className="object-contain shadow-xl"
          ></Image>
          <div className="project-text absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100">
            <p>Filler Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
