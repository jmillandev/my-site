import React, { useEffect, useState } from "react";
import Repo from "./repo"
import reposData from "../data/repos"
export default () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        return setRepos(reposData)
        const data = sessionStorage.getItem('repos');
        if (data) {
            let myRepos = JSON.parse(data)
            return setRepos(myRepos)
        }

        async function fetchRepos() {
            const response = await fetch('https://api.github.com/users/jgmc3012/repos')
            let myRepos = await response.json()
            sessionStorage.setItem('repos', JSON.stringify(myRepos));
            setRepos(myRepos)
        }

        fetchRepos();
    },[]);
    return (
        <div className="max-w-4xl mx-auto mt-3">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
                <p>Colaboración y contribución de código</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo) => {
                        return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="http://github.com/jgmc3012" className="btn" target="_blank" rel="noopener noreferrer">
                    Ver perfil en github
                </a>
            </div>
            <div className="mt-2"></div>
        </div>
    )
}