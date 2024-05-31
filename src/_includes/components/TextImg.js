const { html } = require('common-tags');

function TextImg({ }) {
    return html`
        <div class="grid grid-cols-[repeat(24,_minmax(0,_1fr))] my-32 text-blue">
            <img class="col-start-[3] col-end-[12] w-full object-cover aspect-video" src="https://www.placehold.co/1920x1080" />
            <div class="col-start-[13] col-end-[23]">
                <h2 class="text-5xl font-bold mb-8 tracking-wider">Work with us</h2>
                <p class="mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a class="bg-blue text-white flex w-48 px-4 py-3 cursor-pointer hover:bg-blue-dark transition" src="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    Careers
                </a>
            </div>
        </div>    
    `;
}

module.exports = TextImg;