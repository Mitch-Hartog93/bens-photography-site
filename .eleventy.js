// .eleventy.js
module.exports = function(eleventyConfig) {
  // Kopieer de 'static' map naar de uiteindelijke website (_site map)
  // Dit is voor afbeeldingen, CSS, etc. die niet door Eleventy worden verwerkt.
  eleventyConfig.addPassthroughCopy("static");

  // Kopieer de 'admin' map voor het CMS
  // Dit zorgt ervoor dat admin/config.yml en admin/index.html in de _site map komen.
  eleventyConfig.addPassthroughCopy("admin");

  // Voeg slugify filter toe (nodig voor nette URLs in galerij)
  // Zorg ervoor dat je 'slugify' hebt geïnstalleerd met: npm install slugify
  const slugify = require("slugify");
  eleventyConfig.addFilter("slug", (input) => {
    const options = {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true
    };
    return slugify(input, options);
  });

  return {
    // Mappenstructuur vertellen aan Eleventy
    dir: {
      input: ".",         // Bronbestanden staan in de hoofdmap (incl. content map)
      includes: "_includes", // Map voor herbruikbare stukjes (header, footer, layouts)
      data: "_data",       // Map voor globale data (site.json, gallery.json)
      output: "_site"      // Map waar Eleventy de uiteindelijke website bouwt
    },
    // --- DIT IS HEEL BELANGRIJK VOOR NUNJUCKS ---
    // Welke template talen we gebruiken en hoe
    templateFormats: ["md", "njk", "html"], // Zorgt ervoor dat .njk wordt herkend
    markdownTemplateEngine: "njk",          // Gebruik Nunjucks ook voor Markdown bestanden
    htmlTemplateEngine: "njk",             // Gebruik Nunjucks ook voor HTML bestanden
    dataTemplateEngine: "njk",             // Gebruik Nunjucks ook voor data bestanden
    // --- EINDE BELANGRIJK GEDEELTE ---
  };
};
