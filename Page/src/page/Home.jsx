import React from 'react'
import '../index.css';
import TheNavbar from '../components/TheNavbar';
import HeroSection from '../components/HeroSection';
import NewSelections from '../components/NewSelection';
import MarqueeDivider from '../components/MarqueeDivider';
import BestSellers from '../components/BestSellers';
import ashPuffer from '../assets/clothes/ash-puffer.png';
import ashHat from '../assets/clothes/ash-hat.png';

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
                <div id="about-gallery" className="flex flex-col w-full h-full gap-y-2">
                    <div id="top-gallery" className="flex flex-row w-full justify-between items-center gap-x-2">
                        <img src={ashPuffer} className="w-1/2" />
                        <img src={ashHat} className="w-1/2" />
                    </div>
                    <div id="bottom-gallery" className="">
                        <img src={ashPuffer} className="" />
                    </div>
                </div>
            </section>

            {/* Footer navigation and other links / email subscription */}
            <footer className="flex flex-col pt-8 px-6">
                <div id="footer-top" className="flex flex-row justify-between items-start">
                    <div id="footer-sections" className="flex flex-col gap-y-2 uppercase">
                        <h2 className="text-xl font-semibold">Sections</h2>
                        <span className="text-sm">About the brand</span>
                        <span className="text-sm">Lookbook</span>
                        <span className="text-sm">Help</span>
                    </div>
                    <div id="footer-info" className="flex flex-col gap-y-2 uppercase">
                        <h2 className="text-xl font-semibold">Information</h2>
                        <span className="text-sm">Privacy Policy</span>
                        <span className="text-sm">Public Offer</span>
                    </div>
                </div>
                <div id="footer-middle" className="">

                </div>
                <div id="footer-bottom" className="">

                </div>
            </footer>
        </main>
    )
}

export default Home