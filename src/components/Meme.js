import React from "react"


function Meme() {
    return (
        <main className="main">
            <form className="form">
                <input type="text" className="input-field" placeholder="Top text" />
                <input type="text" className="input-field" placeholder="Bottom text" />
                <button className="btn">Get a new meme image  🖼</button>
            </form>
        </main>
    )
}

export default Meme