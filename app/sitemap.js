import { brand, services, projects, blogPosts } from "@/lib/siteData";

export default function sitemap() {
  const base = brand.website.replace(/\/$/, "");

  // Static pages
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/faq",
    "/portfolio",
    "/privacy-policy",
    "/reviews",
    "/services",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  // Individual service pages
  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Individual portfolio pages
  const projectRoutes = projects.map((project) => ({
    url: `${base}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Individual blog pages
  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}