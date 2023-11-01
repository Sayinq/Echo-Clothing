import React from 'react'
import '../index.css';
import TheNavbar from '../components/TheNavbar';

const Home = () => {

    return (
        <main>
            <TheNavbar />

            {/* Component for swiping horizontally */}

            <section className="w-screen h-full max-h-[800px] bg-white">
                <h2>Test Text</h2>
            </section>

            {/* Locomotive scrolling with grab */}
            {/* Make component for 'scalability' */}

            <section className="flex flex-col w-screen h-fit py-4 bg-green-500">
                <div className="">
                    <h2>Collection</h2>
                </div>
                <div className="">

                </div>
            </section>
        </main>
    )
}

export default Home