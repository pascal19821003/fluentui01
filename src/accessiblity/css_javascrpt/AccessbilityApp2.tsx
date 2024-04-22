import React, { useState } from 'react'
import './style.css'
export default function AccessbilityApp() {
    const [announce, setAnnounce] =useState("")

    const handleAdd = () => {
        alert("handle add")
    }

    const hanleChangeAnnounce = () => {
        setAnnounce("it is annouce at  " + new Date());
    }
    return (
        <>
            {/* <h1>Form CSS example</h1>
            <form>
                <div>
                    <label htmlFor="name">Enter your name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="age">Enter your age:</label>
                    <input type="text" name="age" id="age" />
                </div>
                <div></div>
            </form> */}
            {/* <div role="main">
                <h1>My heading</h1>

                <p tabIndex={0}>This is the first section of my document.</p>

                <p tabIndex={0}>I'll add another paragraph here too.</p>

                <ol>
                    <li>Here is</li>
                    <li>a list for</li>
                    <li>you to read</li>
                </ol>

                <h2>My subheading</h2>

                <p  >
                    This is the first subsection of my document. I'd love people to be able to
                    find this content!
                </p>

                <h2>My 2nd subheading</h2>

                <p  >
                    This is the second subsection of my content. I think is more interesting than
                    the last one.
                </p>
            </div>
            <ol>
                <li>
                    <a href="https://www.baidu.com" >baidu</a>
                </li>
                <li>
                    <a href="https://www.google.com" >google</a>
                </li>
            </ol>
            <div role="button">
                <button onClick={handleAdd}>add</button>
            </div> */}
            {/* <div className='dinosaur'>

                <img src="https://mdn.github.io/learning-area/accessibility/html/dinosaur.png" />

                <img
                    src="https://mdn.github.io/learning-area/accessibility/html/dinosaur.png"
                    alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />

                <img
                    src="https://mdn.github.io/learning-area/accessibility/html/dinosaur.png"
                    alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
                    title="The Mozilla red dinosaur" />

                <img src="https://mdn.github.io/learning-area/accessibility/html/dinosaur.png" aria-labelledby="dino-label" />

                <p id="dino-label">
                    The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing upright like
                    a human, with small arms, and a large head with lots of sharp teeth.
                </p>

            </div>

            <label htmlFor='aaaa'>
                entry name: 
                <input id="aaaa" aria-required={true} aria-disabled={true}  />
            </label> */}

            <header>i am header</header>
            <nav aria-label='navigation1111'>
                <ol>
                    <li>aaa</li>   
                    <li>bbb</li>
                </ol>
            </nav>
            <nav  aria-label='navigation2222'>
                <ol>
                    <li>aaa222</li>   
                    <li>bbb222</li>
                </ol>
            </nav>
            <main aria-label='main111'>
                it is main
            </main>
            <footer>
                i am footer
            </footer>
            {/* <div role="button" onClick={handleAdd}>add</div> */}
            <br/>
            <select aria-label="Country calling code" name="countryCode" aria-expanded={false}>
                <option>aaa</option>
                <option>bbb</option>
                <option>ccc</option>
            </select>
            <br/>
            <div role="search">test role</div>
            <hr/>
            <button onClick={hanleChangeAnnounce}>change announce context</button>
            <div id="announce" >{announce}</div>
        </>
    )
}
