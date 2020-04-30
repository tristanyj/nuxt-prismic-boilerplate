/**
 * Set head link
 * @param {Object} options - module options object
 */
const link = function (options) {
	this.options.head.link = this.options.head.link || []
//   this.options.head.link.push(
//     { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
//     {
//       rel: "apple-touch-icon",
//       sizes: "180x180",
//       href: "/favicon/apple-touch-icon.png"
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       sizes: "32x32",
//       href: "/favicon/favicon-32x32.png"
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       sizes: "16x16",
//       href: "/favicon/favicon-16x16.png"
//     },
//     {
//       rel: "manifest",
//       href: "/favicon/site.webmanifest"
//     },
//     {
//       rel: "mask-icon",
//       href: "/favicon/safari-pinned-tab.svg",
//       color: options.accentColor
//     }
//   );
}

module.exports = link
