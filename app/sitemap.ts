import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

/**
 * Automatically discovery all indexable routes in the Next.js App Router directory.
 * It scans the filesystem for folders containing a 'page.tsx' file.
 */
function getRoutes(dir: string, baseRoute = ''): string[] {
  const routes: string[] = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });

  // Check if current directory has a page.tsx (it's a route)
  const hasPage = files.some(file => file.isFile() && (file.name === 'page.tsx' || file.name === 'page.js'));
  
  if (hasPage && baseRoute !== '/api') {
    routes.push(baseRoute === '' ? '' : baseRoute);
  }

  for (const file of files) {
    if (file.isDirectory()) {
      const folderName = file.name;
      
      // Exclude special Next.js folders and API routes
      if (
        folderName.startsWith('_') || 
        folderName.startsWith('.') || 
        folderName === 'api' ||
        folderName === 'node_modules'
      ) {
        continue;
      }

      // Handle Route Groups (e.g., (marketing)) - they don't add to the URL path
      const isRouteGroup = folderName.startsWith('(') && folderName.endsWith(')');
      const nextBaseRoute = isRouteGroup ? baseRoute : `${baseRoute}/${folderName}`;
      
      routes.push(...getRoutes(path.join(dir, folderName), nextBaseRoute));
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://delicacy-property.vercel.app';
  
  // The 'app' directory is located at /app/app in this environment
  // or just /app if we are running from root.
  // Based on previous tool calls, the routes are in /app.
  const appDirectory = path.join(process.cwd(), 'app');
  
  let dynamicRoutes: string[] = [];
  try {
    dynamicRoutes = getRoutes(appDirectory);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    // Fallback to static list if filesystem read fails
    dynamicRoutes = ['', '/28-acre-jv-land-hiranandani-powai-mumbai', '/land-for-joint-venture-in-mumbai'];
  }

  // Remove duplicates and ensure root is present
  const uniqueRoutes = Array.from(new Set(dynamicRoutes));

  return uniqueRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
