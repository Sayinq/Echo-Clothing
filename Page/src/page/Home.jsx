import React from 'react'
import '../index.css';
import TheNavbar from '../components/TheNavbar';
import HeroSection from '../components/HeroSection';
import NewSelections from '../components/NewSelection';
import MarqueeDivider from '../components/MarqueeDivider';
import BestSellers from '../components/BestSellers';

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
            <BestSellers />

            {/* About the studio */}
            <section className="flex flex-col w-screen h-auto py-8 px-4 gap-y-6">
                <h2 className="text-3xl uppercase">About the brand</h2>
                <div id="box" className="w-full h-[1px] bg-black"></div>
                <div id="text-box" className="flex flex-col uppercase font-semibold text-xl w-full max-w-[400px] h-auto">
                    <span id="text-line" className="flex justify-end">the brand name "echo"</span>
                    <span id="text-line" className="flex justify-end">comes from the abbreviation</span>
                    <span id="text-line" className="flex justify-center">"echo resonance" or "echo</span>
                    <span id="text-line" className="flex justify-start">reverberance" - The feeling</span>
                    <span id="text-line">of wholeness.</span>
                </div>
                <button className="py-2 w-full bg-transparent outline outline-1 outline-black rounded-lg">
                    <span className="text-lg">MORE DETAILS</span>
                </button>
            </section>

            {/* Footer navigation and other links / email subscription */}
            <footer>

            </footer>
        </main>
    )
}

export default Home