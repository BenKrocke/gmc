const TextGallery = require('./src/_includes/components/TextGallery');
const TextImg = require('./src/_includes/components/TextImg');

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addShortcode("textImg", TextImg);
    eleventyConfig.addShortcode("textGallery", TextGallery);

    return {
        dir: {
            input: "src",
            output: "_site"
        },
        htmlTemplateEngine: 'njk'
    }
};