import { useEffect, useState } from "react"

export const MyProjects = () => {
    const [listOfProjects, setProjectList] = useState(null)
    useEffect(() => {
        let arr = [
            {
                project_name: 'Joke Generator Application',
                url: 'https://jokegeneratorappv1.netlify.app/',
                desc: `This Joke generator application I created using React which uses an third party joke API to generate jokes.
                       It generates generally jokes related to programmers and programming languages. Click on above link for
                       running joke application. In above application there will be a button named "Click to generate a joke" onClicking
                       this button will show a random joke.`
            },
            {
                project_name: 'Tic Tac Toe Game',
                url: 'https://tictactoegamebynaman.netlify.app/',
                desc: `It is classical tic tac toe game in which there will be two players one will be user who is playing and second will
                      be computer the player who will make first X or O in any row, column and diaglonal that player will win the game.`
            }
        ]
        setProjectList(arr)
    }, [])
    return (
        <>
          <div className="myprojects">
                <h1>Projects</h1>
                {listOfProjects?.length > 0 && <ol className="projects-list">
                    {listOfProjects.map((proj, i) => (
                                        <li key={i}>
                                            <a href={proj.url} target="_blank" className="project-link">{proj.project_name}</a>
                                            <p className="proj-desc">{proj.desc}</p>
                                        </li>
                                    )
                    )}
                    </ol>}
          </div>
        </>
    )
}