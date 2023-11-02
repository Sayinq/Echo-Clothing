import React from 'react'
import '../index.css';
import TheNavbar from '../components/TheNavbar';
import HeroSection from '../components/HeroSection';
import NewSelections from '../components/NewSelection';
import MarqueeDivider from '../components/MarqueeDivider';

const Home = () => {

    return (
        <main>
            <TheNavbar />

            {/* Component for swiping horizontally */}
            {/* Needs images upscaled */}

            <HeroSection />

            {/* Locomotive scrolling with grab */}
            {/* Make component for 'scalability' */}
            <section className="flex flex-col w-screen h-auto py-8 gap-y-4 pl-4">
                <div id="new-header" className=" font-semibold text-3xl">NEW</div>
                <div id="swiper-selection">
                    <NewSelections />
                </div>
            </section>

            {/* Page divider component (Scrolling Text and Y2K sprite) */}
            <div id="page-divider" className="pb-2">
                    <MarqueeDivider />
            </div>

            {/* Four Square grid with items */}
            <section className="flex flex-col w-screen h-fit py-4 bg-green-500">
                <div className="">
                    <h2>NEW</h2>
                </div>
                <div className="">

                </div>
            </section>

            {/* About the studio */}
            <div id="about">

            </div>

            {/* Footer navigation and other links / email subscription */}
            <footer>

            </footer>
        </main>
    )
}

export default Home