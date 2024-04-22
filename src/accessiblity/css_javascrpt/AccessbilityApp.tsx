import React, { useState } from 'react'
import './style.css'
export default function AccessbilityApp() {
    const [announce, setAnnounce] = useState("")

    const handleAdd = () => {
        alert("handle add")
    }

    const hanleChangeAnnounce = () => {
        setAnnounce("it is annouce at  " + Math.round(Math.random()*10));
    }
    return (
        <>
            <header>
                <h1>Header</h1>

                {/* <!-- Even is it's not mandatory, it's common practice to put the main navigation menu within the main header --> */}

                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our team</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    {/* <!-- A Search form is another common non-linear way to navigate through a website. --> */}

                    <form>
                        <input type="search" name="q" placeholder="Search query" role='search'  aria-label="Search through site content"/>
                        <input type="submit" value="Go!" />
                    </form>
                </nav>
            </header>

            {/* <!-- Here is our page's main content --> */}
            <main>

                {/* <!-- It contains an article --> */}
                <article  >
                    <div   aria-live={'polite'} aria-atomic>
                      the result is: {announce}
                    </div>
                    <div>
                        <button onClick={hanleChangeAnnounce} >change accounce content</button>
                    </div>
                    <h2>Article heading</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>

                    <h3>subsection</h3>

                    <p>Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.</p>

                    <p>Pelientesque auctor nisi id magna consequat sagittis. Curabitur dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.</p>

                    <h3>Another subsection</h3>

                    <p>Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum soclis natoque penatibus et manis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>

                    <p>Vivamus fermentum semper porta. Nunc diam velit, adipscing ut tristique vitae sagittis vel odio. Maecenas convallis ullamcorper ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, is fringille sem nunc vet mi.</p>
                </article>

                {/* <!-- the aside content can also be nested within the main content --> */}
                <aside  >
                    <h2>Related</h2>

                    <ul>
                        <li><a href="#">Oh I do like to be beside the seaside</a></li>
                        <li><a href="#">Oh I do like to be beside the sea</a></li>
                        <li><a href="#">Although in the North of England</a></li>
                        <li><a href="#">It never stops raining</a></li>
                        <li><a href="#">Oh well...</a></li>
                    </ul>
                </aside>

            </main>

            {/* <!-- And here is our main footer that is used across all the pages of our website --> */}

            <footer>
                <p>©Copyright 2050 by nobody. All rights reversed.</p>
            </footer>
        </>
    )
}