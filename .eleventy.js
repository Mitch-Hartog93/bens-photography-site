// .eleventy.js
module.exports = function(eleventyConfig) {
    // Kopieer de 'static' map naar de uiteindelijke website (_site map)
    eleventyConfig.addPassthroughCopy("static");
    // Kopieer de 'admin' map voor het CMS
    eleventyConfig.addPassthroughCopy("admin");
  
    // --- DIT GEDEELTE IS BELANGRIJK VOOR NUNJUCKS ---
    return {
      // Mappenstructuur vertellen aan Eleventy
      dir: {
        input: ".",         // Bronbestanden staan in de hoofdmap (incl. content map)
        includes: "_includes", // Map voor herbruikbare stukjes
        data: "_data",       // Map voor globale data
        output: "_site"      // Map waar Eleventy de uiteindelijke website bouwt
      },
      // Welke template talen we gebruiken en hoe
      templateFormats: ["md", "njk", "html"], // Zorgt ervoor dat .njk wordt herkend
      markdownTemplateEngine: "njk",          // Gebruik Nunjucks ook voor Markdown bestanden
      htmlTemplateEngine: "njk",             // Gebruik Nunjucks ook voor HTML bestanden
      dataTemplateEngine: "njk",             // Gebruik Nunjucks ook voor data bestanden
    };
    // --- EINDE BELANGRIJK GEDEELTE ---
  };