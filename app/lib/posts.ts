import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPostsData(dir: string) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(dir);
  return fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id: id,
      frontmatter: matterResult.data,
      content: matterResult.content,
    };
  });
}
