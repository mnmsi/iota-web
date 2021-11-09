const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()
const axios = require("axios")
const PORT = process.env.PORT || 3000
const indexPath = path.resolve(__dirname, "..", "build", "index.html")

// get blog data

let blog_data = "";
function getAllBlog() {
  return new Promise((resolve) => {
    return axios
      .get("https://iotait.tech/Data.json")
      .then((res) => {
        blog_data = res.data;
        resolve(blog_data);
      });
  });
}

// static resources should just be served as they are
app.use(
	express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" }),
)
// here we serve the index.html page
app.get("/:urlname", (req, res, next) => {
	fs.readFile(indexPath, "utf8", (err, htmlData) => {
		if (err) {
			console.error("Error during file reading", err)
			return res.status(404).end()
		}
		// inject meta tags

		htmlData = htmlData
			.replace("<title>IOTA IT</title>", `<title>IOTA IT</title>`)
			.replace("__META_OG_TITLE__", "IOTA IT")
			.replace("__META_OG_DESCRIPTION__", "description")
			.replace("__META_DESCRIPTION__", "subttile")
			.replace("__META_OG_IMAGE__", "nothing")
		return res.send(htmlData)
	})
})
app.get("/blog-details/:blogname",async (req, res, next) => {
	const result = blog_data == "" ? await getAllBlog() : blog_data;
	if(result?.blogs){
		let singleBlogData=result?.blogs.filter((item)=>item.heading.toLowerCase().replace(/\s/g, "-")==req.params.blogname)
		fs.readFile(indexPath, "utf8", (err, htmlData) => {
			if (err) {
				console.error("Error during file reading", err)
				return res.status(404).end()
			}
			// inject meta tags
			if (req.params.blogname && singleBlogData.length > 0) {
				htmlData = htmlData
					.replace(
						"<title>IOTA IT</title>",
						`<title>${req.params.blogname}</title>`,
					)
					.replace("__META_OG_TITLE__", singleBlogData[0].heading)
					.replace("__META_OG_DESCRIPTION__", singleBlogData[0].description)
					.replace("__META_DESCRIPTION__",singleBlogData[0].description)
					.replace("__META_OG_IMAGE__", singleBlogData[0].image)
				return res.send(htmlData)
			} else {
				htmlData = htmlData
					.replace("<title>IOTA IT</title>", `<title>IOTA IT</title>`)
					.replace("__META_OG_TITLE__", "IOTA IT")
					.replace("__META_OG_DESCRIPTION__", "description")
					.replace("__META_DESCRIPTION__", "subttile")
					.replace("__META_OG_IMAGE__", "nothing")
				return res.send(htmlData)
			}
		})
	}else{
		fs.readFile(indexPath, "utf8", (err, htmlData) => {
			if (err) {
				console.error("Error during file reading", err)
				return res.status(404).end()
			}
			// inject meta tags
			htmlData = htmlData
				.replace("<title>IOTA IT</title>", `<title>IOTA IT</title>`)
				.replace("__META_OG_TITLE__", "IOTA IT")
				.replace("__META_OG_DESCRIPTION__", "description")
				.replace("__META_DESCRIPTION__", "subttile")
				.replace("__META_OG_IMAGE__", "nothing")
			return res.send(htmlData)
		})
	}
	
})
// listening...
app.listen(PORT, (error) => {
	if (error) {
		return console.log("Error during app startup", error)
	}
	console.log("listening on " + PORT + "...")
})
