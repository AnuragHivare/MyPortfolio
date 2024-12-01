const projects = [
    { title: 'Bug-Tracker  Jan 2024 - July 2024 ', description: 'A bug tracking software which organises the project between project managers and developers by tracking each bug within each project with a professional GUI and database.' },
    { title: 'Bidding/Auction Website  Aug 2022 - Feb 2023 ', description: 'Designed and developed a comprehensive bidding auction website enabling users to list their products and facilitate bidding by other users. Implemented user friendly interfaces for product listings, bid placements, and bid updates..' },
    { title: 'To-Do List', description: 'Developed a dynamic and user-friendly application to manage tasks effectively. Features include task creation, editing, deletion, and status updates.' },
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <>
                        <div
                            className="project-card"
                            key={index}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <hr/>
                    </>
                    
                ))}
            </div>
        </section>
    );
};

export default Projects;