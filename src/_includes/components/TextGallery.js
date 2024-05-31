const { html } = require('common-tags');

function TextGallery({ }) {
    return html`
    <div class="h-full py-8 relative my-40">
        <div class="grid grid-cols-[repeat(24,_minmax(0,_1fr))] py-16 text-blue bg-gray">
            <div class="col-start-[3] col-end-[12]">
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

        <div class="absolute top-0 h-full w-full grid grid-cols-[repeat(24,_minmax(0,_1fr))]">
            <div class="col-start-[13] col-end-[23] relative">
                <div class="h-1/2 pb-4">
                    <img class="object-cover ml-auto w-[90%] h-full" src="https://www.placehold.co/1920x1080" />
                </div>
                <div class="flex h-1/2 pt-4">
                    <img class="w-1/2 mr-8 object-cover h-full" src="https://www.placehold.co/1920x1080" />
                    <img class="w-1/4 h-1/2 object-cover aspect-square" src="https://www.placehold.co/1920x1080" />
                </div>
            </div>
        </div>
    </div>
    `;
}

module.exports = TextGallery;